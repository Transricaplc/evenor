import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TrendingUp, Users, MapPin, Layers } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Always Better Outcomes",
    desc: "Measurable ROI, efficiency gains, and sustainability improvements.",
  },
  {
    icon: Users,
    title: "Expert Connectors",
    desc: "Trusted facilitators between governments, policymakers, and businesses.",
  },
  {
    icon: MapPin,
    title: "Africa Insight, Global Reach",
    desc: "Deep local knowledge paired with world-class execution capability.",
  },
  {
    icon: Layers,
    title: "Comprehensive Services",
    desc: "Consultancy, commodity trading, and strategic intermediation under one roof.",
  },
];

const WhyEvenorSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/50" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-gradient-teal">Evenor</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <b.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-body text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEvenorSection;
