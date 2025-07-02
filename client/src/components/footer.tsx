import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone,
  MapPin,
  Sparkles
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "AI SEO Optimization",
    "Content Generation", 
    "Web Development",
    "Social Media Marketing",
    "PPC Management",
    "Mobile App Development"
  ];

  const company = [
    "About Us",
    "Case Studies", 
    "Blog",
    "Careers",
    "Contact",
    "Privacy Policy"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SERP Shine
              </span>
            </Link>
            
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Your AI-powered digital growth partner. We help businesses achieve exponential growth 
              through cutting-edge technology and data-driven strategies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:seo@serpshine.com" className="hover:text-white transition-colors">
                  seo@serpshine.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+919001049852" className="hover:text-white transition-colors">
                  +91 9001049852
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>India • Global Services</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("#services")}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("#about")}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated with AI Marketing Insights
              </h3>
              <p className="text-slate-400">
                Get weekly tips, industry news, and exclusive AI-powered strategies.
              </p>
            </div>
            
            <div className="flex space-x-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 lg:w-64 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} SERP Shine. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </button>
            <button className="text-slate-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </button>
            <button className="text-slate-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex items-center justify-center space-x-8 opacity-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Google</div>
              <div className="text-xs text-slate-400">Certified Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">ISO</div>
              <div className="text-xs text-slate-400">27001 Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-xs text-slate-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-slate-400">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
