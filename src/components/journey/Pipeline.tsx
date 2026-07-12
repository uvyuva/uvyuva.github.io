import type { PipelineProps } from "./types";

const Pipeline = ({
  steps,
  activeIndex,
  onChange,
}: PipelineProps) => {
  const progress =
    steps.length > 1
      ? (activeIndex / (steps.length - 1)) * 100
      : 0;

  return (
    <div className="pipeline-wrapper">
      <div className="pipeline">
        <div className="pipeline__glow" />

        <div className="pipeline__line">
          <div
            className="pipeline__progress"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="pipeline__steps">
          {steps.map((step, index) => (
            <button
              key={step.year}
              onClick={() => onChange(index)}
              className={`pipeline__step ${
                index === activeIndex ? "active" : ""
              } ${
                index < activeIndex ? "completed" : ""
              }`}
            >
              <span className="pipeline__dot">
                <span className="pipeline__pulse" />
              </span>

              <span className="pipeline__year">
                {step.year}
              </span>

              <span className="pipeline__title">
                {step.title}
              </span>
            </button>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Pipeline;