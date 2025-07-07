import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Real Estate <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Generate more leads and close more deals with targeted real estate marketing strategies.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Get Real Estate Audit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}