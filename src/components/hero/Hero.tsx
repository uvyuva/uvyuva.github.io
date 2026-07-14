/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Hero
 * --------------------------------------------------
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  /* cursor-follow spotlight — sets CSS vars directly (no re-render) */
  const handleMove = (e: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section ref={heroRef} id="hero" className="hero" onMouseMove={handleMove}>
      {/* aurora glow */}
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

      {/* cursor spotlight */}
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

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Building intelligent data experiences.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          I design scalable cloud-native platforms, AI-powered solutions and
          modern web applications focused on performance, reliability and
          thoughtful engineering.
        </motion.p>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#work" className="hero-btn hero-btn-primary">
            Selected Work →
          </a>
          <a href="#contact" className="hero-btn hero-btn-ghost">
            Let's Connect →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;