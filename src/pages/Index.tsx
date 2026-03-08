import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import LeadershipSection from "@/components/LeadershipSection";
import WhyEvenorSection from "@/components/WhyEvenorSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <GlobalReachSection />
      <LeadershipSection />
      <WhyEvenorSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
