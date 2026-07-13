import { Fragment } from "react";
import { motion } from "framer-motion";

const STEP = 0.7; // seconds the pulse spends on each segment

const ProjectArchitecture = ({ nodes }: { nodes: string[] }) => {
  const cycle = nodes.length * STEP; // one full pass through the pipeline

  return (
    <div className="pipeline">
      {nodes.map((label, i) => (
        <Fragment key={label}>
          <motion.div
            className="pipe-node"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
          >
            <motion.span
              className="pipe-label"
              animate={{
                color: ["#cbd2d9", "#ffffff", "#cbd2d9"],
                textShadow: [
                  "0 0 0px rgba(245,197,66,0)",
                  "0 0 14px rgba(245,197,66,0.95)",
                  "0 0 0px rgba(245,197,66,0)",
                ],
              }}
              transition={{
                duration: 0.6,
                delay: i * STEP,
                repeat: Infinity,
                repeatDelay: cycle - 0.6,
                ease: "easeInOut",
              }}
            >
              {label}
            </motion.span>
          </motion.div>

          {i < nodes.length - 1 && (
            <div className="pipe-track">
              <motion.span
                className="pipe-pulse"
                animate={{
                  y: ["-60%", "0%", "120%", "160%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: STEP,
                  delay: i * STEP,
                  repeat: Infinity,
                  repeatDelay: cycle - STEP,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.8, 1],
                }}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ProjectArchitecture;