import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const mentions = [
  {
    quote:
      "A quietly assembled portfolio shaping safety, civic infrastructure and lifestyle across the continent.",
    source: "Cape Town Private Briefing",
    year: "2026",
  },
  {
    quote:
      "Among the most discreet capital allocators emerging from the Western Cape.",
    source: "African Family Office Review",
    year: "2025",
  },
  {
    quote:
      "Evenor's holdings move with the patience of inherited wealth and the conviction of a builder.",
    source: "Selected Counsel",
    year: "2025",
  },
];

const RecognitionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="recognition" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground tracking-[0.06em] mb-6">
            Recognition
          </h2>
          <div className="separator-rule mb-6" />
          <p className="text-xs text-muted-foreground font-light tracking-[0.12em]">
            Mentioned in private circles. Never sought.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-16">
          {mentions.map((m, i) => (
            <figure
              key={i}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <blockquote className="font-serif text-xl sm:text-2xl text-foreground/90 font-normal leading-[1.6] tracking-[0.02em]">
                &ldquo;{m.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[10px] font-sans font-light tracking-[0.25em] text-muted-foreground/70 uppercase">
                {m.source} · {m.year}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
