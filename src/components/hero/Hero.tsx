/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Hero
 * --------------------------------------------------
 */

import { useRef, useState, Fragment } from "react";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { motion } from "framer-motion";
import HeroBlob from "./HeroBlob";
import TextRoll from "../common/TextRoll";
import "./styles.css";

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

const HeroTitle = () => (
  <h1
    className="hero-title"
    aria-label="Build the pipelines and the intelligence on top."
  >
    <RollChars text="Build the pipelines and the Intelligence on top." base={0.1} />
  </h1>
);

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
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--bx", `${(x / r.width - 0.5) * 40}px`);
    el.style.setProperty("--by", `${(y / r.height - 0.5) * 40}px`);
  };

  return (
    <section ref={heroRef} id="hero" className="hero" onMouseMove={handleMove}>
      <HeroBlob />

      <div className="hero-spotlight" />

      <div className="hero-inner">
        <motion.p
          className="hero-whoami"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hw-cmd">{"> whoami"}</span>
          <span className="hw-arrow">{" → "}</span>
          <span className="hw-name">Yuvaraj</span>
          <span className="hw-tag">{" — human in the loop"}</span>
        </motion.p>

        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          AWS Data Engineer <span className="dot">·</span> Generative AI{" "}
          <span className="dot">·</span> <br></br>Web Developer
        </motion.p>

        <HeroTitle />

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          I build cloud-native data platforms on AWS and the AI systems that
          run on top of them from large-scale migrations to
          retrieval-augmented assistants.
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
