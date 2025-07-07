import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <section className="pt-20 pb-12 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Be part of a dynamic team that's revolutionizing digital marketing with AI technology.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}