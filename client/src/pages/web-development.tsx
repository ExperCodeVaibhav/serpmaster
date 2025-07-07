import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, ShoppingCart, Zap, Globe, Database, CheckCircle } from "lucide-react";

export default function WebDevelopmentPage() {
  const technologies = [
    {
      icon: <Code className="w-6 h-6" />,
      name: "React.js",
      description: "Modern, scalable frontend applications with the latest React features and best practices."
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Node.js",
      description: "High-performance backend services and APIs built with Node.js and Express."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "PHP & Laravel",
      description: "Robust web applications using PHP and the Laravel framework for enterprise solutions."
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      name: "E-commerce",
      description: "Full-featured online stores with payment integration, inventory management, and more."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      name: "Responsive Design",
      description: "Mobile-first, responsive websites that work perfectly on all devices and screen sizes."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Performance",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience."
    }
  ];

  const services = [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built to your exact specifications and business requirements.",
      features: [
        "Custom functionality",
        "Scalable architecture",
        "API integrations",
        "User authentication",
        "Database design"
      ],
      price: "Starting at $5,000"
    },
    {
      title: "E-commerce Development",
      description: "Complete online store solutions with payment processing and inventory management.",
      features: [
        "Shopping cart functionality",
        "Payment gateway integration",
        "Product catalog",
        "Order management",
        "Customer accounts"
      ],
      price: "Starting at $8,000"
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for content management and business websites.",
      features: [
        "Custom theme development",
        "Plugin development",
        "WooCommerce integration",
        "SEO optimization",
        "Performance optimization"
      ],
      price: "Starting at $3,000"
    },
    {
      title: "Web Application Maintenance",
      description: "Ongoing support and maintenance to keep your website secure and up-to-date.",
      features: [
        "Regular updates",
        "Security monitoring",
        "Performance optimization",
        "Bug fixes",
        "Technical support"
      ],
      price: "Starting at $500/month"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and interactive prototypes to visualize the solution."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your application with clean code and thorough testing."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your application and provide ongoing support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Custom <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Web Development</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Build powerful, scalable web applications that drive business growth. From concept to launch, we create digital solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Modern Technologies
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We use the latest technologies to build exceptional web applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tech.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Development Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive web development solutions for every need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A proven methodology that ensures project success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your requirements and create a solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}