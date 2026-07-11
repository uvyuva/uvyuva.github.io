/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Work Video Card
 * --------------------------------------------------
 */

import type { WorkVideoCardProps } from "./types";

const WorkVideoCard = ({ videoUrl }: WorkVideoCardProps) => {
  return (
    <article
      className="
        group
        relative
        h-[600px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/5
        bg-[#090909]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/10
      "
    >
      {/* Video */}

      <div className="relative h-[72%] overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
        </video>

        {/* Gradient */}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#090909]" />

      </div>

      {/* Bottom */}

      <div className="flex h-[28%] items-center px-10">

        <div>

          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/40">
            Portfolio
          </p>

          <h3 className="text-5xl font-semibold leading-[0.95] text-white">
            Interactive
            <br />
            Experience
          </h3>

        </div>

      </div>

    </article>
  );
};

export default WorkVideoCard;