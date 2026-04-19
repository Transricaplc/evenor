import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const leaders = [
  {
    name: "Joachim Urio",
    role: "Visionary Founder",
    bio: "Founder of Evenor Holdings, Joachim sets the strategic direction of the group — identifying overlooked infrastructure gaps across African cities and shaping the ventures built to address them.",
    email: "joachimurio@evenor.co.za",
  },
  {
    name: "Sandy Khumalo",
    role: "Head of Operations",
    bio: "Head of Operations at Evenor Holdings, Sandy leads execution across the portfolio — translating vision into disciplined delivery, partnerships, and the day-to-day rigour that keeps each company moving.",
    email: "sandykhumalo@evenor.co.za",
  },
];

const LeadershipSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leadership" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground tracking-[0.06em] mb-6">
            Leadership
          </h2>
          <div className="separator-rule" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 max-w-3xl mx-auto">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <p className="font-serif text-2xl tracking-[0.06em] text-foreground mb-3">
                {leader.name}
              </p>
              <p className="text-[10px] text-muted-foreground font-light tracking-[0.25em] uppercase mb-6">
                {leader.role}
              </p>
              <p className="text-sm text-muted-foreground font-light leading-[1.9] tracking-wide mb-8">
                {leader.bio}
              </p>
              <a
                href={`mailto:${leader.email}`}
                className="text-xs text-muted-foreground/70 hover:text-accent font-light tracking-wide transition-colors duration-500"
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
