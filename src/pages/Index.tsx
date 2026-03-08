import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <LeadershipSection />
      <GlobalReachSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
