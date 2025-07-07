import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Search, PenTool, TrendingUp, Globe, BarChart3, Users } from "lucide-react";

const serviceCategories = [
  {
    title: "SEO Services",
    description: "Comprehensive search engine optimization to boost your visibility",
    icon: Search,
    services: [
      {
        name: "Technical SEO Audit",
        description: "Comprehensive website analysis and optimization recommendations",
        price: "Starting at $499",
        features: ["Site speed optimization", "Mobile responsiveness", "Schema markup", "Core Web Vitals"]
      },
      {
        name: "Keyword Research & Strategy",
        description: "Data-driven keyword analysis for maximum organic reach",
        price: "Starting at $299",
        features: ["Competitor analysis", "Long-tail keywords", "Search intent mapping", "Content gaps analysis"]
      },
      {
        name: "On-Page SEO Optimization",
        description: "Optimize your content and structure for search engines",
        price: "Starting at $399",
        features: ["Meta tag optimization", "Content optimization", "Internal linking", "Image SEO"]
      }
    ]
  },
  {
    title: "Content Marketing",
    description: "Engaging content that drives traffic and conversions",
    icon: PenTool,
    services: [
      {
        name: "AI-Powered Content Creation",
        description: "High-quality blog posts and articles created with AI assistance",
        price: "Starting at $199/post",
        features: ["SEO-optimized writing", "Research-backed content", "Brand voice matching", "Multi-format delivery"]
      },
      {
        name: "Content Strategy & Planning",
        description: "Strategic content roadmap aligned with your business goals",
        price: "Starting at $799",
        features: ["Content calendar", "Topic research", "Competitor analysis", "Performance tracking"]
      },
      {
        name: "Social Media Content",
        description: "Engaging social media posts and campaigns",
        price: "Starting at $99/post",
        features: ["Platform optimization", "Visual content", "Hashtag strategy", "Engagement optimization"]
      }
    ]
  },
  {
    title: "Digital Marketing",
    description: "Complete digital marketing solutions for growth",
    icon: TrendingUp,
    services: [
      {
        name: "PPC Campaign Management",
        description: "Expert Google Ads and social media advertising management",
        price: "Starting at $499/month",
        features: ["Campaign setup", "Bid optimization", "Ad copy testing", "Performance reporting"]
      },
      {
        name: "Social Media Marketing",
        description: "Complete social media presence management",
        price: "Starting at $399/month",
        features: ["Content creation", "Community management", "Paid social ads", "Analytics reporting"]
      },
      {
        name: "Email Marketing",
        description: "Automated email campaigns that convert",
        price: "Starting at $299/month",
        features: ["List building", "Automation setup", "A/B testing", "Performance tracking"]
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions powered by AI and driven by results. 
            From SEO to content marketing, we've got everything you need to dominate your market.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Globe className="w-4 h-4 mr-2" />
              Global Reach
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Data-Driven
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users className="w-4 h-4 mr-2" />
              Expert Team
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                          {service.name}
                        </CardTitle>
                        <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                          {service.price}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have achieved remarkable growth with our AI-powered digital marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}