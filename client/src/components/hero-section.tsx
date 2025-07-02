import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Play, TrendingUp, Activity, Zap } from "lucide-react";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Partner", "Solution", "Strategy"];

  useEffect(() => {
    const currentText = texts[textIndex];
    if (typedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, textIndex, texts]);

  const scrollToContact = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400">
              🚀 AI-Powered Growth Engine
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              Digital Growth
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {typedText || "Partner"}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Transform your business with cutting-edge AI technology. Get intelligent SEO insights, 
              automated content generation, and data-driven growth strategies that outperform traditional methods.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Free AI Analysis
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-between pt-8 max-w-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">500+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">AI-Optimized Sites</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">300%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Avg. Traffic Boost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">AI Monitoring</div>
            </div>
          </div>
        </div>

        {/* AI Dashboard Mock */}
        <div className="relative">
          <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg">AI SEO Dashboard</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 p-4 rounded-xl border border-emerald-500/20">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <div className="text-2xl font-bold text-emerald-600">↗ 245%</div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Organic Growth</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <div className="text-2xl font-bold text-blue-600">89</div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">AI Score</div>
                  </div>
                </div>

                {/* AI Suggestions */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-slate-900 dark:text-white">AI Recommendations</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Optimize meta descriptions for +12% CTR</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Target 3 new long-tail keywords</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>Improve page speed by 0.8s</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Activity */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Zap className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span className="text-slate-600 dark:text-slate-400">AI analyzing competitor keywords...</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
