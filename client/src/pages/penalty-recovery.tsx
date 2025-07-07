import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function PenaltyRecoveryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <section className="pt-20 pb-12 bg-gradient-to-br from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Google Penalty <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Recovery</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Recover from Google penalties and restore your search rankings with our expert recovery services.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white">
              Get Penalty Audit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}