import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./styles.css";

const Work = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <header className="work-header">
          <p className="work-eyebrow">Selected Work</p>
          <h2 className="work-heading">Building systems that ship.</h2>
        </header>

        <nav className="project-nav">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(index)}
              className={`project-nav-item ${
                activeProject === index ? "active" : ""
              }`}
            >
              {project.title}
              {activeProject === index && (
                <motion.span layoutId="nav-underline" className="nav-underline" />
              )}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <ProjectCard
            key={projects[activeProject].id}
            project={projects[activeProject]}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;