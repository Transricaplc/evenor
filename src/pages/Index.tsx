import Navbar from "@/components/Navbar";
import PageProgressBar from "@/components/PageProgressBar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import SectorsSection from "@/components/SectorsSection";
import WhyEvenorSection from "@/components/WhyEvenorSection";
import LeadershipSection from "@/components/LeadershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectorDeepDive from "@/components/SectorDeepDive";
import IndustriesTeaserSection from "@/components/IndustriesTeaserSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-offwhite">
      <PageProgressBar />
      <Navbar />
      <HeroSection />
      <section id="philosophy"><PhilosophySection /></section>
      <SectorsSection />
      <SectorDeepDive />
      <WhyEvenorSection />
      <IndustriesTeaserSection />
      <LeadershipSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Index;
