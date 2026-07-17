/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Skills (bento)
 * --------------------------------------------------
 */

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FiCloud, FiCpu, FiDatabase, FiCode, FiTool } from "react-icons/fi";
import { skillGroups } from "../../data/skills";
import RollingText from "../common/RollingText";
import "./styles.css";

type Meta = { tile: string; icon: IconType; accent: string; glow: string };

const META: Record<string, Meta> = {
  "Cloud (AWS)": { tile: "tile-cloud", icon: FiCloud, accent: "#3B82F6", glow: "59,130,246" },
  "Generative AI / AI Engineering": { tile: "tile-genai", icon: FiCpu, accent: "#F5C542", glow: "245,197,66" },
  "Data Engineering": { tile: "tile-data", icon: FiDatabase, accent: "#22C55E", glow: "56,189,248" },
  Programming: { tile: "tile-prog", icon: FiCode, accent: "#38BDF8", glow: "34,197,94" },
  Tools: { tile: "tile-tools", icon: FiTool, accent: "#94A3B8", glow: "148,163,184" },
};

const FALLBACK: Meta = { tile: "", icon: FiTool, accent: "#94A3B8", glow: "148,163,184" };

// Left column: Cloud + Data Engineering.  Right column: GenAI + Programming + Tools.
const COLUMNS: string[][] = [
  ["Cloud (AWS)", "Data Engineering"],
  ["Generative AI / AI Engineering", "Programming", "Tools"],
];

const Skills = () => {
  const byLabel = Object.fromEntries(skillGroups.map((g) => [g.label, g]));

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <header className="skills-header">
          <p className="skills-eyebrow">Skills &amp; Tooling</p>
          <h2 className="skills-heading">
            <RollingText text="The stack behind the work." />
          </h2>
        </header>

        <div className="skills-bento">
          {COLUMNS.map((labels, ci) => (
            <div className="bento-col" key={ci}>
              {labels.map((label) => {
                const group = byLabel[label];
                if (!group) return null;
                const meta = META[label] ?? FALLBACK;
                const Icon = meta.icon;

                return (
                <div
                  key={label}
                  className={`skill-tile ${meta.tile}`}
                  style={{ "--accent": meta.accent, "--glow": meta.glow } as CSSProperties}
                >
                  <div className="skill-tile-head">
                    <span className="skill-tile-icon">
                      <Icon />
                    </span>
                    <span className="skill-tile-label">{label}</span>
                  </div>

                  <ul className="skill-list">
                    {group.skills.map((s) => (
                      <li key={s} className="skill-chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;