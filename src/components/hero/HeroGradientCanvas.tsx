
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const HeroGradientCanvas = () => (
  <ShaderGradientCanvas
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
  >
    <ShaderGradient
      control="props"
      animate="on"
      type="waterPlane"
      uSpeed={0.2}
      uStrength={1.3}
      uDensity={1.4}
      uFrequency={5.5}
      color1="#1E3A8A"
      color2="#3B82F6"
      color3="#93C5FD"
      grain="on"
      cDistance={3.4}
      cameraZoom={1}
      cAzimuthAngle={180}
      cPolarAngle={90}
      positionX={0}
      positionY={0}
      positionZ={0}
      rotationX={0}
      rotationY={0}
      rotationZ={0}
      reflection={0.1}
      brightness={0.9}
      lightType="3d"
    />
  </ShaderGradientCanvas>
);

export default HeroGradientCanvas;