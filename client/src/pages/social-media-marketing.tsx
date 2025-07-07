import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Users, TrendingUp, MessageCircle, Heart, Eye, CheckCircle } from "lucide-react";

export default function SocialMediaMarketingPage() {
  const platforms = [
    {
      icon: "📘",
      name: "Facebook Marketing",
      description: "Build brand awareness and engage with your audience through targeted Facebook campaigns.",
      features: ["Page management", "Ad campaigns", "Community building", "Analytics tracking"]
    },
    {
      icon: "📸",
      name: "Instagram Marketing",
      description: "Showcase your brand visually and connect with younger demographics through Instagram.",
      features: ["Content creation", "Story marketing", "Influencer partnerships", "Shopping integration"]
    },
    {
      icon: "🐦",
      name: "Twitter Marketing",
      description: "Join conversations, share updates, and build thought leadership on Twitter.",
      features: ["Tweet scheduling", "Hashtag strategy", "Community management", "Real-time engagement"]
    },
    {
      icon: "💼",
      name: "LinkedIn Marketing",
      description: "Target professionals and decision-makers with B2B-focused LinkedIn campaigns.",
      features: ["Company page optimization", "Lead generation", "Professional networking", "Industry insights"]
    },
    {
      icon: "🎵",
      name: "TikTok Marketing",
      description: "Reach Gen Z and millennials with creative, engaging TikTok content and campaigns.",
      features: ["Viral content creation", "Hashtag challenges", "Influencer collaborations", "Trend analysis"]
    },
    {
      icon: "📺",
      name: "YouTube Marketing",
      description: "Build a video presence and drive engagement through YouTube content and advertising.",
      features: ["Channel optimization", "Video SEO", "Ad campaigns", "Community building"]
    }
  ];

  const stats = [
    { number: "4.8B", label: "Social Media Users Worldwide" },
    { number: "147", label: "Minutes Daily Average Usage" },
    { number: "73%", label: "Businesses Using Social Media" },
    { number: "54%", label: "Use Social for Product Research" }
  ];

  const services = [
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Content Strategy & Creation",
      description: "Develop engaging content that resonates with your audience and drives action."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Management",
      description: "Build and nurture online communities around your brand with active engagement."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Social Media Advertising",
      description: "Run targeted ad campaigns across all major platforms to maximize reach and ROI."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Influencer Marketing",
      description: "Partner with relevant influencers to amplify your brand message and reach new audiences."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Build your brand presence, engage with customers, and drive conversions across all major social media platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
                Get Social Media Audit
              </Button>
              <Button variant="outline" size="lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Complete Social Media Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Everything you need to succeed on social media
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Multi-Platform Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We'll help you dominate every social media platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{platform.icon}</span>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{platform.description}</CardDescription>
                  <div className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Social Media Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a social media strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}