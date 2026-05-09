import { motion } from "framer-motion";
import { Truck, Network, Brain, Droplet, Mountain } from "lucide-react";

const sectors = [
  { icon: Truck, label: "LOGISTICS" },
  { icon: Network, label: "ICT INFRASTRUCTURE" },
  { icon: Brain, label: "CONSULTING" },
  { icon: Droplet, label: "PETROCHEMICALS" },
  { icon: Mountain, label: "MINING SOLUTIONS" },
];

const HeroSection = () => {
  const go = (h: string) => document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-navy/[0.78]" />

      <div className="relative flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gold-label mb-8"
          >
            Cape Town · Johannesburg · Dar es Salaam · Nairobi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-display text-white text-[40px] sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-8"
          >
            Building the Infrastructure<br />
            Africa Deserves.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/80 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Evenor Holdings is a South African-headquartered industrial and technology conglomerate delivering turnkey solutions in Logistics, ICT, Consulting, Petrochemicals, and Mining across the African continent — with the singular mandate: <em className="text-gold not-italic font-normal">Always Better.</em>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={() => go("#sectors")} className="btn-gold">Explore Our Sectors</button>
            <button onClick={() => go("#leadership")} className="btn-outline-white">Meet Our Leadership</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-16 h-px bg-white/60 mx-auto mt-14"
          />
        </div>
      </div>

      <div className="relative bg-navy-deep border-t border-white/5">
        <div className="container-wide py-5 grid grid-cols-2 md:grid-cols-5 gap-4">
          {sectors.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 cursor-pointer transition-colors"
              onClick={() => go("#sectors")}
            >
              <Icon size={20} className="text-white group-hover:text-gold transition-colors" />
              <span className="text-white group-hover:text-gold text-[10px] md:text-[11px] font-medium tracking-[0.18em] transition-colors text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
