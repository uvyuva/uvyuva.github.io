/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Navbar
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */

import Button from "../common/Button";
import Container from "../common/Container";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[var(--color-bg)]/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">

        <a
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          UV
        </a>

        <nav className="hidden items-center gap-12 md:flex">

          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs uppercase tracking-[0.3em] transition-opacity duration-300 hover:opacity-60 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}

        </nav>

        <div className="hidden md:block">
          <Button href="#contact">
            Let's Talk
          </Button>
        </div>

      </Container>
    </header>
  );
};

export default Navbar;