import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects, type Project } from "../../data/projects";
import ProjectArchitecture from "./ProjectArchitecture";
import TextRoll from "../common/TextRoll";
import RollingText from "../common/RollingText";
import "./styles.css";

interface StickyCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StickyCard = ({
  project,
  index,
  progress,
  range,
  targetScale,
}: StickyCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const rotate = useTransform(
    progress,
    range,
    [0, targetScale < 1 ? (index % 2 === 0 ? -3 : 3) : 0]
  );

  return (
    <div className="work-sticky">
      <motion.article
        className="work-card"
        style={{ scale, rotate, top: `calc(-5vh + ${index * 26}px)` }}
      >
        <div className="work-card-head">
          <div className="work-card-headleft">
            <span className="work-num">0{index + 1}</span>
            <div>
              <span className="work-cat">{project.badge}</span>
              <h3 className="work-title">{project.title}</h3>
            </div>
          </div>

          {project.liveUrl && (
            <a className="live-btn" href={project.liveUrl} target="_blank" rel="noreferrer">
              <TextRoll text="Live Project ↗" />
            </a>
          )}
        </div>

        <div className="work-card-body">
          <div className="work-card-info">
            <p className="work-tagline">{project.tagline}</p>
            <p className="work-desc">{project.description}</p>

            <ul className="work-tech">
              {project.technologies.map((tech) => (
                <li key={tech} className="tech-chip">
                  {tech}
                </li>
              ))}
            </ul>

            {project.metrics && (
              <div className="work-metrics">
                {project.metrics.map((m) => (
                  <div key={m.label} className="metric">
                    {m.value && <span className="metric-value">{m.value}</span>}
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="work-card-visual">
            <ProjectArchitecture nodes={project.architecture} />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const Work = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <p className="work-eyebrow">Selected Work</p>
        <h2 className="work-heading">
          <RollingText text="Systems built to Ship" />
        </h2>
      </div>

      <div className="work-cards" ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.05;
          const range: [number, number] = [i * (1 / projects.length), 1];
          return (
            <StickyCard
              key={project.id}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;