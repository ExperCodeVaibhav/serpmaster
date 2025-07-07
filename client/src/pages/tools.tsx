import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { useState } from "react";
import { Search, Bot, BarChart3, Globe, Lightbulb, Zap, ArrowRight, Sparkles } from "lucide-react";

const tools = [
  {
    title: "AI SEO Analyzer",
    description: "Comprehensive website analysis powered by artificial intelligence",
    icon: Search,
    category: "SEO",
    features: ["Technical SEO audit", "Keyword analysis", "Content optimization", "Performance metrics"],
    badge: "Most Popular",
    action: "Analyze Website"
  },
  {
    title: "AI Content Generator",
    description: "Create high-quality, SEO-optimized content in seconds",
    icon: Bot,
    category: "Content",
    features: ["Blog posts", "Meta descriptions", "Social media content", "Email templates"],
    badge: "New",
    action: "Generate Content"
  },
  {
    title: "Keyword Research Tool",
    description: "Discover profitable keywords with AI-powered insights",
    icon: BarChart3,
    category: "Research",
    features: ["Search volume data", "Competition analysis", "Long-tail suggestions", "Trending keywords"],
    badge: "Pro",
    action: "Research Keywords"
  },
  {
    title: "Competitor Analysis",
    description: "Analyze your competitors' strategies and find opportunities",
    icon: Globe,
    category: "Analysis",
    features: ["Backlink analysis", "Content gaps", "Keyword overlap", "Traffic insights"],
    badge: "Premium",
    action: "Analyze Competitors"
  },
  {
    title: "Content Ideas Generator",
    description: "Never run out of content ideas with AI-powered suggestions",
    icon: Lightbulb,
    category: "Content",
    features: ["Topic suggestions", "Content clusters", "Trend analysis", "Question mining"],
    badge: "Free",
    action: "Generate Ideas"
  },
  {
    title: "Performance Optimizer",
    description: "Optimize your website's speed and performance automatically",
    icon: Zap,
    category: "Performance",
    features: ["Speed optimization", "Core Web Vitals", "Mobile optimization", "Image compression"],
    badge: "Advanced",
    action: "Optimize Site"
  }
];

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState(tools[0]);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [contentPrompt, setContentPrompt] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            AI-Powered Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Access our suite of cutting-edge AI tools designed to supercharge your digital marketing efforts. 
            Analyze, optimize, and dominate your market with the power of artificial intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Instant Results
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Data-Driven
            </Badge>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tools.map((tool, index) => (
              <Card key={index} className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedTool(tool)}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {tool.category}
                        </Badge>
                        {tool.badge && (
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 text-xs">
                            {tool.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                    {tool.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tool Demo */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Try Our Tools Now
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get instant results with our AI-powered tools. No signup required for basic features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO Analyzer Demo */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      SEO Analyzer
                    </CardTitle>
                    <CardDescription>
                      Analyze any website instantly
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter website URL (e.g., https://example.com)"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    Analyze Website
                    <Search className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Content Generator Demo */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      Content Generator
                    </CardTitle>
                    <CardDescription>
                      Generate content with AI
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Describe what content you want to generate..."
                    value={contentPrompt}
                    onChange={(e) => setContentPrompt(e.target.value)}
                    className="bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600 min-h-[100px]"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                    Generate Content
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Unlock the Full Power of AI
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Upgrade to our premium plans and access advanced AI tools, unlimited analyses, and priority support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                View Plans
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}