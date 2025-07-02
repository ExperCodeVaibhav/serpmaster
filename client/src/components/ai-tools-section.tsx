import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, PenTool, Bot, Sparkles, ArrowRight, Check } from "lucide-react";

export function AIToolsSection() {
  const tools = [
    {
      icon: Brain,
      title: "AI SEO Analyzer",
      description: "Get intelligent insights and recommendations powered by machine learning algorithms that analyze millions of data points.",
      features: [
        "Real-time keyword analysis",
        "Competitor intelligence",
        "Content optimization"
      ],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: PenTool,
      title: "AI Content Engine",
      description: "Generate high-quality, SEO-optimized content that ranks higher and converts better using advanced AI models.",
      features: [
        "Blog post generation",
        "Meta descriptions",
        "Social media content"
      ],
      gradient: "from-emerald-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 to-cyan-500/10"
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "24/7 intelligent support that understands your business needs and provides expert SEO guidance instantly.",
      features: [
        "Instant SEO advice",
        "Strategy recommendations",
        "Performance insights"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="ai-tools" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 mb-4">
            🤖 AI-Powered Tools
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Next-Gen{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to supercharge your digital marketing efforts with our cutting-edge tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card 
                key={index}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/20 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tool.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white text-2xl" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{tool.title}</h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${tool.gradient} text-white hover:shadow-lg transition-all transform group-hover:scale-105`}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Try {tool.title.split(' ')[1]}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Experience AI in Action
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                See how our AI tools work together to create a comprehensive digital marketing strategy tailored to your business.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8 py-4"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Interactive Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
