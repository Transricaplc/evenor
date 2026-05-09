import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Countries Active" },
  { value: 340, prefix: "USD ", suffix: "M+", label: "Projects Delivered" },
  { value: 5, label: "Core Sectors" },
  { value: 200, suffix: "+", label: "Strategic Partners" },
];

const Counter = ({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(to * (0.5 - Math.cos(Math.PI * p) / 2)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
};

const PhilosophySection = () => {
  return (
    <section className="bg-navy section-pad text-white">
      <div className="container-wide max-w-4xl text-center">
        <p className="gold-label mb-6">Our Philosophy</p>
        <h2 className="font-display italic text-white text-3xl md:text-5xl mb-8">
          "Always Better."
        </h2>
        <p className="text-white/75 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
          We do not accept the ordinary. In every contract we sign, every cable we lay, every barrel we handle, and every strategy we deliver, Evenor Holdings holds itself to a single standard: the outcome must be better than what existed before. Better infrastructure. Better governance. Better returns. Better Africa.
        </p>
        <div className="w-20 h-[2px] bg-gold mx-auto my-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-gold text-4xl md:text-5xl font-bold mb-2">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-white/70 text-[11px] md:text-xs uppercase tracking-[0.18em] font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
