import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Linkedin, Mail } from "lucide-react";
import ceoImg from "@/assets/leader-ceo.png";
import cooImg from "@/assets/leader-coo.png";

const leaders = [
  {
    name: "Joachim Urio",
    role: "CEO & Founder",
    bio: "Driving innovation, global growth, and strategic connections.",
    email: "joachimurio@evenor.co.za",
    image: ceoImg,
  },
  {
    name: "Sandy Khumalo",
    role: "COO",
    bio: "Overseeing operations, execution, and client success across markets.",
    email: "sandykhumalo@evenor.co.za",
    image: cooImg,
  },
];

const LeadershipSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leadership" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-teal">Leadership</span> Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {leaders.map((leader, i) => (
            <div
              key={leader.name}
              className="card-evenor p-8 text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-muted overflow-hidden border-2 border-accent/20">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{leader.name}</h3>
              <p className="text-accent font-medium text-sm mb-3">{leader.role}</p>
              <p className="text-muted-foreground text-sm mb-5">{leader.bio}</p>
              <div className="flex items-center justify-center gap-4">
                <a href={`mailto:${leader.email}`} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors">
                  <Mail size={14} />
                  {leader.email}
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
