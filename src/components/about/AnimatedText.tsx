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
    <motion.p
      ref={containerRef}
      style={{ opacity: scrollYProgress }}
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
      {characters.map((char, index) => (
        <span key={index}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </motion.p>
  );
};

export default AnimatedText;