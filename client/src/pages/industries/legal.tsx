import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Legal Services <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Attract more clients and build your law firm's reputation with ethical legal marketing.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white">
              Get Legal Audit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}