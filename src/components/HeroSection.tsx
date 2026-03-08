import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-8"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-foreground tracking-[0.04em] leading-[0.9] mb-10"
        >
          <em className="not-italic">Always</em>{" "}
          <em className="italic text-accent">Better</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-lg sm:text-xl text-foreground/60 tracking-[0.12em] mb-6"
        >
          Evenor Holdings
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="separator-rule mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs text-muted-foreground font-light tracking-[0.15em] uppercase mb-14"
        >
          Discreet counsel · Enduring alliances · From Cape Town to the world
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="font-serif italic text-sm text-accent/80 hover:text-accent tracking-[0.08em] transition-colors duration-500 border-b border-accent/20 hover:border-accent/50 pb-1"
          >
            Enquire Privately
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
