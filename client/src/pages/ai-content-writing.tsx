import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pen, Zap, Target, BarChart3, CheckCircle } from "lucide-react";

export default function AIContentWritingPage() {
  const features = [
    {
      icon: <Pen className="w-6 h-6" />,
      title: "AI-Powered Writing",
      description: "Generate high-quality content using advanced AI models trained on millions of articles."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Content automatically optimized for search engines with keyword integration."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Get content delivered within 24-48 hours with unlimited revisions."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Monitor content performance with detailed analytics and insights."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <section className="pt-20 pb-12 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              AI Content <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Writing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Create engaging, SEO-optimized content that drives traffic and converts visitors into customers.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
              Start Writing Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}