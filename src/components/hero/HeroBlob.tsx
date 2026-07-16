import { lazy, Suspense, useState } from "react";

const HeroGradientCanvas = lazy(() => import("./HeroGradientCanvas"));

const HeroBlob = () => {
  // decide once, client-side: skip WebGL on touch/small screens & reduced-motion
  const [useStatic] = useState(() => {
    if (typeof window === "undefined") return true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lite =
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    return reduced || lite;
  });

  if (useStatic) return <div className="hero-blob-fallback" />;

  return (
    <Suspense fallback={<div className="hero-blob-fallback" />}>
      <div className="hero-blob-canvas">
        <HeroGradientCanvas />
      </div>
    </Suspense>
  );
};

export default HeroBlob;