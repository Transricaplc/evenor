import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const leaders = [
  {
    name: "Joachim Urio",
    role: "Principal",
    email: "joachimurio@evenor.co.za",
  },
  {
    name: "Sandy Khumalo",
    role: "Operations",
    email: "sandykhumalo@evenor.co.za",
  },
];

const LeadershipSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leadership" className="section-padding" ref={ref}>
      <div className="container-narrow max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 text-center">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <p className="font-serif text-xl tracking-[0.06em] text-foreground mb-2">
                {leader.name}
              </p>
              <p className="text-xs text-muted-foreground font-light tracking-[0.2em] uppercase mb-4">
                {leader.role}
              </p>
              <a
                href={`mailto:${leader.email}`}
                className="text-xs text-muted-foreground/60 hover:text-accent font-light tracking-wide transition-colors duration-500"
              >
                {leader.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
