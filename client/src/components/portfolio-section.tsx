import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, DollarSign, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("featured");

  const { data: projectsData, isLoading } = useQuery({
    queryKey: ["/api/projects/featured"],
  });

  const projects = projectsData?.projects || [];

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      content: "The AI insights were game-changing. We saw immediate improvements in our rankings and a significant boost in qualified leads.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150",
      content: "SERP Shine's AI tools helped us identify content gaps and opportunities we never knew existed. Highly recommended!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Founder, GrowthCo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      content: "The ROI from their AI-powered campaigns has been phenomenal. Best investment we've made in digital marketing.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
      />
    ));
  };

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 mb-4">
            📈 Proven Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            AI-Driven{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            See how our AI-powered strategies have transformed businesses across industries.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project: Project) => (
            <Card key={project.id} className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={project.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=80&h=80"} 
                    alt={project.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{project.category}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics as Record<string, number>).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-emerald-500">+{value}%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                  "{project.testimonial}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold text-slate-900 dark:text-white">{project.clientName}</div>
                    <div className="text-slate-600 dark:text-slate-400">{project.clientRole}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 dark:text-slate-400">{project.duration}</div>
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                      View Case Study <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Award-Winning SEO Agency
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Recognized by industry experts and trusted by businesses worldwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Clutch Top SEO</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">GoodFirms Leader</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Google Partner</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Best ROI Agency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
