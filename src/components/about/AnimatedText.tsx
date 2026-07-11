/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Animated Text
 * --------------------------------------------------
 */

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import type { AnimatedTextProps } from "./types";

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p
      ref={containerRef}
      className="
        mx-auto
        max-w-[640px]
        text-center
        text-[#D7E2EA]
        text-[clamp(1rem,2vw,1.35rem)]
        font-medium
        leading-relaxed
      "
    >
      {characters.map((char, index) => {
        const progress = index / characters.length;

        const start = Math.max(0, progress - 0.1);
        const end = Math.min(1, progress + 0.05);

        const opacity = useTransform(
          scrollYProgress,
          [start, end],
          [0.2, 1]
        );

        return (
          <span
            key={index}
            className="relative inline-block"
          >
            <span className="invisible">
              {char === " " ? "\u00A0" : char}
            </span>

            <motion.span
              style={{ opacity }}
              className="absolute left-0 top-0"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;