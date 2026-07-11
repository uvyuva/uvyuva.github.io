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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.45 }}
        className="
          mx-auto
          mt-20
          w-full
          max-w-3xl
          rounded-[32px]
          border
          border-white/10
          bg-[#101010]
          p-10
        "
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          {step.year}
        </p>

        <h3
          className="mt-4 text-5xl font-light text-white"
          style={{ letterSpacing: "-0.04em" }}
        >
          {step.title}
        </h3>

        <p className="mt-3 text-lg text-white/60">
          {step.subtitle}
        </p>

        <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70">
          {step.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {step.technologies.map((tech) => (
            <span
              key={tech}
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
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JourneyCard;