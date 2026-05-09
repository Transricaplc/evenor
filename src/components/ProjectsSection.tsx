const projects = [
  {
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80",
    tag: "CIVIC TECHNOLOGY",
    title: "Sema App — Tanzania Civic Directory",
    desc: "Digital platform connecting Tanzanian citizens with verified government officials across all five tiers of government. Currently serving 26 regions of Tanzania through the Sema App platform.",
    status: "LIVE — 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    tag: "SAFETY INTELLIGENCE",
    title: "Almien — Urban Safety Platform — South Africa",
    desc: "AI-powered urban safety intelligence platform delivering real-time crime intelligence, safe-route navigation, and community safety networks to users across Cape Town metropolitan area. Seed-funded 2026.",
    status: "LIVE — 2026",
  },
];

const ProjectsSection = () => {
  const go = (h: string) => document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="projects" className="bg-navy section-pad text-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="gold-label mb-4">Selected Projects</p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-bold">
            Where We Have Delivered.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group bg-navy-light/40 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-gold text-navy text-[10px] font-bold px-3 py-1 tracking-[0.15em] mb-4">
                  {p.tag}
                </span>
                <h3 className="font-display text-white text-xl mb-3">{p.title}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-block bg-blue-500/20 text-blue-200 text-[10px] font-semibold px-3 py-1 tracking-[0.15em]">
                  {p.status}
                </span>
              </div>
            </div>
          ))}

          <div className="border-2 border-dashed border-gold/40 p-8 flex flex-col justify-center">
            <h3 className="font-display italic text-gold text-2xl mb-4">Pipeline — 2026/27</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
              Logistics corridor development · Petroleum terminal advisory · Mining digitisation programme · Cross-border ICT infrastructure
            </p>
            <button onClick={() => go("#contact")} className="text-gold text-sm font-medium self-start hover:underline">
              Enquire About Opportunities →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
