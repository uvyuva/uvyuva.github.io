import type { WorkCardProps } from "./types";

export default function WorkCard({
  category,
  title,
  description,
  gradient = false,
}: WorkCardProps) {
  return (
    <div
      className="
        group
        relative
        h-[600px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/5
        bg-[#090909]
        p-10
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/10
      "
    >
      {/* Background Glow */}
      {gradient && (
        <div
          className="
            absolute
            -bottom-52
            -left-44
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-700/20
            blur-[180px]
          "
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Category */}
        <p className="uppercase tracking-[0.45em] text-xs text-white/40">
          {category}
        </p>

        {/* Title */}
        <h3 className="mt-5 text-5xl lg:text-6xl leading-[0.95] font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-10 max-w-sm text-lg leading-9 text-white/45">
            {description}
          </p>
        )}

        {/* Bottom CTA */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.35em] text-white/25">
            View Project
          </span>

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition-all
              duration-300
              group-hover:bg-white
              group-hover:text-black
            "
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
}