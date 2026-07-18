import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Logo = () => {
  const reduce = useReducedMotion();
  const [waving, setWaving] = useState(!reduce); // wave once on load

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setWaving(false), 1600);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <motion.img
      src={waving ? "/pet/pet-wave.png" : "/pet/pet-rest.png"}
      alt="Yuvaraj"
      className="h-22 w-auto select-none"
      draggable={false}
      style={{ transformOrigin: "50% 100%" }}
      onMouseEnter={() => !reduce && setWaving(true)}
      onMouseLeave={() => setWaving(false)}
      animate={waving && !reduce ? { rotate: [0, -9, 9, -9, 9, 0] } : { rotate: 0 }}
      transition={
        waving && !reduce
          ? { duration: 1.2, ease: "easeInOut", repeat: Infinity }
          : { duration: 0.25 }
      }
    />
  );
};

export default Logo;