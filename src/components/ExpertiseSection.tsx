import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Truck, Zap, Link2, Wifi, BarChart3 } from "lucide-react";

const expertiseData = [
  {
    icon: Truck,
    title: "Logistics Optimisation",
    bullets: [
      "End-to-end supply route efficiency",
      "Cost reduction & resilience planning",
      "Cross-border trade facilitation",
    ],
  },
  {
    icon: Zap,
    title: "Energy Transition & Advisory",
    bullets: [
      "Sustainable energy strategies",
      "Regulatory navigation & compliance",
      "Renewable project facilitation",
    ],
  },
  {
    icon: Link2,
    title: "Supply Chain Value Addition",
    bullets: [
      "Resilience & digital enablement",
      "Circular economy models",
      "Stakeholder integration",
    ],
  },
  {
    icon: Wifi,
    title: "ICT Infrastructure Development",
    bullets: [
      "Connectivity & digital transformation",
      "Secure network architecture",
      "Smart city enablement",
    ],
  },
  {
    icon: BarChart3,
    title: "Commodity Trading & Facilitation",
    bullets: [
      "Strategic buyer/seller intermediation",
      "Market access & opportunity mapping",
      "Professional value-added brokerage",
    ],
  },
];

const ExpertiseSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="expertise" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-teal">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services designed to connect, optimise, and drive measurable growth across industries and borders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, i) => (
            <div
              key={item.title}
              className={`card-evenor p-8 animate-on-scroll ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <item.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
