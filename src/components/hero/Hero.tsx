/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Hero
 * --------------------------------------------------
 */

import { useRef, useState, useEffect, Fragment } from "react";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextRoll from "../common/TextRoll";
import "./styles.css";

const ROTATING = ["data", "AI", "cloud"];

/* rolls a phrase in, letter by letter, starting at `base` seconds */
const RollChars = ({ text, base }: { text: string; base: number }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const before = words.slice(0, wi).reduce((sum, w) => sum + w.length, 0);
        return (
          <Fragment key={wi}>
            {wi > 0 ? " " : null}
            <span className="roll-word">
              {word.split("").map((ch, ci) => {
                const delay = base + (before + ci) * 0.04;
                return (
                  <span key={ci} className="roll-char" aria-hidden="true">
                    <motion.span
                      style={{ display: "inline-block" }}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {ch}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          </Fragment>
        );
      })}
    </>
  );
};

const HeroTitle = () => {
  const [w, setW] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setW((p) => (p + 1) % ROTATING.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="hero-title" aria-label="Building intelligent data experiences.">
      <RollChars text="Building intelligent" base={0.1} />{" "}
      <span className="hero-rotate" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROTATING[w]}
            className="hero-rotate-word"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {ROTATING[w]}
          </motion.span>
        </AnimatePresence>
      </span>
      <RollChars text="experiences." base={0.5} />
    </h1>
  );
};

/* magnetic CTA — leans toward the cursor */
const MagnetButton = ({
  href,
  className,
  children,
  target,
  rel,
}: {
  href: string;
  className: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * 0.3,
      y: (e.clientY - (r.top + r.height / 2)) * 0.3,
    });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  const handleMove = (e: ReactMouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section ref={heroRef} id="hero" className="hero" onMouseMove={handleMove}>
      <div className="hero-glow">
        <motion.span
          className="hero-blob hero-blob-blue"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="hero-blob hero-blob-gold"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="hero-spotlight" />

      <div className="hero-inner">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AWS Data Engineer <span className="dot">·</span> Generative AI{" "}
          <span className="dot">·</span> Web Developer
        </motion.p>

        <HeroTitle />

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          I design scalable cloud-native platforms, AI-powered solutions and
          modern web applications focused on performance, reliability and
          thoughtful engineering.
        </motion.p>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <MagnetButton href="#work" className="hero-btn hero-btn-primary">
            <TextRoll text="Selected Work →" />
          </MagnetButton>
          <MagnetButton href="#contact" className="hero-btn hero-btn-ghost">
            <TextRoll text="Let's Connect →" />
          </MagnetButton>
          <MagnetButton
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-btn hero-btn-ghost"
          >
            <TextRoll text="Download CV ↓" />
          </MagnetButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;