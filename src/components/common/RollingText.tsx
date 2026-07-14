import { Fragment } from "react";
import { motion } from "framer-motion";
import "./rollingtext.css";

const RollingText = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  const total = text.replace(/ /g, "").length;
  const mid = (total - 1) / 2;

  return (
    <span className={`rolling ${className}`} aria-label={text}>
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
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
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