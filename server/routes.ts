import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertSeoAnalysisSchema, 
  insertAiChatSchema 
} from "@shared/schema";
import { analyzeSeoWithAI, generateAIResponse } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch contacts" 
      });
    }
  });

  // AI SEO Analysis
  app.post("/api/seo-analysis", async (req, res) => {
    try {
      const { website } = req.body;
      
      if (!website) {
        return res.status(400).json({ 
          success: false, 
          error: "Website URL is required" 
        });
      }

      // Check if analysis already exists
      const existingAnalysis = await storage.getSeoAnalysis(website);
      if (existingAnalysis) {
        return res.json({ success: true, analysis: existingAnalysis });
      }

      // Generate new AI analysis
      const aiAnalysis = await analyzeSeoWithAI(website);
      
      const analysisData = {
        website,
        analysis: aiAnalysis.analysis,
        score: aiAnalysis.score,
        recommendations: aiAnalysis.recommendations
      };

      const analysis = await storage.createSeoAnalysis(analysisData);
      res.json({ success: true, analysis });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "SEO analysis failed" 
      });
    }
  });

  // AI Chat
  app.post("/api/ai-chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!message || !sessionId) {
        return res.status(400).json({ 
          success: false, 
          error: "Message and session ID are required" 
        });
      }

      // Get chat history for context
      const chatHistory = await storage.getAiChats(sessionId);
      
      // Generate AI response
      const aiResponse = await generateAIResponse(message, chatHistory);
      
      // Store the chat
      const chatData = {
        sessionId,
        message,
        response: aiResponse
      };

      const chat = await storage.createAiChat(chatData);
      res.json({ success: true, response: aiResponse, chat });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "AI chat failed" 
      });
    }
  });

  // Get chat history
  app.get("/api/ai-chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const chats = await storage.getAiChats(sessionId);
      res.json({ success: true, chats });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch chat history" 
      });
    }
  });

  // Get projects/portfolio
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json({ success: true, projects });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch projects" 
      });
    }
  });

  // Get featured projects
  app.get("/api/projects/featured", async (req, res) => {
    try {
      const projects = await storage.getFeaturedProjects();
      res.json({ success: true, projects });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch featured projects" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
