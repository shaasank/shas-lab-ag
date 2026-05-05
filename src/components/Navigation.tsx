import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "PROJECTS", href: "/#case-studies" },
  { label: "SERVICES", href: "/#services" },
  { label: "CONTACT", to: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      window.location.href = href;
      return;
    }
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="page-container flex justify-between items-center h-[60px] relative">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sm font-bold tracking-[0.12em] text-white hover:text-white/70 transition-colors z-[60] relative"
        >
          SHAS LAB<span style={{ color: "var(--color-info)" }}>©</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[11px] tracking-[0.1em] transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href!)}
                className="text-[11px] tracking-[0.1em] text-white/40 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://calendly.com/shas-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary text-xs px-4 h-9"
        >
          Book a Call
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden z-[60] relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden z-50 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-light tracking-widest text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href!)}
                className="text-2xl font-light tracking-widest text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            )
          )}
          <a
            href="https://calendly.com/shas-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
