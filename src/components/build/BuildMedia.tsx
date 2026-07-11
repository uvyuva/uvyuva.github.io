/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Build Media
 * --------------------------------------------------
 */

import type { BuildMediaProps } from "./types";

const gradients = {
  cloud:
    "from-sky-950 via-blue-700 to-cyan-400",
  ai:
    "from-violet-950 via-fuchsia-600 to-pink-500",
  web:
    "from-zinc-900 via-emerald-600 to-cyan-500",
};

const labels = {
  cloud: "CLOUD",
  ai: "AI",
  web: "WEB",
};

const BuildMedia = ({ mediaType }: BuildMediaProps) => {
  return (
    <div
      className={`
        relative
        h-full
        overflow-hidden
        rounded-t-[32px]
        bg-gradient-to-br
        ${gradients[mediaType]}
      `}
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Rings */}

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />

      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />

      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-sm" />

      {/* Label */}

      <div className="absolute bottom-8 left-8">

        <p className="text-xs uppercase tracking-[0.55em] text-white/60">
          {labels[mediaType]}
        </p>

      </div>
    </div>
  );
};

export default BuildMedia;