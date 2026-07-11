/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Fade In
 * --------------------------------------------------
 */

import { motion } from "framer-motion";
import type { FadeInProps } from "./types";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as = "div",
}: FadeInProps) => {
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{
        opacity: 0,
        x,
        y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "50px",
        amount: 0,
      }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;