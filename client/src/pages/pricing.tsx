import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Zap, Star, Crown, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for small businesses getting started with digital marketing",
    icon: Zap,
    badge: "Most Popular",
    features: [
      "Basic SEO audit",
      "5 AI-generated blog posts",
      "Social media strategy",
      "Monthly performance report",
      "Email support",
      "Basic keyword research",
      "On-page optimization guide"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: 699,
    description: "Comprehensive solution for growing businesses",
    icon: Star,
    badge: "Best Value",
    features: [
      "Advanced SEO audit & implementation",
      "15 AI-generated blog posts",
      "Complete social media management",
      "Bi-weekly performance reports",
      "Priority email & chat support",
      "Advanced keyword research",
      "Competitor analysis",
      "Link building strategy",
      "PPC campaign setup",
      "Content calendar",
      "Basic analytics dashboard"
    ],
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    price: 1499,
    description: "Full-scale digital marketing for large organizations",
    icon: Crown,
    badge: "Premium",
    features: [
      "Complete SEO transformation",
      "Unlimited AI-generated content",
      "Multi-platform social media",
      "Weekly performance reports",
      "Dedicated account manager",
      "Advanced competitor analysis",
      "Enterprise link building",
      "Full PPC management",
      "Custom content strategy",
      "Advanced analytics dashboard",
      "A/B testing & optimization",
      "Priority phone support",
      "Custom integrations",
      "Team training sessions"
    ],
    cta: "Contact Sales"
  }
];

const additionalServices = [
  {
    name: "Website Audit",
    price: "199",
    description: "Comprehensive technical and SEO analysis of your website"
  },
  {
    name: "Content Strategy",
    price: "399",
    description: "3-month content roadmap with keyword research and topics"
  },
  {
    name: "PPC Setup",
    price: "299",
    description: "Google Ads campaign setup with initial optimization"
  },
  {
    name: "Brand Analysis",
    price: "499",
    description: "Complete brand audit with competitor analysis and recommendations"
  }
];

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "Our 14-day free trial includes access to basic SEO audit tools, 2 AI-generated blog posts, and email support. No credit card required."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
  },
  {
    question: "Do you offer custom pricing for large enterprises?",
    answer: "Absolutely! We offer custom pricing and packages for enterprises with specific needs. Contact our sales team for a personalized quote."
  },
  {
    question: "What kind of results can I expect?",
    answer: "While results vary by industry and competition, our clients typically see 200-400% increase in organic traffic within 6 months, along with improved rankings and conversions."
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "All plans are month-to-month with no long-term contracts. You can cancel at any time, and we'll continue to provide service until the end of your current billing period."
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our AI-powered tools, 
            expert support, and a 14-day money-back guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              14-Day Free Trial
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              No Setup Fees
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Cancel Anytime
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full font-semibold ${
                    index === 1 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  }`}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Boost your plan with these one-time services and specialized offerings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    {service.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    ${service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing and services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust SERP Shine to drive their digital growth. 
            Start your free trial today, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
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