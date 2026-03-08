import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      {[ExpertiseSection, LeadershipSection, GlobalReachSection, ContactSection].map(
        (Section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionVariants}
          >
            <Section />
          </motion.div>
        )
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
