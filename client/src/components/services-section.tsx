import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Share2, 
  Code, 
  PenTool, 
  Megaphone, 
  Smartphone,
  Check
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "AI-driven SEO strategies that adapt to algorithm changes and boost your rankings.",
      features: ["Technical SEO Audit", "Keyword Research", "Link Building"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Engage your audience with AI-crafted content and data-driven social strategies.",
      features: ["Content Strategy", "Community Management", "Paid Advertising"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, fast, and secure websites built with the latest technologies.",
      features: ["React & Node.js", "PHP & Laravel", "E-commerce Solutions"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: PenTool,
      title: "AI Content Writing",
      description: "Human-quality content enhanced by AI for better engagement and conversions.",
      features: ["Blog Writing", "Copywriting", "Technical Writing"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Megaphone,
      title: "PPC Management",
      description: "AI-optimized paid campaigns that maximize ROI and minimize waste.",
      features: ["Google Ads", "Facebook Ads", "Performance Tracking"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with AI-powered features.",
      features: ["React Native", "Flutter", "Native iOS/Android"],
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 mb-4">
            🚀 Complete Solutions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Full-Stack{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From AI-powered SEO to cutting-edge development, we provide everything you need to dominate your market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/20 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                        <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 backdrop-blur-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Our team of experts can create tailored solutions that perfectly fit your unique business requirements and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  Discuss Your Project
                </button>
                <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  View All Services
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
