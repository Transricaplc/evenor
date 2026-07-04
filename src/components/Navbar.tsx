import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Link = { label: string; href: string; type: "route" | "hash" };

const links: Link[] = [
  { label: "HOME", href: "/", type: "route" },
  { label: "ABOUT", href: "/about", type: "route" },
  { label: "SERVICES", href: "#sectors", type: "hash" },
  { label: "INDUSTRIES", href: "#industries", type: "hash" },
  { label: "LEADERSHIP", href: "/leadership", type: "route" },
  { label: "PARTNERSHIPS", href: "#partners", type: "hash" },
  { label: "CONTACT", href: "#contact", type: "hash" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = pathname === "/";

  const handleClick = (l: Link) => {
    setOpen(false);
    if (l.type === "route") {
      navigate(l.href);
      window.scrollTo(0, 0);
      return;
    }
    // hash: scroll if on home, else navigate to home then scroll
    if (onHome) {
      document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: l.href } });
      setTimeout(() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }), 250);
    }
  };

  const forceOpaque = !onHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || forceOpaque ? "bg-navy shadow-lg py-4" : "bg-navy/30 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <button onClick={() => { navigate("/"); window.scrollTo(0, 0); }} className="text-left">
          <span className="font-display text-white text-xl md:text-2xl tracking-wide">Evenor Holdings</span>
          <div className="h-[2px] w-10 bg-gold mt-1" />
        </button>

        <div className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleClick(l)}
              className="nav-underline text-white text-[11px] font-medium tracking-[0.2em]"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleClick({ label: "CONTACT", href: "#contact", type: "hash" })}
            className="btn-gold !py-2.5 !px-5 !text-[11px]"
          >
            Partner With Us
          </button>
        </div>

        <button onClick={() => setOpen(true)} className="xl:hidden text-white" aria-label="Open menu">
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-navy z-50 flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleClick(l)}
                className="text-white text-lg font-medium tracking-[0.22em]"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleClick({ label: "CONTACT", href: "#contact", type: "hash" })}
              className="btn-gold mt-4"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
