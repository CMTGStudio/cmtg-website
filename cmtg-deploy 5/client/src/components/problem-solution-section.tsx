import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProblemSolutionSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-[hsl(var(--cmtg-coral))] mr-3" />
              <h2 className="text-4xl font-bold text-[hsl(var(--cmtg-navy))]">The Problem</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most small businesses' social media looks like this, and it's costing them sales and leads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Generic, low-quality social media content example showing missed opportunities" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-[hsl(var(--cmtg-coral))]">
                <h3 className="text-lg font-semibold text-[hsl(var(--cmtg-navy))] mb-2">Profile Issues</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Lacking in brand character</li>
                  <li>• Missing SEO optimization</li>
                  <li>• Generic business descriptions</li>
                  <li>• No compelling call to action</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-[hsl(var(--cmtg-coral))]">
                <h3 className="text-lg font-semibold text-[hsl(var(--cmtg-navy))] mb-2">Content Problems</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Posts over-used as lead magnets</li>
                  <li>• Not enough quality content posted</li>
                  <li>• Missing branding from posts</li>
                  <li>• Low perception of service quality</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-[hsl(var(--cmtg-coral))]">
                <h3 className="text-lg font-semibold text-[hsl(var(--cmtg-navy))] mb-2">Missed Opportunities</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• No recent stories harming engagement</li>
                  <li>• Missing reels for broader reach</li>
                  <li>• No high-impact banner advertising</li>
                  <li>• Missing immediate action prompts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-4xl font-bold text-[hsl(var(--cmtg-navy))]">The Solution</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We transform problems into growth opportunities with 25 years of driving business growth across the USA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-[hsl(var(--cmtg-navy))] mb-2">Create Industry-Leading Stand-Out</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Create 'Before & After' videos of unprecedented quality</li>
                  <li>• Introduce motion and scroll-stopping impact</li>
                  <li>• Add uplifting audio and major calls-to-action</li>
                  <li>• Implement time-bound decision-making</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-[hsl(var(--cmtg-navy))] mb-2">Deepen Emotional Engagement</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Introduce your people – 'Your Experts'</li>
                  <li>• Build authenticity with founder stories</li>
                  <li>• Create stand-out team characters</li>
                  <li>• Step-by-step videos highlighting extra care</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-[hsl(var(--cmtg-navy))] mb-2">Peer-Leading Community Building</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Provide opportunities for customers to become features</li>
                  <li>• Create whole new genres of content</li>
                  <li>• Build engaged communities around your brand</li>
                  <li>• Turn customers into brand ambassadors</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Before and after transformation showing professional social media makeover results" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--cmtg-gold))] text-[hsl(var(--cmtg-navy))] px-6 py-3 rounded-full font-bold shadow-lg">
                Industry-Leading Results
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-[hsl(var(--cmtg-coral))] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[hsl(var(--cmtg-coral-light))] transition-all duration-300"
              size="lg"
            >
              Transform My Social Media
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
