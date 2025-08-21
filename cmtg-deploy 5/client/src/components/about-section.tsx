import { Film, Brain, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About CMTG
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine Hollywood-caliber talent with AI technology to create social media content that drives real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-8">
              We're not your typical social media agency. Our team combines the artistic vision and 
              technical expertise of <strong>Hollywood professionals</strong> with the efficiency and 
              innovation of <strong>AI technology</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Film className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Hollywood Talent</h3>
                <p className="text-sm text-gray-600">Professional editors and designers with industry experience</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Brain className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">AI Innovation</h3>
                <p className="text-sm text-gray-600">Cutting-edge technology to streamline and enhance creativity</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Our Mission
              </h3>
              <p className="text-gray-600">
                To transform social media from a necessary expense into your most powerful sales and 
                marketing channel. We believe every business deserves Hollywood-quality content that 
                drives real results.
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Professional video editing workspace with multiple monitors" 
              className="rounded-xl shadow-lg w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
