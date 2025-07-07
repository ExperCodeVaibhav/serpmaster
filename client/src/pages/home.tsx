import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AIToolsSection } from "@/components/ai-tools-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";
import { FloatingChatWidget } from "@/components/ai-chat-widget";
import { Card, CardContent } from "@/components/ui/card";

// Trusted By Section Component
function TrustedBySection() {
  const trustedLogos = [
    {
      name: "Modern digital marketing team",
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80",
      alt: "Clutch"
    },
    {
      name: "Professional business meeting",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80",
      alt: "Google Partner"
    },
    {
      name: "AI technology illustration",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80",
      alt: "Shopify"
    },
    {
      name: "Web development workspace",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80",
      alt: "WordPress"
    }
  ];

  return (
    <section className="py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-slate-600 dark:text-slate-400 font-medium">Trusted by Industry Leaders</p>
        </div>
        <div className="flex items-center justify-center space-x-12 opacity-60 hover:opacity-100 transition-opacity">
          {trustedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-all duration-300">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <AIToolsSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <FloatingChatWidget />
    </div>
  );
}
