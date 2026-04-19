import { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        visible
          ? "bg-background/90 backdrop-blur-sm border-b border-border/50 py-5 opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-8 sm:px-12 lg:px-16">
        <button onClick={() => scrollTo("#home")}>
          <span className="font-serif text-foreground text-lg tracking-[0.08em]">
            Evenor Holdings
          </span>
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollTo("#portfolio")}
            className="text-muted-foreground hover:text-foreground text-xs font-sans font-light tracking-[0.2em] uppercase transition-colors duration-500"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="text-muted-foreground hover:text-foreground text-xs font-sans font-light tracking-[0.2em] uppercase transition-colors duration-500"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
