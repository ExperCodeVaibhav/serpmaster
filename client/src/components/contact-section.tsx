import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Brain, 
  Mail, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Activity,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { AIChat } from "./ai-chat-widget";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    projectType: "",
    message: ""
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        website: "",
        projectType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const analysisMutation = useMutation({
    mutationFn: async (website: string) => {
      return await apiRequest("POST", "/api/seo-analysis", { website });
    },
    onSuccess: (response) => {
      const data = response.json();
      setAnalysisResult(data.analysis);
      toast({
        title: "Analysis Complete!",
        description: "Your AI-powered SEO analysis is ready.",
      });
    },
    onError: (error) => {
      toast({
        title: "Analysis Failed",
        description: error.message || "Unable to analyze website. Please check the URL and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleAnalysis = async () => {
    if (!formData.website) {
      toast({
        title: "Website Required",
        description: "Please enter your website URL to get AI analysis.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    try {
      await analysisMutation.mutateAsync(formData.website);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "seo@serpshine.com",
      gradient: "from-blue-500 to-cyan-500",
      href: "mailto:seo@serpshine.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9001049852",
      gradient: "from-emerald-500 to-teal-500",
      href: "tel:+919001049852"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 9001049852",
      gradient: "from-green-500 to-emerald-500",
      href: "https://wa.me/+919001049852"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 mb-4">
            🚀 Ready to Grow?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Empire
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Get a free AI-powered analysis of your digital presence and discover untapped growth opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get Your Free AI Analysis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="John Doe"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="john@company.com"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="website">Website URL</Label>
                  <div className="flex mt-2 space-x-2">
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      placeholder="https://yourwebsite.com"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      onClick={handleAnalysis}
                      disabled={isAnalyzing || !formData.website}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                    >
                      {isAnalyzing ? (
                        <Activity className="w-4 h-4 animate-spin" />
                      ) : (
                        <Brain className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                      <SelectItem value="development">Web Development</SelectItem>
                      <SelectItem value="content">AI Content Strategy</SelectItem>
                      <SelectItem value="complete">Complete Digital Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about your goals</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe your business goals and challenges..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                {/* Analysis Results */}
                {analysisResult && (
                  <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-green-800 dark:text-green-300">
                          AI Analysis Complete
                        </h4>
                      </div>
                      <p className="text-green-700 dark:text-green-400 text-sm">
                        Your website has been analyzed! Submit the form to receive the detailed report.
                      </p>
                    </CardContent>
                  </Card>
                )}
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 py-4 text-lg font-semibold"
                >
                  {contactMutation.isPending ? (
                    <Activity className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Brain className="w-5 h-5 mr-2" />
                  )}
                  {contactMutation.isPending ? "Sending..." : "Get AI Analysis Now"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & AI Chat */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${method.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">{method.title}</div>
                          <div className="text-slate-600 dark:text-slate-400">{method.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <AIChat />
          </div>
        </div>
      </div>
    </section>
  );
}
