/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Build Card
 * --------------------------------------------------
 */

import BuildMedia from "./BuildMedia";
import type { BuildCardProps } from "./types";

const BuildCard = ({ item }: BuildCardProps) => {
  return (
    <article
      className="
        group
        flex
        h-[560px]
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-white/8
        bg-[#090909]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-white/15
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* Media */}

      <div className="relative h-[320px] overflow-hidden">
        <div className="h-full transition-transform duration-700 group-hover:scale-105">
          <BuildMedia mediaType={item.mediaType} />
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-8">

        <p className="text-[11px] uppercase tracking-[0.45em] text-white/45">
          {item.category}
        </p>

        <h3
          className="mt-4 text-[22px] font-light leading-[1.05] text-white lg:text-[30px]"
          style={{ letterSpacing: "-0.04em" }}
        >
          {item.headline}
        </h3>

        <p className="mt-5 text-[14px] leading-7 text-white/60">
          {item.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                px-3
                py-1.5
                text-[11px]
                uppercase
                tracking-wider
                text-white/70
                transition-all
                duration-300
                group-hover:border-white/20
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </article>
  );
};

export default BuildCard;