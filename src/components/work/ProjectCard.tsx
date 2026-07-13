import { motion } from "framer-motion";
import type { Project } from "../../data/projects";
import ProjectArchitecture from "./ProjectArchitecture";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="project-content">
        <span className="project-badge">{project.badge}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>

        <ul className="project-tech">
          {project.technologies.map((tech) => (
            <li key={tech} className="tech-chip">
              {tech}
            </li>
          ))}
        </ul>

        {project.metrics && (
          <div className="project-metrics">
            {project.metrics.map((m) => (
              <div key={m.label} className="metric">
                {m.value && <span className="metric-value">{m.value}</span>}
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {project.liveUrl && (
          <a
            className="project-link"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit live site ↗
          </a>
        )}
      </div>

      <div className="project-visual">
        <ProjectArchitecture nodes={project.architecture} />
      </div>
    </motion.article>
  );
};

export default ProjectCard;