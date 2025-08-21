import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";
import ServicesSection from "@/components/services-section";
import LeadCaptureForm from "@/components/lead-capture-form";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      <LeadCaptureForm />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
