
/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Navbar
 * --------------------------------------------------
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { FiMenu, FiX } from "react-icons/fi";
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
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // freeze background scroll while the mobile menu is open
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-[#050505]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 ${
          solid ? "" : "[text-shadow:0_1px_16px_rgba(0,0,0,0.45)]"
        }`}
      >
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="text-2xl font-bold tracking-tight text-white"
        >
          UV
        </a>

        {/* desktop nav */}
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

        {/* desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] md:inline-block"
        >
          <TextRoll text="Let's Talk →" />
        </a>

        {/* mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-2xl text-white md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col items-center gap-8 bg-[#050505]/95 px-6 pt-16 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg uppercase tracking-[0.3em] text-white/85"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-white px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-black"
            >
              Let's Talk →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;