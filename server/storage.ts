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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private seoAnalyses: Map<number, SeoAnalysis>;
  private aiChats: Map<number, AiChat>;
  private projects: Map<number, Project>;
  private currentUserId: number;
  private currentContactId: number;
  private currentSeoAnalysisId: number;
  private currentAiChatId: number;
  private currentProjectId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.seoAnalyses = new Map();
    this.aiChats = new Map();
    this.projects = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentSeoAnalysisId = 1;
    this.currentAiChatId = 1;
    this.currentProjectId = 1;

    // Initialize with sample projects
    this.initializeProjects();
  }

  private initializeProjects() {
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

    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createSeoAnalysis(insertSeoAnalysis: InsertSeoAnalysis): Promise<SeoAnalysis> {
    const id = this.currentSeoAnalysisId++;
    const analysis: SeoAnalysis = { 
      ...insertSeoAnalysis, 
      id, 
      createdAt: new Date() 
    };
    this.seoAnalyses.set(id, analysis);
    return analysis;
  }

  async getSeoAnalysis(website: string): Promise<SeoAnalysis | undefined> {
    return Array.from(this.seoAnalyses.values()).find(
      (analysis) => analysis.website === website
    );
  }

  async createAiChat(insertAiChat: InsertAiChat): Promise<AiChat> {
    const id = this.currentAiChatId++;
    const chat: AiChat = { 
      ...insertAiChat, 
      id, 
      createdAt: new Date() 
    };
    this.aiChats.set(id, chat);
    return chat;
  }

  async getAiChats(sessionId: string): Promise<AiChat[]> {
    return Array.from(this.aiChats.values())
      .filter(chat => chat.sessionId === sessionId)
      .sort((a, b) => (a.createdAt?.getTime() || 0) - (b.createdAt?.getTime() || 0));
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id, 
      createdAt: new Date() 
    };
    this.projects.set(id, project);
    return project;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }
}

export const storage = new MemStorage();
