import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Trophy, Heart, CheckCircle } from "lucide-react";

export default function AboutUsPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "👨‍💼",
      description: "15+ years of digital marketing experience. Former Google and Meta executive."
    },
    {
      name: "Sarah Williams",
      role: "Head of SEO",
      image: "👩‍💻",
      description: "SEO expert with proven track record of ranking websites #1 on Google."
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "👨‍💻",
      description: "Full-stack developer specializing in React, Node.js, and modern web technologies."
    },
    {
      name: "Emma Davis",
      role: "Social Media Director",
      image: "👩‍🎨",
      description: "Creative strategist with expertise in viral social media campaigns."
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business growth."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our success. We treat your business as our own."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from strategy to execution."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Transparency",
      description: "Open communication and honest reporting are at the core of our service."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "250%", label: "Average ROI Increase" },
    { number: "8+", label: "Years Experience" }
  ];

  const achievements = [
    "Google Premier Partner",
    "Facebook Marketing Partner",
    "Top 1% SEO Agency",
    "Inc. 5000 Fastest Growing Companies",
    "Best Digital Marketing Agency 2024",
    "Client Choice Award Winner"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SERP Shine</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              We're a team of digital marketing experts passionate about helping businesses grow through AI-powered marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                To revolutionize digital marketing by combining cutting-edge AI technology with human creativity and strategic thinking. We believe every business deserves to succeed online, regardless of size or industry.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Since 2016, we've helped over 500 businesses achieve remarkable growth through data-driven marketing strategies, innovative SEO techniques, and compelling content that converts.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Join Our Success Stories
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              The experts behind your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.image}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Industry recognition for our exceptional work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white dark:bg-slate-900 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help your business achieve its digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Get Free Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}