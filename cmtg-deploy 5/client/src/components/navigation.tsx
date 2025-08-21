import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              CMTG
            </div>
            <div className={`text-xs font-medium transition-colors ${
              isScrolled ? "text-blue-600" : "text-gray-200"
            }`}>
              Creative Magic To Go
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-blue-50 text-black font-medium px-6 py-2 rounded-lg text-base relative overflow-hidden group transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:bg-blue-100 hover:text-blue-600 nav-btn-shimmer"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="bg-blue-400 text-white px-6 py-2 rounded-lg font-medium text-base relative overflow-hidden group transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:bg-blue-500 nav-btn-shimmer"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <Button
                onClick={() => scrollToSection("lead-capture")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-base relative overflow-hidden group transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:bg-blue-700 nav-btn-pulse nav-btn-shimmer"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? "text-gray-900" : "text-white"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 mx-3 bg-blue-50 text-black font-medium w-auto text-left rounded-lg text-base relative overflow-hidden group transition-all duration-300 hover:transform hover:scale-105 hover:shadow-md hover:bg-blue-100 hover:text-blue-600 nav-btn-shimmer"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 mx-3 bg-blue-400 text-white font-medium w-auto text-left rounded-lg text-base relative overflow-hidden group transition-all duration-300 hover:transform hover:scale-105 hover:shadow-md hover:bg-blue-500 nav-btn-shimmer"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <Button
              onClick={() => scrollToSection("lead-capture")}
              className="mx-3 mt-4 bg-blue-600 text-white font-medium text-base relative overflow-hidden group transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:bg-blue-700 nav-btn-pulse nav-btn-shimmer"
              size="sm"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
