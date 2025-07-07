import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Users, Target, Lightbulb, Award, TrendingUp, Globe, ArrowRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Clients Served", icon: Users },
  { number: "2M+", label: "Keywords Ranked", icon: Target },
  { number: "150%", label: "Avg Traffic Increase", icon: TrendingUp },
  { number: "99%", label: "Client Satisfaction", icon: Award }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "10+ years in digital marketing, former Google Ads specialist",
    specialties: ["Strategy", "Leadership", "Growth"]
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of SEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Technical SEO expert with 8+ years optimizing enterprise websites",
    specialties: ["Technical SEO", "Analytics", "Performance"]
  },
  {
    name: "Emily Johnson",
    role: "AI Content Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Content strategist specializing in AI-powered content creation",
    specialties: ["Content Strategy", "AI Tools", "Brand Voice"]
  },
  {
    name: "David Kim",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Full-stack developer building cutting-edge marketing tools",
    specialties: ["Development", "AI Integration", "Automation"]
  }
];

const values = [
  {
    title: "AI-First Approach",
    description: "We leverage cutting-edge artificial intelligence to deliver results that traditional methods simply can't match.",
    icon: Lightbulb
  },
  {
    title: "Data-Driven Decisions",
    description: "Every strategy is backed by comprehensive data analysis and continuous performance monitoring.",
    icon: TrendingUp
  },
  {
    title: "Transparent Communication",
    description: "We believe in clear, honest communication with detailed reporting and regular updates on your progress.",
    icon: Users
  },
  {
    title: "Global Perspective",
    description: "Our strategies are designed to work across markets and cultures, ensuring worldwide success.",
    icon: Globe
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About SERP Shine
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We're a team of digital marketing experts passionate about helping businesses grow through 
            AI-powered SEO, content marketing, and innovative digital strategies that deliver real results.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-6">
                Founded in 2020, SERP Shine was born from a simple observation: traditional digital marketing 
                agencies were still using outdated methods while the world was rapidly embracing artificial intelligence. 
                We saw an opportunity to revolutionize the industry by combining human expertise with AI capabilities.
              </p>
              <p className="mb-6">
                What started as a small team of SEO specialists and developers has grown into a full-service 
                digital marketing agency serving clients across the globe. Our unique approach combines data science, 
                artificial intelligence, and creative strategy to deliver results that consistently exceed expectations.
              </p>
              <p>
                Today, we're proud to be at the forefront of AI-powered marketing, helping businesses of all sizes 
                achieve unprecedented growth through innovative strategies and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The experts behind your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border-0 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl mb-8 opacity-90">
                To democratize access to world-class digital marketing by making AI-powered tools and strategies 
                available to businesses of all sizes, helping them compete and thrive in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                    Work With Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                    Our Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}