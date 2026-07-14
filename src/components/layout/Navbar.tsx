
/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Navbar
 * --------------------------------------------------
 */

import TextRoll from "../common/TextRoll";   // if you used Rule A


const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent backdrop-blur-[3px]">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="#hero" className="text-2xl font-bold tracking-tight text-white">
          UV
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              <TextRoll text={item} />
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