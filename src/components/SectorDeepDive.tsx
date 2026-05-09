import { useState } from "react";
import { Check } from "lucide-react";

const tabs = [
  {
    key: "logistics",
    label: "Logistics",
    h3: "Moving Africa's Economy Forward",
    body: [
      "Evenor Holdings' Logistics division provides integrated supply chain solutions engineered specifically for Sub-Saharan Africa's unique corridor dynamics. Our capabilities span port logistics management, bonded warehouse operations, refrigerated and hazmat cargo handling, multimodal freight forwarding, and last-mile distribution in high-density urban and peri-urban markets.",
      "We work directly with Port Authorities, National Roads Agencies, and Customs departments to streamline cross-border flows — reducing dwell time, eliminating informal bottlenecks, and building transparent, data-driven supply chains that serve both commercial clients and government cargo mandates.",
    ],
    caps: [
      "Port logistics management & stevedoring advisory",
      "Customs brokerage facilitation & AEO compliance",
      "Cold-chain & hazmat logistics infrastructure",
      "Last-mile distribution networks — urban & rural",
      "Fleet telematics & supply chain digitisation",
      "SADC & EAC corridor trade facilitation",
    ],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=85",
  },
  {
    key: "ict",
    label: "ICT",
    h3: "Engineering Connectivity at National Scale",
    body: [
      "In an era where digital infrastructure is as foundational as roads and power, Evenor Holdings delivers turnkey ICT solutions capable of transforming ports, government campuses, and industrial zones into digitally sovereign operational environments.",
      "Our technical delivery is executed through SinoConnect Infrastructure Solutions Ltd (Shenzhen), one of Africa's most experienced port ICT EPCC contractors, under Evenor's prime contract responsibility. We manage the full lifecycle: design, procurement, civil works, installation, commissioning, and post-warranty managed services — all under a single accountable entity.",
    ],
    caps: [
      "Fibre optic backbone design & deployment (OS2 G.652D)",
      "Enterprise core switching & SD-WAN routing",
      "Internet gateway, NGFW & DDoS protection",
      "Wi-Fi 6 (outdoor marine-rated & indoor enterprise)",
      "Data centre fit-out & NOC establishment",
      "TCRA-compliant network registration & licensing",
      "24/7 managed services & network monitoring",
    ],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=85",
  },
  {
    key: "consulting",
    label: "Consulting",
    h3: "Strategy Built for African Complexity",
    body: [
      "African markets do not respond to generic frameworks. The political economy of infrastructure delivery, the layered decision-making architecture of state-owned enterprises, and the trust dynamics that govern public-private partnerships on this continent demand advisors who have operated inside these systems — not merely studied them.",
      "Evenor Holdings' consulting practice brings together expertise in public sector reform, regulatory strategy, investment facilitation, organisational turnaround, and digital transformation advisory. Our principals engage at Principal Secretary, Director General, and Board level — structuring interventions that create durable, measurable improvement in institutional performance.",
    ],
    caps: [
      "Government & parastatal strategic advisory",
      "Regulatory environment navigation",
      "Public-private partnership structuring (PPP)",
      "Organisational design & institutional reform",
      "Investment facilitation & trade linkage",
      "Digital transformation roadmapping",
      "Tender documentation & proposal engineering",
    ],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=85",
  },
  {
    key: "petro",
    label: "Petrochemicals",
    h3: "Downstream Energy. Upstream Ambition.",
    body: [
      "Africa's hydrocarbon economy is entering its most consequential decade — with new offshore discoveries, growing refinery capacity, and the urgent infrastructure requirement to distribute refined products across vast, underserved hinterlands. Evenor Holdings is positioned to serve this moment.",
      "Our Petrochemicals division provides petroleum product procurement and trading, fuel storage terminal design and commissioning, downstream distribution network engineering, and HSE compliance consulting for port fuel installations, storage farms, and industrial fuel facilities. We interface directly with National Energy Regulators, Petroleum Authorities, and Port Fuel Committees across East and Southern Africa.",
    ],
    caps: [
      "Petroleum product trading & procurement",
      "Fuel storage terminal design & commissioning",
      "Pipeline distribution advisory",
      "HSE compliance for fuel facilities (OSHA, NEMA)",
      "Refinery interface & downstream supply chain",
      "Energy regulatory navigation & licensing",
      "Bunker fuel solutions for port operators",
    ],
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=85",
  },
  {
    key: "mining",
    label: "Mining",
    h3: "Precision Engineering for Africa's Mineral Wealth",
    body: [
      "Sub-Saharan Africa holds an estimated 30% of the world's mineral reserves — yet value capture remains chronically underoptimised. Evenor Holdings' Mining Solutions division works with junior and mid-tier mining operators, national mining commissions, and mineral export authorities to bridge the gap between resource endowment and operational excellence.",
      "We deploy expertise across the mine-to-port value chain: operational efficiency advisory, environmental compliance engineering, processing technology integration, tailings management systems, and the mine logistics infrastructure required to move ore to market reliably and profitably. Our consulting work with Mining Commissions also supports beneficial ownership frameworks and community benefit sharing structures.",
    ],
    caps: [
      "Mine operational efficiency advisory",
      "Environmental & tailings management",
      "Mine-to-port logistics optimisation",
      "Mineral processing technology integration",
      "Mining regulatory compliance & licensing",
      "Community & social impact frameworks (ESIA)",
      "Beneficiation strategy & value-addition advisory",
    ],
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=85",
  },
];

const SectorDeepDive = () => {
  const [active, setActive] = useState(tabs[0].key);
  const t = tabs.find((x) => x.key === active)!;

  return (
    <section id="deepdive" className="bg-offwhite section-pad">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="gold-label mb-4">Sector Intelligence</p>
          <h2 className="font-display text-navy text-3xl md:text-5xl font-bold">
            Depth in Every Division.
          </h2>
        </div>

        <div className="hidden md:flex justify-center gap-10 border-b border-navy/10 mb-12">
          {tabs.map((x) => (
            <button
              key={x.key}
              onClick={() => setActive(x.key)}
              className={`pb-4 text-sm tracking-[0.15em] uppercase transition-colors relative ${
                active === x.key ? "text-navy font-semibold" : "text-midgray hover:text-navy"
              }`}
            >
              {x.label}
              {active === x.key && <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-gold" />}
            </button>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-2 mb-8">
          {tabs.map((x) => (
            <button
              key={x.key}
              onClick={() => setActive(x.key)}
              className={`text-left px-4 py-3 border-l-4 transition-colors ${
                active === x.key ? "border-gold bg-white text-navy font-semibold" : "border-transparent text-midgray"
              }`}
            >
              {x.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div key={t.key} className="grid lg:grid-cols-[1.2fr_1fr] gap-10 animate-fade-in">
          <div>
            <h3 className="font-display text-navy text-2xl md:text-3xl font-bold mb-6">{t.h3}</h3>
            <div className="space-y-4 text-charcoal/80 font-light leading-[1.85] text-[15px] md:text-base">
              {t.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {t.caps.map((c) => (
                <div key={c} className="flex items-start gap-2.5">
                  <Check size={16} className="text-gold mt-1 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-charcoal/85 text-sm font-light">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={t.img} alt={t.h3} loading="lazy" className="w-full h-full max-h-[520px] object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorDeepDive;
