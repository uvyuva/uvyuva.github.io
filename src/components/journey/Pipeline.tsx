/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Pipeline
 * --------------------------------------------------
 */

import type { PipelineProps } from "./types";

const Pipeline = ({
  steps,
  activeIndex,
  onChange,
}: PipelineProps) => {
  return (
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between">

      {steps.map((step, index) => (
        <div
          key={step.year}
          className="flex flex-1 items-center"
        >
          <button
            onClick={() => onChange(index)}
            className="
              group
              relative
              z-10
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-2xl
              border
              transition-all
              duration-300
            "
            style={{
              borderColor:
                activeIndex === index
                  ? "#3B82F6"
                  : "rgba(255,255,255,.12)",

              background:
                activeIndex === index
                  ? "#111827"
                  : "#111111",
            }}
          >
            <div className="text-center">

              <p className="text-xs tracking-[0.35em] text-white/40">
                {step.year}
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                {step.title.split(" ")[0]}
              </p>

            </div>
          </button>

          {index !== steps.length - 1 && (
            <div className="h-[4px] flex-1 bg-white/10">
              <div
                className="h-full bg-blue-500 transition-all duration-500"
                style={{
                  width:
                    activeIndex > index
                      ? "100%"
                      : "0%",
                }}
              />
            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default Pipeline;