import { Mail, Linkedin, User } from "lucide-react";
import ceoPhoto from "@/assets/leader-ceo.png";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="bg-offwhite section-pad">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="gold-label mb-4">Leadership</p>
          <h2 className="font-display text-navy text-3xl md:text-5xl font-bold">
            The Vision Behind the Work.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="mx-auto lg:mx-0">
            <div className="relative w-[280px] sm:w-[360px] lg:w-[420px] aspect-square overflow-hidden shadow-[0_20px_50px_-20px_rgba(11,37,69,0.4)] border-l-4 border-gold">
              <img src={ceoPhoto} alt="Joachim Urio" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="text-navy font-semibold text-lg">Joachim Urio</p>
              <p className="text-gold text-[11px] font-medium tracking-[0.2em] uppercase mt-1">
                Founder & Chief Executive Officer
              </p>
              <p className="text-midgray text-sm mt-1">Cape Town, South Africa</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="gold-label mb-4">From the CEO</p>
            <h3 className="font-display italic text-navy text-2xl md:text-[32px] leading-snug mb-8">
              "Africa does not need to be fixed. It needs to be built — with ambition equal to its potential."
            </h3>
            <div className="space-y-5 text-charcoal/85 text-[15px] md:text-base font-light leading-[1.9]">
              <p>I founded Evenor Holdings on a conviction that has only deepened with every project we have delivered: that the African continent possesses everything it needs to sustain world-class infrastructure, industrial capacity, and technological sovereignty — what it has historically lacked is not resources, but partners who take it seriously.</p>
              <p>We take it seriously. When Evenor Holdings enters a room — whether that room is a minister's office in Dar es Salaam, a port authority boardroom in Cape Town, or a mining commissioner's office in Lusaka — we arrive with fully-engineered solutions, credible partnerships, and the long-term commitment that African institutions deserve and have too rarely received.</p>
              <p>Our philosophy is not a slogan. <em className="text-navy">'Always Better'</em> is a non-negotiable operating standard. Every structure we raise, every network we commission, every barrel we facilitate, and every strategy we recommend must leave the institution, the community, and the continent measurably better than we found it.</p>
              <p>We are not here for the quick win. We are here to build the infrastructure that Africa's next century demands — one project, one partnership, one better outcome at a time.</p>
              <p className="text-navy font-medium not-italic">— Joachim Urio, CEO</p>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-navy/10">
              <a href="#" className="flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="mailto:joachimurio@evenor.co.za" className="flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm">
                <Mail size={16} /> joachimurio@evenor.co.za
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-border p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                  <User size={28} className="text-midgray" />
                </div>
                <p className="text-midgray text-sm font-medium">Position Available</p>
                <p className="text-midgray text-xs mt-1">Senior Leadership</p>
              </div>
            ))}
          </div>
          <p className="text-center text-midgray text-sm mt-8 font-light">
            Evenor Holdings is assembling a world-class leadership team. Enquiries:{" "}
            <a href="mailto:talent@evenor.co.za" className="text-gold hover:underline">talent@evenor.co.za</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
