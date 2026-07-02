import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Network, Brain, Droplet, Mountain, Package } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=90",
    eyebrow: "Cape Town · Johannesburg · Dar es Salaam · Nairobi",
    title: ["Building the Infrastructure", "Africa Deserves."],
    body: "A South African-headquartered industrial and technology conglomerate delivering turnkey solutions across Logistics, ICT, Consulting, Petrochemicals, Mining and Procurement — under a single mandate:",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=90",
    eyebrow: "Multi-Sector · Continental Reach · Institutional Grade",
    title: ["Engineered for Governments,", "Trusted by Enterprise."],
    body: "From national fibre backbones to port logistics, Evenor Holdings delivers projects that meet the standards of governments, parastatals and Tier-1 institutions across Sub-Saharan Africa —",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=90",
    eyebrow: "Turnkey Delivery · Strategic Partnerships · Long-Term Capital",
    title: ["A Principal-Led,", "Long-View Conglomerate."],
    body: "We do not chase transactions. Evenor Holdings partners with governments, OEMs and institutional capital on the infrastructure that will define the next century of African growth —",
  },
];

const sectors = [
  { icon: Truck, label: "LOGISTICS" },
  { icon: Network, label: "ICT" },
  { icon: Brain, label: "CONSULTING" },
  { icon: Droplet, label: "PETROCHEMICALS" },
  { icon: Mountain, label: "MINING" },
  { icon: Package, label: "PROCUREMENT" },
];

const HeroSection = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const go = (h: string) =>
    document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[i].image}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-navy/[0.78]" />

      <div className="relative flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <p className="gold-label mb-8">{slides[i].eyebrow}</p>

            <h1 className="font-display text-white text-[40px] sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-8">
              {slides[i].title[0]}<br />
              {slides[i].title[1]}
            </h1>

            <p className="text-white/80 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              {slides[i].body}{" "}
              <em className="text-gold not-italic font-normal">Always Better.</em>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => go("#sectors")} className="btn-gold">
                Explore Our Sectors
              </button>
              <button onClick={() => go("#contact")} className="btn-outline-white">
                Request a Consultation
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-[3px] transition-all duration-500 ${
                idx === i ? "w-10 bg-gold" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative bg-navy-deep border-t border-white/5">
        <div className="container-wide py-5 grid grid-cols-3 md:grid-cols-6 gap-4">
          {sectors.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="group flex flex-col items-center gap-2 transition-colors"
              onClick={() => go("#sectors")}
            >
              <Icon size={20} className="text-white group-hover:text-gold transition-colors" />
              <span className="text-white group-hover:text-gold text-[10px] md:text-[11px] font-medium tracking-[0.18em] transition-colors text-center">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
