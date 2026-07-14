
/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Navbar
 * --------------------------------------------------
 */

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="#hero" className="text-2xl font-bold tracking-tight text-white">
          UV
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] md:inline-block"
        >
          Let's Talk →
        </a>
      </div>
    </header>
  );
};

export default Navbar;