import { motion } from "framer-motion";

interface ConnectorProps {
  progress: number;
}

const Connector = ({ progress }: ConnectorProps) => {
  return (
    <motion.div
      className="pipeline-svg"
      initial={false}
      animate={{
        x: `${progress}%`,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <svg
        width="2"
        height="170"
        viewBox="0 0 2 170"
        fill="none"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="170"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
};

export default Connector;