const partners = [
  "SinoConnect Infrastructure", "FNB Corporate Banking", "SEACOM Subsea", "Tanzania Ports Authority",
  "Vodacom Business", "SADC Trade Facilitation", "TCRA — Tanzania", "Lovable (Technology Partner)",
];

const PartnersSection = () => {
  return (
    <section className="bg-navy section-pad text-white">
      <div className="container-wide max-w-5xl text-center">
        <p className="gold-label mb-4">Ecosystem</p>
        <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-6">
          Global Partners. African Mandate.
        </h2>
        <p className="text-white/75 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-[17px] mb-14">
          Evenor Holdings does not work alone. Our project delivery capacity is underpinned by a curated network of Tier-1 technical partners, licensed ISPs, engineering subcontractors, and financial institutions — selected for their excellence, their African experience, and their alignment with our Always Better standard.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {partners.map((p) => (
            <div
              key={p}
              className="border border-white/30 h-20 flex items-center justify-center text-white text-[11px] md:text-sm font-semibold text-center px-3 hover:border-gold hover:text-gold transition-colors"
            >
              {p}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <svg viewBox="0 0 400 440" className="w-64 md:w-80" fill="none">
            <path
              d="M200 30 C 260 50, 310 110, 320 180 C 330 230, 320 280, 290 330 C 270 370, 230 400, 200 410 C 170 400, 130 370, 110 330 C 80 280, 70 230, 80 180 C 90 110, 140 50, 200 30 Z"
              stroke="hsl(var(--gold))"
              strokeWidth="1.5"
              opacity="0.6"
            />
            {[
              { x: 145, y: 360, label: "Cape Town" },
              { x: 175, y: 320, label: "Johannesburg" },
              { x: 225, y: 200, label: "Dar es Salaam" },
              { x: 215, y: 175, label: "Nairobi" },
              { x: 175, y: 280, label: "Lusaka" },
              { x: 200, y: 320, label: "Maputo" },
              { x: 130, y: 145, label: "Accra" },
            ].map((c) => (
              <g key={c.label}>
                <circle cx={c.x} cy={c.y} r="5" fill="hsl(var(--gold))">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx={c.x} cy={c.y} r="10" fill="hsl(var(--gold))" opacity="0.2" />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
