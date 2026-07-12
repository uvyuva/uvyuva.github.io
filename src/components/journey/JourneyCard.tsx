/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Journey Card
 * --------------------------------------------------
 */

import { motion, AnimatePresence } from "framer-motion";
import type { JourneyCardProps } from "./types";

const JourneyCard = ({ step }: JourneyCardProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.year}
        initial={{
        opacity:0,
        y:50,
        scale:.96
        }}
        animate={{
        opacity:1,
        y:0,
        scale:1
        }}
        exit={{
        opacity:0,
        y:-40,
        scale:.96
        }}
        transition={{
        duration:.6,
        ease:[0.22,1,0.36,1]
        }}
        className="
          relative
          z-10
          mx-auto
          mt-2
          w-full
          max-w-5xl
          rounded-[32px]
          border
          border-white/10
          bg-[#101010] shadow-[0_30px_80px_rgba(0,0,0,.45)]
          p-16
        "
      >
        <motion.p
            key={`year-${step.year}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-sm uppercase tracking-[0.4em] text-white/40"
          >
            {step.year}
        </motion.p>

        <motion.h3
          key={`title-${step.title}`}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.05,
          }}
          className="mt-4 text-5xl font-light text-white"
          style={{ letterSpacing: "-0.04em" }}
          >
          {step.title}
        </motion.h3>

        <motion.p
          key={`subtitle-${step.subtitle}`}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.12,
          }}
          className="mt-3 text-lg text-white/60"
          >
          {step.subtitle}
        </motion.p>

        <motion.p
            key={`description-${step.year}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70"
          >
            {step.description}
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-3">
          {step.technologies.map((tech, index) => (
            
            <motion.span
              key={tech}
              initial={{
                  opacity:0,
                  y:15
              }}
              animate={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    delay:index*.08
                }}
                className="
                    rounded-full
                    border
                    border-white/10
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                "
                >
                {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JourneyCard;