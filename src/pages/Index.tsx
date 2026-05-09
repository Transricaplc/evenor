import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import SectorsSection from "@/components/SectorsSection";
import WhyEvenorSection from "@/components/WhyEvenorSection";
import LeadershipSection from "@/components/LeadershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectorDeepDive from "@/components/SectorDeepDive";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <SectorsSection />
      <WhyEvenorSection />
      <LeadershipSection />
      <ProjectsSection />
      <SectorDeepDive />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
