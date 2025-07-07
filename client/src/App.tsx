import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import PricingPage from "@/pages/pricing";
import ToolsPage from "@/pages/tools";
import SEOOptimizationPage from "@/pages/seo-optimization";
import SocialMediaMarketingPage from "@/pages/social-media-marketing";
import WebDevelopmentPage from "@/pages/web-development";
import AIContentWritingPage from "@/pages/ai-content-writing";
import GoogleMapsSEOPage from "@/pages/google-maps-seo";
import PPCManagementPage from "@/pages/ppc-management";
import PenaltyRecoveryPage from "@/pages/penalty-recovery";
import EcommercePage from "@/pages/industries/ecommerce";
import HealthcarePage from "@/pages/industries/healthcare";
import PlumbersPage from "@/pages/industries/plumbers";
import FinancePage from "@/pages/industries/finance";
import RealEstatePage from "@/pages/industries/real-estate";
import LegalPage from "@/pages/industries/legal";
import AboutUsPage from "@/pages/about-us";
import ContactUsPage from "@/pages/contact-us";
import CareersPage from "@/pages/careers";
import BlogPage from "@/pages/blog";
import CaseStudiesPage from "@/pages/case-studies";
import TestimonialsPage from "@/pages/testimonials";
import FAQPage from "@/pages/faq";
import SupportPage from "@/pages/support";
import KnowledgeBasePage from "@/pages/knowledge-base";
import BlogDetailPage from "@/pages/blog-detail";
import AdminPage from "@/pages/admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/tools" component={ToolsPage} />
      
      {/* Service Pages */}
      <Route path="/seo-optimization" component={SEOOptimizationPage} />
      <Route path="/social-media-marketing" component={SocialMediaMarketingPage} />
      <Route path="/web-development" component={WebDevelopmentPage} />
      <Route path="/ai-content-writing" component={AIContentWritingPage} />
      <Route path="/google-maps-seo" component={GoogleMapsSEOPage} />
      <Route path="/ppc-management" component={PPCManagementPage} />
      <Route path="/penalty-recovery" component={PenaltyRecoveryPage} />
      
      {/* Industry Pages */}
      <Route path="/industries/ecommerce" component={EcommercePage} />
      <Route path="/industries/healthcare" component={HealthcarePage} />
      <Route path="/industries/plumbers" component={PlumbersPage} />
      <Route path="/industries/finance" component={FinancePage} />
      <Route path="/industries/real-estate" component={RealEstatePage} />
      <Route path="/industries/legal" component={LegalPage} />
      
      {/* Company Pages */}
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/support" component={SupportPage} />
      <Route path="/knowledge-base" component={KnowledgeBasePage} />
      
      {/* Blog */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogDetailPage} />
      
      {/* Admin */}
      <Route path="/admin" component={AdminPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
