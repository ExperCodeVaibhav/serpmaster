import { 
  users, 
  contacts, 
  seoAnalyses, 
  aiChats, 
  projects, 
  type User, 
  type InsertUser, 
  type Contact, 
  type InsertContact,
  type SeoAnalysis,
  type InsertSeoAnalysis,
  type AiChat,
  type InsertAiChat,
  type Project,
  type InsertProject
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  createSeoAnalysis(analysis: InsertSeoAnalysis): Promise<SeoAnalysis>;
  getSeoAnalysis(website: string): Promise<SeoAnalysis | undefined>;
  
  createAiChat(chat: InsertAiChat): Promise<AiChat>;
  getAiChats(sessionId: string): Promise<AiChat[]>;
  
  createProject(project: InsertProject): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values({
        ...insertContact,
        website: insertContact.website || null,
        message: insertContact.message || null
      })
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async createSeoAnalysis(insertSeoAnalysis: InsertSeoAnalysis): Promise<SeoAnalysis> {
    const [analysis] = await db
      .insert(seoAnalyses)
      .values(insertSeoAnalysis)
      .returning();
    return analysis;
  }

  async getSeoAnalysis(website: string): Promise<SeoAnalysis | undefined> {
    const [analysis] = await db.select().from(seoAnalyses).where(eq(seoAnalyses.website, website));
    return analysis || undefined;
  }

  async createAiChat(insertAiChat: InsertAiChat): Promise<AiChat> {
    const [chat] = await db
      .insert(aiChats)
      .values(insertAiChat)
      .returning();
    return chat;
  }

  async getAiChats(sessionId: string): Promise<AiChat[]> {
    return await db.select().from(aiChats).where(eq(aiChats.sessionId, sessionId)).orderBy(aiChats.createdAt);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values({
        ...insertProject,
        imageUrl: insertProject.imageUrl || null,
        testimonial: insertProject.testimonial || null,
        clientName: insertProject.clientName || null,
        clientRole: insertProject.clientRole || null,
        duration: insertProject.duration || null,
        featured: insertProject.featured || false
      })
      .returning();
    return project;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.createdAt);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.featured, true)).orderBy(projects.createdAt);
  }
}

// Initialize database with sample projects
async function initializeDatabase() {
  try {
    // Check if projects already exist
    const existingProjects = await db.select().from(projects).limit(1);
    if (existingProjects.length > 0) {
      return; // Already initialized
    }

    const sampleProjects: InsertProject[] = [
      {
        title: "E-commerce Fashion Platform",
        description: "AI-powered SEO transformation for a leading fashion retailer",
        category: "E-commerce",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        metrics: {
          organicTraffic: 385,
          conversions: 156,
          revenue: 230
        },
        testimonial: "SERP Shine's AI algorithms identified untapped keyword opportunities and optimized our product pages for maximum visibility. The results exceeded our expectations.",
        clientName: "Sarah Johnson",
        clientRole: "Marketing Director",
        duration: "6 months",
        featured: true
      },
      {
        title: "SaaS Project Management Tool",
        description: "Comprehensive digital marketing strategy for B2B SaaS platform",
        category: "SaaS",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        metrics: {
          leadGeneration: 420,
          trialSignups: 89,
          paidConversions: 175
        },
        testimonial: "The AI-generated content and SEO strategy helped us rank for competitive keywords and significantly increased our organic visibility in the project management space.",
        clientName: "Mike Chen",
        clientRole: "Founder, GrowthCo",
        duration: "8 months",
        featured: true
      }
    ];

    const storage = new DatabaseStorage();
    for (const project of sampleProjects) {
      await storage.createProject(project);
    }
    
    console.log("Database initialized with sample data");
  } catch (error) {
    console.error("Failed to initialize database:", error);
  }
}

// Call initialization
initializeDatabase();

export const storage = new DatabaseStorage();
