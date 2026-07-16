
import { lazy, Suspense, useState } from "react";

const HeroGradientCanvas = lazy(() => import("./HeroGradientCanvas"));

const HeroBlob = () => {
  const [useStatic] = useState(() => {
    if (typeof window === "undefined") return true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lite =
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    return reduced || lite;
  });

  return (
    <>
      {/* static blue base — always behind, masks any WebGL context flash */}
      <div className="hero-blob-fallback" />

      {!useStatic && (
        <Suspense fallback={null}>
          <div className="hero-blob-canvas">
            <HeroGradientCanvas />
          </div>
        </Suspense>
      )}
    </>
  );
};

export default HeroBlob;