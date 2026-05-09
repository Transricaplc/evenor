import { Truck, Network, Brain, Droplet, Mountain } from "lucide-react";

const sectors = [
  {
    icon: Truck,
    name: "LOGISTICS & SUPPLY CHAIN",
    desc: "End-to-end freight management, port logistics, last-mile distribution, cold-chain solutions, and cross-border corridor optimisation across Southern and East Africa. We move what matters — on time, every time.",
  },
  {
    icon: Network,
    name: "ICT INFRASTRUCTURE",
    desc: "Turnkey internet connectivity, fibre optic backbone deployment, enterprise networking, data centre fit-out, and smart port digitisation. From submarine cable landing stations to the last-mile access point.",
  },
  {
    icon: Brain,
    name: "MANAGEMENT CONSULTING",
    desc: "Strategic advisory, organisational design, public sector reform, regulatory navigation, and investment facilitation for governments, parastatals, and multinationals operating in complex African markets.",
  },
  {
    icon: Droplet,
    name: "PETROCHEMICALS SOLUTIONS",
    desc: "Petroleum product trading, fuel storage and distribution infrastructure, downstream supply chain management, and HSE-compliant facility engineering for refineries, terminals, and port fuel installations.",
  },
  {
    icon: Mountain,
    name: "MINING SOLUTIONS",
    desc: "Mineral processing advisory, mine-to-port logistics, tailings management, environmental compliance consulting, and technology integration for junior and mid-tier mining operations across Sub-Saharan Africa.",
  },
];

const SectorsSection = () => {
  const go = (h: string) => document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="sectors" className="bg-offwhite section-pad">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="gold-label mb-4">What We Do</p>
          <h2 className="font-display text-navy text-3xl md:text-5xl font-bold">
            Five Sectors. One Standard.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {sectors.slice(0, 3).map((s) => (
            <SectorCard key={s.name} {...s} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 md:max-w-[66%] md:mx-auto">
          {sectors.slice(3).map((s) => (
            <SectorCard key={s.name} {...s} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={() => go("#deepdive")} className="text-navy font-medium tracking-wide text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors">
            See Sector Intelligence →
          </button>
        </div>
      </div>
    </section>
  );
};

const SectorCard = ({ icon: Icon, name, desc }: { icon: any; name: string; desc: string }) => (
  <div className="sector-card min-h-[280px] flex flex-col">
    <Icon size={32} className="text-navy mb-5" />
    <h3 className="text-navy font-semibold text-base tracking-[0.08em] mb-3">{name}</h3>
    <p className="text-charcoal/70 text-sm leading-relaxed font-light flex-1">{desc}</p>
    <button
      onClick={() => document.querySelector("#deepdive")?.scrollIntoView({ behavior: "smooth" })}
      className="text-gold text-sm font-medium mt-5 self-start hover:underline"
    >
      Learn More →
    </button>
  </div>
);

export default SectorsSection;
