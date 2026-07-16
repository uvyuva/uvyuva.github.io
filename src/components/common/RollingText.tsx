import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./rollingtext.css";

const RollingText = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");
  const total = text.replace(/ /g, "").length;
  const mid = (total - 1) / 2;

  return (
    <span ref={ref} className={`rolling ${className}`} aria-label={text}>
      {words.map((word, wi) => {
        const before = words.slice(0, wi).reduce((sum, w) => sum + w.length, 0);
        return (
          <Fragment key={wi}>
            {wi > 0 ? " " : null}
            <span className="rolling-word">
              {word.split("").map((ch, ci) => {
                const dist = Math.abs(before + ci - mid);
                return (
                  <span key={ci} className="rolling-char" aria-hidden="true">
                    <motion.span
                      style={{ display: "inline-block" }}
                      initial={{ y: "110%" }}
                      animate={inView ? { y: 0 } : { y: "110%" }}
                      transition={{ duration: 0.6, delay: dist * 0.04, ease: [0.22, 1, 0.36, 1] }}
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
    </span>
  );
};

export default RollingText;