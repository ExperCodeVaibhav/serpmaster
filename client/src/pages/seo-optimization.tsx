import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Target, BarChart3, CheckCircle } from "lucide-react";

export default function SEOOptimizationPage() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Comprehensive SEO Audits",
      description: "AI-powered analysis of your website's technical SEO, content quality, and performance metrics."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Keyword Research & Strategy",
      description: "Advanced keyword analysis using machine learning to identify high-value opportunities."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "On-Page Optimization",
      description: "Complete optimization of meta tags, headers, content structure, and internal linking."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Real-time monitoring of rankings, traffic, and conversion metrics with detailed reporting."
    }
  ];

  const benefits = [
    "Increase organic traffic by 300% on average",
    "Improve search engine rankings within 60 days",
    "Boost local search visibility",
    "Enhance website user experience",
    "Drive more qualified leads",
    "Maximize ROI on digital marketing"
  ];

  const packages = [
    {
      name: "Starter SEO",
      price: "$599",
      period: "/month",
      features: [
        "Up to 10 targeted keywords",
        "Monthly SEO audit",
        "Basic on-page optimization",
        "Google Analytics setup",
        "Monthly progress report"
      ],
      popular: false
    },
    {
      name: "Professional SEO",
      price: "$999",
      period: "/month",
      features: [
        "Up to 25 targeted keywords",
        "Bi-weekly SEO audits",
        "Complete on-page optimization",
        "Technical SEO fixes",
        "Link building campaign",
        "Bi-weekly progress reports"
      ],
      popular: true
    },
    {
      name: "Enterprise SEO",
      price: "$1,999",
      period: "/month",
      features: [
        "Unlimited targeted keywords",
        "Weekly SEO audits",
        "Full-scale optimization",
        "Advanced technical SEO",
        "Premium link building",
        "Weekly progress reports",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Optimization</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Dominate search results with our advanced AI SEO strategies. Get more traffic, leads, and revenue with data-driven optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Free SEO Audit
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Everything you need to dominate search engine rankings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
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

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose Our SEO Services?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Our AI-powered SEO approach delivers measurable results that drive real business growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <BarChart3 className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-2xl font-bold">300% Traffic Increase</p>
                  <p className="text-blue-100">Average client improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              SEO Pricing Plans
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-2 border-blue-500' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">{pkg.price}</span>
                    <span className="text-slate-600 dark:text-slate-300">{pkg.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
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