import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Hollywood Video Editing",
    "AI-Enhanced Content",
    "Creative Graphic Design",
    "Strategic Planning"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">CMTG</div>
              <div className="text-sm text-blue-400 font-medium mb-4">Creative Magic To Go</div>
              <p className="text-gray-300 leading-relaxed">
                Transforming social media with Hollywood-caliber creativity and AI innovation.
              </p>
            </div>
            

          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Get Started</h3>
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("lead-capture")}
                className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] px-6 py-3 rounded-lg transition-colors font-medium text-left shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent font-extrabold">
                  Get My Free Demo
                </span>
              </button>
              <div className="text-gray-300 text-sm">
                <p>Ready to transform your social media?</p>
                <p className="text-blue-400 font-medium">Studio@CMTGMagic.com</p>
                <p className="text-blue-400 font-medium">+1 (512) 772-2153</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} CMTG - Creative Magic To Go. All rights reserved.
          </div>
          
          <div className="flex items-center text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-blue-400 mx-1 fill-current" />
            <span>for your success</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
