# SERP Shine - AI-Powered Digital Marketing Platform

## Overview

SERP Shine is a modern full-stack web application built as an AI-powered digital marketing and SEO agency platform. The application showcases AI-driven services, tools, and capabilities through an interactive landing page with integrated AI chat functionality, contact forms, and portfolio displays.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI
- **State Management**: TanStack Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom dark/light theme implementation with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for fast production bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (live database connected)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared schema definitions between client and server
- **Storage**: DatabaseStorage class for all CRUD operations
- **Tables**: Users, Contacts, SEO Analyses, AI Chats, Projects

## Key Components

### Database Schema
The application defines several core entities:
- **Users**: Basic user authentication system
- **Contacts**: Lead capture and contact form submissions
- **SEO Analyses**: AI-powered website analysis results
- **AI Chats**: Conversational AI interaction history
- **Projects**: Portfolio showcase items with metrics and testimonials

### API Endpoints
- `POST /api/contacts` - Contact form submission
- `GET /api/contacts` - Retrieve contacts (admin)
- `POST /api/seo-analysis` - AI-powered SEO analysis
- `POST /api/ai-chat` - AI chat interactions
- `GET /api/projects/featured` - Featured portfolio projects

### UI Components
- **Landing Page Sections**: Hero, Services, AI Tools, Pricing, Portfolio, Contact
- **Interactive Elements**: AI chat widget, contact forms, theme switcher
- **Design System**: Consistent component library with gradient themes and animations

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Processing**: Express routes handle business logic and data validation
3. **AI Integration**: OpenAI service integration for SEO analysis and chat responses
4. **Data Persistence**: Drizzle ORM manages database operations
5. **Response Handling**: JSON responses with error handling and validation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **openai**: OpenAI API integration for AI features
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with HMR and TypeScript checking
- **Environment**: NODE_ENV=development with tsx for server execution
- **Hot Reload**: Vite middleware integration with Express server

### Production
- **Build Process**: 
  1. Frontend: Vite builds React app to `dist/public`
  2. Backend: esbuild bundles server code to `dist/index.js`
- **Serving**: Express serves static files and API routes
- **Environment**: NODE_ENV=production with optimized builds

### Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **AI Services**: Requires `OPENAI_API_KEY` for AI functionality
- **Session Management**: Uses connect-pg-simple for PostgreSQL session storage

## Changelog

Changelog:
- July 02, 2025. Initial setup
- July 02, 2025. Complete website redesign with AI-powered features
- July 02, 2025. Added comprehensive mega menu navigation matching serpwizard.com structure
- July 02, 2025. Integrated PostgreSQL database with Drizzle ORM

## User Preferences

Preferred communication style: Simple, everyday language.