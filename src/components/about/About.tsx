import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import "./styles.css";

const ABOUT_TEXT =
  "I enjoy building systems that solve real problems — from scalable AWS data platforms to AI-powered applications and modern web experiences. I believe great software is not just functional, but intuitive, reliable and thoughtfully engineered. Every project is an opportunity to simplify complexity, automate repetitive work and create experiences that people genuinely enjoy using.";

/* one character — its own component so useTransform is a top-level hook */
const Char = ({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

const AnimatedText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const chars = text.split("");
  return (
    <p ref={ref} className="about-text">
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return (
          <Char key={i} char={c} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
};


/* walk-cycle frames — save as transparent PNGs in /public/pet/ */
const PET_FRAMES = [
  "/pet/walk-1.png",
  "/pet/walk-2.png",
  "/pet/walk-3.png",
  "/pet/walk-4.png",
];
const PET_FPS = 8; // frames per second of the walk cycle

const Pet = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["2%", "88%"]);

  const [frame, setFrame] = useState(0);
  const [moving, setMoving] = useState(false);

  /* mark "moving" while scrolling, then stop shortly after scroll ends */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setMoving(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setMoving(false), 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  /* only cycle the legs while moving; settle on a standing frame when idle */
  useEffect(() => {
    if (!moving) {
      setFrame(0);
      return;
    }
    const id = setInterval(
      () => setFrame((f) => (f + 1) % PET_FRAMES.length),
      1000 / PET_FPS
    );
    return () => clearInterval(id);
  }, [moving]);

  return (
    <div ref={ref} className="about-pet-track">
      <motion.div
        className="about-pet"
        style={{ left }}
        animate={moving ? { y: [0, -8, 0] } : { y: 0 }}
        transition={
          moving
            ? { duration: 0.7, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
      >
        {PET_FRAMES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="about-pet-frame"
            style={{ opacity: i === frame ? 1 : 0 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          About me
        </motion.h2>

        <AnimatedText text={ABOUT_TEXT} />

        <motion.a
          href="#contact"
          className="about-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Let's Connect
        </motion.a>
      </div>

      <Pet />
    </section>
  );
};

export default About;