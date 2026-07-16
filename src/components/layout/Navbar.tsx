/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Navbar
 * --------------------------------------------------
 */

import { useEffect, useState } from "react";
import TextRoll from "../common/TextRoll";

const NAV = [
  { label: "Expertise", href: "#build" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 ${
          scrolled ? "" : "[text-shadow:0_1px_16px_rgba(0,0,0,0.45)]"
        }`}
      >
        <a href="#hero" className="text-2xl font-bold tracking-tight text-white">
          UV
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.3em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              <TextRoll text={item.label} />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] md:inline-block"
        >
          <TextRoll text="Let's Talk →" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;