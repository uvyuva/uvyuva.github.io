import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import "./styles.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <header className="skills-header">
          <p className="skills-eyebrow">Skills & Tooling</p>
          <h2 className="skills-heading">The stack behind the work</h2>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <h3 className="skill-group-label">{group.label}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;