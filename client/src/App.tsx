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
import EcommercePage from "@/pages/industries/ecommerce";
import AboutUsPage from "@/pages/about-us";
import ContactUsPage from "@/pages/contact-us";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/tools" component={ToolsPage} />
      <Route path="/seo-optimization" component={SEOOptimizationPage} />
      <Route path="/social-media-marketing" component={SocialMediaMarketingPage} />
      <Route path="/web-development" component={WebDevelopmentPage} />
      <Route path="/industries/ecommerce" component={EcommercePage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
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
