import { useState } from "react";
import { Link } from "wouter";
import { Moon, Sun, Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "./theme-provider";

export function Navigation() {
  const { theme, toggleTheme } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const getRouteForItem = (itemName: string) => {
    const routeMap: Record<string, string> = {
      "AI SEO Optimization": "/seo-optimization",
      "Social Media Marketing": "/social-media-marketing",
      "AI Content Writing": "/ai-content-writing",
      "Google Maps SEO": "/google-maps-seo",
      "Pay Per Click Management": "/ppc-management",
      "Google Penalty Recovery": "/penalty-recovery",
      "PHP Development": "/web-development",
      "E-Commerce Development": "/web-development",
      "Node.js Development": "/web-development",
      "React.js Development": "/web-development",
      "Laravel Development": "/web-development",
      "WordPress Development": "/web-development",
      "AI Content Engine": "/ai-tools",
      "AI SEO Analysis": "/ai-tools",
      "AI Analytics": "/ai-tools",
      "AI Design Tools": "/ai-tools",
      "Predictive SEO": "/ai-tools",
      "AI Automation": "/ai-tools",
      "E-commerce": "/industries/ecommerce",
      "Healthcare": "/industries/healthcare",
      "Plumbers": "/industries/plumbers",
      "Finance": "/industries/finance",
      "Real Estate": "/industries/real-estate",
      "Legal Services": "/industries/legal",
      "Dental Practices": "/industries/dental",
      "Construction": "/industries/construction",
      "Accounting": "/industries/accounting",
      "Beauty & Salon": "/industries/beauty",
      "Automotive": "/industries/automotive",
      "Medical Specialists": "/industries/medical",
      "SEO Packages": "/pricing",
      "Social Media Packages": "/pricing",
      "PPC Management": "/pricing",
      "Google Maps Packages": "/pricing",
      "Content Writing": "/pricing",
      "Penalty Recovery": "/pricing",
      "Website Design": "/pricing",
      "Web Development": "/pricing",
      "Mobile App Development": "/pricing",
      "E-commerce Solutions": "/pricing",
      "UI/UX Design": "/pricing",
      "Performance Optimization": "/pricing",
      "Who We Are": "/about-us",
      "Meet The Team": "/about-us",
      "Our Approach": "/about-us",
      "Awards & Recognition": "/about-us",
      "Careers": "/careers",
      "Blog": "/blog",
      "Success Stories": "/case-studies",
      "Testimonials": "/testimonials",
      "Contact Us": "/contact-us",
      "FAQ": "/faq",
      "Support Center": "/support",
      "Knowledge Base": "/knowledge-base"
    };
    return routeMap[itemName] || "/services";
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const megaMenuData = {
    services: {
      title: "Services",
      sections: [
        {
          title: "Digital Marketing",
          items: [
            { icon: "🔍", name: "AI SEO Optimization", desc: "Advanced search engine optimization" },
            { icon: "📱", name: "Social Media Marketing", desc: "Comprehensive social strategy" },
            { icon: "✍️", name: "AI Content Writing", desc: "Intelligent content generation" },
            { icon: "🗺️", name: "Google Maps SEO", desc: "Local business optimization" },
            { icon: "💰", name: "Pay Per Click Management", desc: "ROI-focused PPC campaigns" },
            { icon: "🛡️", name: "Google Penalty Recovery", desc: "SEO penalty removal services" }
          ]
        },
        {
          title: "Web Development",
          items: [
            { icon: "💻", name: "PHP Development", desc: "Custom PHP applications" },
            { icon: "🛒", name: "E-Commerce Development", desc: "Online store solutions" },
            { icon: "⚡", name: "Node.js Development", desc: "High-performance applications" },
            { icon: "⚛️", name: "React.js Development", desc: "Modern frontend solutions" },
            { icon: "🎯", name: "Laravel Development", desc: "Robust web applications" },
            { icon: "🔧", name: "WordPress Development", desc: "Custom WordPress solutions" }
          ]
        },
        {
          title: "AI & Advanced Tech",
          items: [
            { icon: "🤖", name: "AI Content Engine", desc: "Automated content creation" },
            { icon: "🧠", name: "AI SEO Analysis", desc: "Intelligent website audits" },
            { icon: "📊", name: "AI Analytics", desc: "Smart data insights" },
            { icon: "🎨", name: "AI Design Tools", desc: "Automated design solutions" },
            { icon: "🔮", name: "Predictive SEO", desc: "Future-focused optimization" },
            { icon: "⚡", name: "AI Automation", desc: "Intelligent workflow automation" }
          ]
        }
      ]
    },
    industries: {
      title: "Industries",
      sections: [
        {
          title: "Business Sectors",
          items: [
            { icon: "🛒", name: "E-commerce", desc: "Online retail optimization" },
            { icon: "🏥", name: "Healthcare", desc: "Medical practice marketing" },
            { icon: "🔧", name: "Plumbers", desc: "Local service optimization" },
            { icon: "💼", name: "Finance", desc: "Financial services marketing" },
            { icon: "🏠", name: "Real Estate", desc: "Property marketing solutions" },
            { icon: "⚖️", name: "Legal Services", desc: "Law firm SEO and marketing" }
          ]
        },
        {
          title: "Professional Services",
          items: [
            { icon: "🦷", name: "Dental Practices", desc: "Dentist marketing solutions" },
            { icon: "🏗️", name: "Construction", desc: "Contractor lead generation" },
            { icon: "📊", name: "Accounting", desc: "CPA firm marketing" },
            { icon: "✂️", name: "Beauty & Salon", desc: "Salon marketing strategies" },
            { icon: "🚗", name: "Automotive", desc: "Auto dealer marketing" },
            { icon: "💉", name: "Medical Specialists", desc: "Specialist practice growth" }
          ]
        }
      ]
    },
    pricing: {
      title: "Pricing",
      sections: [
        {
          title: "Digital Marketing Packages",
          items: [
            { icon: "📈", name: "SEO Packages", desc: "Starting at $599/month" },
            { icon: "📱", name: "Social Media Packages", desc: "Complete social strategy" },
            { icon: "💰", name: "PPC Management", desc: "Managed advertising campaigns" },
            { icon: "🗺️", name: "Google Maps Packages", desc: "Local SEO solutions" },
            { icon: "✍️", name: "Content Writing", desc: "AI-powered content creation" },
            { icon: "🛡️", name: "Penalty Recovery", desc: "SEO recovery services" }
          ]
        },
        {
          title: "Development & Design",
          items: [
            { icon: "🌐", name: "Website Design", desc: "Custom web design packages" },
            { icon: "💻", name: "Web Development", desc: "Full-stack development" },
            { icon: "📱", name: "Mobile App Development", desc: "iOS & Android apps" },
            { icon: "🛒", name: "E-commerce Solutions", desc: "Online store development" },
            { icon: "🎨", name: "UI/UX Design", desc: "User experience design" },
            { icon: "⚡", name: "Performance Optimization", desc: "Speed & conversion optimization" }
          ]
        }
      ]
    },
    company: {
      title: "Company",
      sections: [
        {
          title: "About Us",
          items: [
            { icon: "🏢", name: "Who We Are", desc: "Our story and mission" },
            { icon: "👥", name: "Meet The Team", desc: "Expert professionals" },
            { icon: "🎯", name: "Our Approach", desc: "AI-powered methodology" },
            { icon: "🏆", name: "Awards & Recognition", desc: "Industry achievements" },
            { icon: "💼", name: "Careers", desc: "Join our growing team" },
            { icon: "📝", name: "Blog", desc: "Latest insights and trends" }
          ]
        },
        {
          title: "Results & Support",
          items: [
            { icon: "📊", name: "Success Stories", desc: "Client case studies" },
            { icon: "⭐", name: "Testimonials", desc: "What clients say" },
            { icon: "📞", name: "Contact Us", desc: "Get in touch" },
            { icon: "❓", name: "FAQ", desc: "Common questions" },
            { icon: "🛠️", name: "Support Center", desc: "Help and resources" },
            { icon: "📚", name: "Knowledge Base", desc: "Learn about digital marketing" }
          ]
        }
      ]
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SERP Shine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection("#home")}
              className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Home
            </button>

            {/* Services Mega Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-[800px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-6 mt-2">
                  <div className="grid grid-cols-3 gap-6">
                    {megaMenuData.services.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={getRouteForItem(item.name)}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left w-full group"
                            >
                              <span className="text-lg">{item.icon}</span>
                              <div>
                                <div className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 text-sm">
                                  {item.name}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Mega Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 w-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-6 mt-2">
                  <div className="grid grid-cols-2 gap-6">
                    {megaMenuData.industries.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              onClick={() => scrollToSection("#portfolio")}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left w-full group"
                            >
                              <span className="text-lg">{item.icon}</span>
                              <div>
                                <div className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 text-sm">
                                  {item.name}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing Mega Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('pricing')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1">
                <span>Pricing</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'pricing' && (
                <div className="absolute top-full left-0 w-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-6 mt-2">
                  <div className="grid grid-cols-2 gap-6">
                    {megaMenuData.pricing.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              onClick={() => scrollToSection("#pricing")}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left w-full group"
                            >
                              <span className="text-lg">{item.icon}</span>
                              <div>
                                <div className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 text-sm">
                                  {item.name}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Mega Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 w-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-6 mt-2">
                  <div className="grid grid-cols-2 gap-6">
                    {megaMenuData.company.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              onClick={() => scrollToSection("#about")}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left w-full group"
                            >
                              <span className="text-lg">{item.icon}</span>
                              <div>
                                <div className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 text-sm">
                                  {item.name}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("#portfolio")}
              className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("#about")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Free Analysis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/20 dark:border-slate-700/20">
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("#home")}
                className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Home
              </button>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-services')}
                  className="flex items-center justify-between w-full px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="pl-8 pt-2 space-y-2">
                    {megaMenuData.services.sections.map((section) => 
                      section.items.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection("#services")}
                          className="block w-full text-left px-4 py-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.icon} {item.name}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Industries Dropdown */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('mobile-industries')}
                  className="flex items-center justify-between w-full px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-industries' && (
                  <div className="pl-8 pt-2 space-y-2">
                    {megaMenuData.industries.sections.map((section) => 
                      section.items.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection("#portfolio")}
                          className="block w-full text-left px-4 py-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.icon} {item.name}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("#pricing")}
                className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Pricing
              </button>

              <button
                onClick={() => scrollToSection("#portfolio")}
                className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Portfolio
              </button>

              <button
                onClick={() => scrollToSection("#about")}
                className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Company
              </button>

              <div className="px-4 pt-4">
                <Button
                  onClick={() => scrollToSection("#about")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 w-full justify-center"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Free Analysis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}