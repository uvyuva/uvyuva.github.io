/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Build Card
 * --------------------------------------------------
 */

import type { BuildCardProps } from "./types"; // if you used Rule B

/* per-category accent, drawn from the site palette (blue / gold / green) */
const ACCENTS = {
  cloud: {
    bar: "from-blue-500",
    label: "text-blue-400/80",
    edge: "hover:border-blue-500/40",
    glow: "hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.35)]",
  },
  ai: {
    bar: "from-amber-400",
    label: "text-amber-300/80",
    edge: "hover:border-amber-400/40",
    glow: "hover:shadow-[0_30px_80px_-20px_rgba(245,197,66,0.35)]",
  },
  web: {
    bar: "from-emerald-500",
    label: "text-emerald-400/80",
    edge: "hover:border-emerald-500/40",
    glow: "hover:shadow-[0_30px_80px_-20px_rgba(34,197,94,0.35)]",
  },
} as const;

const BuildCard = ({ item }: BuildCardProps) => {
  const accent = ACCENTS[item.mediaType];

  return (
    <article
      className={`
        group relative flex flex-col overflow-hidden rounded-[28px]
        border border-white/8 bg-gradient-to-b from-[#131313] to-[#0d0d0d]
        p-8 transition-all duration-500 hover:-translate-y-2
        ${accent.edge} ${accent.glow}
      `}
    >
      {/* thin accent line along the top */}
      <div
        className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent.bar} to-transparent`}
      />

      <p className={`text-[11px] uppercase tracking-[0.45em] ${accent.label}`}>
        {item.category}
      </p>

      <h3
        className="mt-5 text-[24px] font-light leading-[1.1] text-white lg:text-[30px]"
        style={{ letterSpacing: "-0.03em" }}
      >
        {item.headline}
      </h3>

      <p className="mt-5 text-[14px] leading-7 text-white/55">
        {item.description}
      </p>

      {/* mt-auto pins chips to the bottom → equal-height cards */}
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-wider text-white/70 transition-colors duration-300 group-hover:border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default BuildCard;