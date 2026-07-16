import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const HeroGradientCanvas = () => (
  <ShaderGradientCanvas
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
  >
    <ShaderGradient
      control="props"
      animate="on"
      type="sphere"
      uSpeed={0.3}
      uStrength={0.45}
      uDensity={0.9}
      uFrequency={0}
      color1="#1E3A8A"
      color2="#3B82F6"
      color3="#93C5FD"
      grain="on"
      cDistance={3.6}
      cameraZoom={9}
      cAzimuthAngle={180}
      cPolarAngle={90}
      positionX={0}
      positionY={0}
      positionZ={0}
      rotationX={0}
      rotationY={0}
      rotationZ={0}
      reflection={0.1}
      brightness={1.15}
      lightType="3d"
    />
  </ShaderGradientCanvas>
);

export default HeroGradientCanvas;