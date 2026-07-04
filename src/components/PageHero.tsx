import { Link } from "react-router-dom";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  breadcrumb: { label: string; href?: string }[];
  image: string;
  height?: string;
}

const PageHero = ({ eyebrow, title, breadcrumb, image, height = "60vh" }: PageHeroProps) => (
  <section
    className="relative w-full flex items-end bg-navy"
    style={{ minHeight: height, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/85 to-navy/60" />
    <div className="relative container-wide pt-40 pb-16 md:pb-20">
      <nav aria-label="Breadcrumb" className="mb-6 text-white/70 text-[11px] tracking-[0.2em] uppercase font-medium">
        {breadcrumb.map((b, i) => (
          <span key={b.label}>
            {b.href ? (
              <Link to={b.href} className="hover:text-gold transition-colors">
                {b.label}
              </Link>
            ) : (
              <span className="text-gold">{b.label}</span>
            )}
            {i < breadcrumb.length - 1 && <span className="mx-3 text-white/40">/</span>}
          </span>
        ))}
      </nav>
      {eyebrow && <p className="gold-label mb-4">{eyebrow}</p>}
      <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
        {title}
      </h1>
      <div className="mt-8 h-[3px] w-16 bg-gold" />
    </div>
  </section>
);

export default PageHero;
