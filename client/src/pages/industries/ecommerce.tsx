import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, TrendingUp, Users, DollarSign, Search, Star, CheckCircle } from "lucide-react";

export default function EcommercePage() {
  const challenges = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Low Search Visibility",
      description: "Potential customers can't find your products when searching online."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Poor Conversion Rates",
      description: "Visitors browse but don't complete purchases, resulting in lost revenue."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Limited Customer Reach",
      description: "Struggling to expand beyond your current customer base."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "High Marketing Costs",
      description: "Expensive advertising with poor return on investment."
    }
  ];

  const solutions = [
    {
      title: "E-commerce SEO",
      description: "Optimize product pages, category pages, and improve search rankings for better visibility.",
      features: [
        "Product page optimization",
        "Category page SEO",
        "Technical SEO audits",
        "Schema markup implementation",
        "Site speed optimization"
      ]
    },
    {
      title: "Conversion Rate Optimization",
      description: "Improve user experience and increase the percentage of visitors who make purchases.",
      features: [
        "A/B testing",
        "Checkout optimization",
        "Mobile optimization",
        "Trust signal implementation",
        "User experience improvements"
      ]
    },
    {
      title: "E-commerce PPC",
      description: "Drive targeted traffic with Google Ads, Shopping campaigns, and social media advertising.",
      features: [
        "Google Shopping campaigns",
        "Search ads for high-intent keywords",
        "Facebook & Instagram ads",
        "Retargeting campaigns",
        "Performance tracking"
      ]
    },
    {
      title: "Content Marketing",
      description: "Create valuable content that attracts customers and builds brand authority.",
      features: [
        "Product descriptions",
        "Blog content strategy",
        "Buying guides",
        "Customer testimonials",
        "Social media content"
      ]
    }
  ];

  const results = [
    { metric: "253%", label: "Average Traffic Increase" },
    { metric: "89%", label: "Conversion Rate Improvement" },
    { metric: "340%", label: "Revenue Growth" },
    { metric: "62%", label: "Reduction in CAC" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Forward",
      text: "SERP Shine transformed our online store. Our organic traffic increased by 300% and sales doubled within 6 months.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Tech Gadgets Pro",
      text: "The team's expertise in e-commerce SEO is unmatched. They helped us dominate competitive keywords and increase our market share.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              E-commerce <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Drive more sales and grow your online store with proven e-commerce marketing strategies that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                Get E-commerce Audit
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Common E-commerce Challenges
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We understand the unique challenges facing online retailers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our E-commerce Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive strategies to grow your online business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Results That Matter
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Real results from real e-commerce businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
                <div className="text-4xl font-bold mb-2">{result.metric}</div>
                <div className="text-orange-100">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-slate-600 dark:text-slate-300">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale Your E-commerce Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a marketing strategy that drives real revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free E-commerce Audit
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}