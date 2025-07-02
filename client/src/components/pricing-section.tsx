import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star, Zap, Crown } from "lucide-react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      monthlyPrice: 599,
      annualPrice: 5390, // 10% discount
      icon: Zap,
      gradient: "from-slate-500 to-slate-600",
      features: [
        "Up to 10 target keywords",
        "AI-powered SEO audit",
        "Monthly reporting",
        "Email support",
        "Basic competitor analysis"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "For growing businesses",
      monthlyPrice: 1299,
      annualPrice: 11691, // 10% discount
      icon: Star,
      gradient: "from-blue-500 to-purple-600",
      features: [
        "Up to 50 target keywords",
        "AI content generation",
        "Bi-weekly reporting",
        "Priority phone support",
        "Social media management",
        "Advanced analytics",
        "Competitor intelligence"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: null,
      annualPrice: null,
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Unlimited keywords",
        "Custom AI models",
        "Real-time reporting",
        "Dedicated account manager",
        "White-label solutions",
        "API access",
        "Custom integrations"
      ],
      popular: false,
      custom: true
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 mb-4">
            💰 Smart Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Transparent, flexible pricing that scales with your business needs. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-blue-500"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Annual
            </span>
            <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
              Save 10%
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <Card 
                key={index}
                className={`relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-white/20 dark:border-slate-700/20 hover:border-blue-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-2`}>
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="mb-2">
                      {plan.custom ? (
                        <div className="text-4xl font-bold text-slate-900 dark:text-white">
                          Custom
                        </div>
                      ) : (
                        <div className="text-4xl font-bold text-slate-900 dark:text-white">
                          ${price?.toLocaleString()}
                          <span className="text-lg text-slate-600 dark:text-slate-400">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {isAnnual && !plan.custom && (
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Save ${((plan.monthlyPrice! * 12) - plan.annualPrice!).toLocaleString()} annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-3 font-semibold transition-all ${
                      plan.popular 
                        ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg transform hover:scale-105` 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                    onClick={plan.custom ? scrollToContact : scrollToContact}
                  >
                    {plan.custom ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                  30-Day Money-Back Guarantee
                </h3>
              </div>
              <p className="text-green-700 dark:text-green-400 text-sm">
                Not satisfied with results? Get a full refund within 30 days, no questions asked.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
