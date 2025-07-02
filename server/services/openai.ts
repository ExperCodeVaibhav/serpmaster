import OpenAI from "openai";
import type { AiChat } from "@shared/schema";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key" 
});

interface SEOAnalysisResult {
  analysis: {
    currentScore: number;
    technicalSEO: {
      score: number;
      issues: string[];
      recommendations: string[];
    };
    contentQuality: {
      score: number;
      issues: string[];
      recommendations: string[];
    };
    userExperience: {
      score: number;
      issues: string[];
      recommendations: string[];
    };
    performance: {
      score: number;
      issues: string[];
      recommendations: string[];
    };
  };
  score: number;
  recommendations: {
    priority: "high" | "medium" | "low";
    title: string;
    description: string;
    impact: string;
    effort: string;
  }[];
}

export async function analyzeSeoWithAI(website: string): Promise<SEOAnalysisResult> {
  try {
    const prompt = `
    You are an expert SEO analyst with deep knowledge of search engine optimization, technical SEO, content strategy, and user experience. 

    Analyze the website: ${website}

    Provide a comprehensive SEO analysis in JSON format with the following structure:
    {
      "analysis": {
        "currentScore": number (0-100),
        "technicalSEO": {
          "score": number (0-100),
          "issues": ["list of technical issues found"],
          "recommendations": ["specific technical improvements"]
        },
        "contentQuality": {
          "score": number (0-100),
          "issues": ["content-related issues"],
          "recommendations": ["content improvement suggestions"]
        },
        "userExperience": {
          "score": number (0-100),
          "issues": ["UX issues identified"],
          "recommendations": ["UX improvement suggestions"]
        },
        "performance": {
          "score": number (0-100),
          "issues": ["performance issues"],
          "recommendations": ["performance optimization tips"]
        }
      },
      "score": number (overall score 0-100),
      "recommendations": [
        {
          "priority": "high|medium|low",
          "title": "recommendation title",
          "description": "detailed description",
          "impact": "expected impact description",
          "effort": "implementation effort required"
        }
      ]
    }

    Focus on actionable insights that can improve search rankings, user experience, and conversion rates. Consider modern SEO best practices including Core Web Vitals, mobile-first indexing, and E-A-T principles.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert SEO analyst. Provide detailed, actionable SEO analysis in the exact JSON format requested."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    // Validate and ensure required structure
    if (!result.analysis || !result.score || !result.recommendations) {
      throw new Error("Invalid analysis response structure");
    }

    // Ensure scores are within valid range
    result.score = Math.max(0, Math.min(100, result.score));
    if (result.analysis.currentScore) {
      result.analysis.currentScore = Math.max(0, Math.min(100, result.analysis.currentScore));
    }

    return result as SEOAnalysisResult;
  } catch (error) {
    console.error("SEO Analysis Error:", error);
    
    // Provide a fallback analysis if API fails
    return {
      analysis: {
        currentScore: 65,
        technicalSEO: {
          score: 70,
          issues: ["Unable to perform detailed technical analysis"],
          recommendations: ["Contact our team for manual SEO audit"]
        },
        contentQuality: {
          score: 60,
          issues: ["Content analysis requires manual review"],
          recommendations: ["Schedule a content strategy consultation"]
        },
        userExperience: {
          score: 65,
          issues: ["UX analysis pending"],
          recommendations: ["Book a UX review session"]
        },
        performance: {
          score: 70,
          issues: ["Performance metrics need verification"],
          recommendations: ["Run comprehensive performance audit"]
        }
      },
      score: 65,
      recommendations: [
        {
          priority: "high",
          title: "Schedule Professional SEO Audit",
          description: "Our AI analysis encountered an issue. Let our experts perform a comprehensive manual audit of your website.",
          impact: "Identify critical SEO opportunities and issues",
          effort: "1-2 business days for complete analysis"
        }
      ]
    };
  }
}

export async function generateAIResponse(message: string, chatHistory: AiChat[]): Promise<string> {
  try {
    // Build context from chat history
    const context = chatHistory.slice(-10).map(chat => ({
      role: "user" as const,
      content: chat.message
    }));

    const systemPrompt = `
    You are an expert AI assistant for SERP Shine, a leading AI-powered digital marketing agency. You specialize in:
    
    - SEO optimization and strategy
    - AI-powered content generation
    - Digital marketing solutions
    - Web development and design
    - PPC management and social media marketing
    - Technical SEO and performance optimization
    
    Your role is to:
    1. Answer questions about digital marketing, SEO, and our services
    2. Provide expert advice and insights
    3. Help users understand how AI can improve their marketing
    4. Guide users towards our services when appropriate
    5. Be helpful, professional, and knowledgeable
    
    Company info:
    - SERP Shine offers AI-powered SEO, content generation, web development, and full digital marketing services
    - We use cutting-edge AI technology to deliver superior results
    - Our services include SEO packages starting at $599/month, with professional plans at $1,299/month
    - We offer free SEO analysis and consultations
    - Contact: seo@serpshine.com, +91 9001049852
    
    Keep responses concise but informative. Always be helpful and professional.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        ...context,
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "I apologize, but I'm having trouble processing your request right now. Please try again or contact our support team directly.";
  } catch (error) {
    console.error("AI Chat Error:", error);
    
    // Provide helpful fallback responses based on common queries
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      return "Our SEO packages start at $599/month for small businesses, with our popular Professional plan at $1,299/month. We also offer custom Enterprise solutions. Would you like me to connect you with our team for a personalized quote?";
    }
    
    if (lowerMessage.includes("seo") || lowerMessage.includes("search")) {
      return "Our AI-powered SEO services help businesses achieve 300% average traffic growth. We use advanced algorithms to optimize your website for search engines. Would you like a free SEO analysis of your website?";
    }
    
    if (lowerMessage.includes("ai") || lowerMessage.includes("artificial intelligence")) {
      return "We leverage cutting-edge AI technology for SEO analysis, content generation, and marketing optimization. Our AI tools can identify opportunities traditional methods miss. What specific AI-powered service interests you most?";
    }
    
    if (lowerMessage.includes("contact") || lowerMessage.includes("talk") || lowerMessage.includes("speak")) {
      return "I'd be happy to connect you with our team! You can reach us at seo@serpshine.com, call +91 9001049852, or WhatsApp us at the same number. We typically respond within 1 hour during business hours.";
    }
    
    return "I'm experiencing a temporary connection issue, but I'm here to help! For immediate assistance, please contact our team at seo@serpshine.com or +91 9001049852. We're available 24/7 to answer your digital marketing questions.";
  }
}

export async function generateContentWithAI(prompt: string, contentType: "blog" | "meta" | "social" | "email"): Promise<string> {
  try {
    const systemPrompts = {
      blog: "You are an expert content writer specializing in SEO-optimized blog posts. Create engaging, informative content that ranks well in search engines.",
      meta: "You are an expert at writing compelling meta descriptions that improve click-through rates and SEO performance.",
      social: "You are a social media expert who creates engaging, shareable content that drives engagement and conversions.",
      email: "You are an email marketing specialist who writes compelling email content that converts readers into customers."
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompts[contentType]
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "Content generation failed. Please try again.";
  } catch (error) {
    console.error("Content Generation Error:", error);
    throw new Error("Failed to generate content. Please try again later.");
  }
}
