import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail } from "lucide-react";
import ceoImg from "@/assets/leader-ceo.png";
import cooImg from "@/assets/leader-coo.png";

const leaders = [
  {
    name: "Joachim Urio",
    role: "CEO & Managing Partner",
    bio: "Visionary architect of global strategic alliances.",
    email: "joachimurio@evenor.co.za",
    image: ceoImg,
  },
  {
    name: "Sandy Khumalo",
    role: "COO & Managing Partner",
    bio: "Driving seamless execution and client outcomes.",
    email: "sandykhumalo@evenor.co.za",
    image: cooImg,
  },
];

const LeadershipSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leadership" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Leadership
          </p>
          <h2 className="text-2xl sm:text-3xl font-extralight text-foreground mb-6">
            Principals
          </h2>
          <div className="separator-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-2xl mx-auto">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border border-border">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-foreground mb-1">
                {leader.name}
              </h3>
              <p className="text-xs text-accent tracking-wide mb-3">{leader.role}</p>
              <p className="text-xs text-muted-foreground font-light mb-4">{leader.bio}</p>
              <a
                href={`mailto:${leader.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Mail size={12} />
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
