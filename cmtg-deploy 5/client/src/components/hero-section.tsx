import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-blue-400">Creative Magic</span><br />
            To Go
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your social media with Hollywood-caliber editing talent and AI technology. 
            We deliver scroll-stopping content that drives engagement and sales.
          </p>
          
          <div className="flex flex-col items-center justify-center mb-16">
            <Button 
              onClick={() => scrollToSection("lead-capture")}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] px-12 py-5 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent text-2xl font-extrabold">
                Get My Free Demo
              </span>
            </Button>
            <p className="text-sm text-gray-400 mt-3">
              Only 5 spots available this week • No credit card required
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">Hollywood</div>
              <div className="text-gray-300">Quality Editing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">AI</div>
              <div className="text-gray-300">Enhanced Efficiency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">Results</div>
              <div className="text-gray-300">Driven Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
