

/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Hero — "Attention" (variable-font read-head)
 * --------------------------------------------------
 */

import { useEffect, useRef, useState, Fragment } from "react";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import TextRoll from "../common/TextRoll";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles.css";


const EASE = [0.22, 1, 0.36, 1] as const;

/* headline split into two visual lines — text preserved verbatim */
const LINE1 = "Build the pipelines";
const LINE2 = "and the Intelligence on top.";
const HEADLINE = `${LINE1} ${LINE2}`;

/* read-head tuning */
const RADIUS = 130; // px of influence around the head
const PEAK = 880; // weight at the head's center
const REST1 = 560; // resting weight, line 1 (the structured base)
const REST2 = 300; // resting weight, line 2 (light, reactive)
const MAX_SCALE = 0.1; // extra transform-scale at the head

/* magnetic CTA — leans toward the cursor (unchanged) */
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
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scanRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  /* ---- the read-head: cursor-driven weight + scale ---- */
  useEffect(() => {
    const title = titleRef.current;
    const section = sectionRef.current;
    if (!title || !section) return;

    const glyphs = Array.from(
      title.querySelectorAll<HTMLElement>(".hero-glyph")
    );
    const bases = glyphs.map((g) => Number(g.dataset.base) || 400);

    // reduced motion → static, intentional weight (heavy base → light top)
    if (reduce) {
      glyphs.forEach((g, i) => {
        g.style.fontVariationSettings = `"wght" ${bases[i]}`;
      });
      return;
    }

    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let centers: number[] = [];
    let secLeft = 0;
    const measure = () => {
      centers = glyphs.map((g) => {
        const r = g.getBoundingClientRect();
        return r.left + r.width / 2;
      });
      secLeft = section.getBoundingClientRect().left;
    };
    measure();
    // remeasure once the variable font has actually loaded
    document.fonts?.ready.then(measure);

    const pointer = { x: 0, lx: 0, active: false };
    const curW = bases.slice();
    const curS = new Array(glyphs.length).fill(1);
    const lastW = new Array(glyphs.length).fill(-1);
    const lastS = new Array(glyphs.length).fill(-1);

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.lx = e.clientX - secLeft;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    if (hasHover) {
      section.addEventListener("pointermove", onMove);
      section.addEventListener("pointerleave", onLeave);
    }
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const scan = scanRef.current;
    let raf = 0;
    const loop = () => {
      let headX: number | null = null;
      if (pointer.active) headX = pointer.x;
      else if (!hasHover && centers.length) {
        // touch / no-hover: head auto-sweeps left↔right
        const t = performance.now() / 1600;
        const min = centers[0];
        const max = centers[centers.length - 1];
        headX = min + (max - min) * (0.5 - 0.5 * Math.cos(t));
      }

      for (let i = 0; i < glyphs.length; i++) {
        let infl = 0;
        if (headX !== null) {
          const d = Math.abs(centers[i] - headX);
          infl = Math.max(0, 1 - d / RADIUS);
          infl = infl * infl * (3 - 2 * infl); // smoothstep
        }
        const tW = bases[i] + infl * (PEAK - bases[i]);
        const tS = 1 + infl * MAX_SCALE;
        curW[i] += (tW - curW[i]) * 0.18;
        curS[i] += (tS - curS[i]) * 0.18;

        const w = Math.round(curW[i]);
        if (w !== lastW[i]) {
          glyphs[i].style.fontVariationSettings = `"wght" ${w}`;
          lastW[i] = w;
        }
        if (Math.abs(curS[i] - lastS[i]) > 0.002) {
          glyphs[i].style.transform = `scale(${curS[i].toFixed(3)})`;
          lastS[i] = curS[i];
        }
      }

      if (scan) {
        if (pointer.active) {
          scan.style.opacity = "1";
          scan.style.transform = `translateX(${pointer.lx}px)`;
        } else {
          scan.style.opacity = "0";
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  /* ---- choreographed entrance ---- */
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  const lineAnim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { clipPath: "inset(-15% 0 100% 0)", y: "0.25em", opacity: 0 },
          animate: { clipPath: "inset(-15% 0 -15% 0)", y: 0, opacity: 1 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  const renderLine = (text: string, base: number, accentWord: string | null) =>
    text.split(" ").map((word, wi) => (
      <Fragment key={wi}>
        {wi > 0 && <span className="hero-space"> </span>}
        <span
          className={
            "hero-word" +
            (accentWord && word.replace(/[.,]/g, "") === accentWord
              ? " hero-word--accent"
              : "")
          }
        >
          {word.split("").map((ch, ci) => (
            <span key={ci} className="hero-glyph" data-base={base}>
              {ch}
            </span>
          ))}
        </span>
      </Fragment>
    ));

  return (
    <section ref={sectionRef} id="hero" className="hero">
      <span className="hero-grain" aria-hidden="true" />
      <span ref={scanRef} className="hero-scan" aria-hidden="true" />

      <div className="hero-inner">
        <motion.p className="hero-whoami" {...rise(0)}>
          <span className="hw-cmd">{"> whoami"}</span>
          <span className="hw-arrow">{" → "}</span>
          <span className="hw-name">Yuvaraj</span>
          <span className="hw-tag">{" — human in the loop"}</span>
        </motion.p>

        <motion.p className="hero-eyebrow" {...rise(0.08)}>
          AWS Data Engineer <span className="dot">·</span> Generative AI{" "}
          <span className="dot">·</span> Web Developer
        </motion.p>

        <h1 className="hero-title" aria-label={HEADLINE} ref={titleRef}>
          <motion.span className="hero-line" aria-hidden="true" {...lineAnim(0.18)}>
            {renderLine(LINE1, REST1, null)}
          </motion.span>
          <motion.span className="hero-line" aria-hidden="true" {...lineAnim(0.3)}>
            {renderLine(LINE2, REST2, "Intelligence")}
          </motion.span>
        </h1>

        <motion.p className="hero-subtitle" {...rise(0.5)}>
          I build cloud-native data platforms on AWS and the AI systems that
          run on top of them from large-scale migrations to
          retrieval-augmented assistants.
        </motion.p>

        <motion.div className="hero-cta-row" {...rise(0.62)}>
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