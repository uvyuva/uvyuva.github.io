import { motion } from "framer-motion";
import type { FadeInProps } from "./types";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
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
        amount: 0.15,
      }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;