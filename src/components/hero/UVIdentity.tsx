import { Canvas } from "@react-three/fiber";
import OrbitScene from "./OrbitScene";

const UVIdentity = () => {
  return (
    <div className="relative flex h-[430px] w-[430px] items-center justify-center">

      {/* Perfect CSS Circle */}

      <div className="absolute h-[320px] w-[320px] rounded-full border border-neutral-200" />

      {/* Three Canvas */}

      <div className="absolute inset-0">

        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 45,
          }}
        >
          <OrbitScene />
        </Canvas>

      </div>

      {/* Editorial Overlay */}

      <div className="pointer-events-none absolute flex flex-col items-center">

        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-neutral-500">
          INTERACTIVE IDENTITY
        </p>

        <h2 className="text-7xl font-black tracking-tight">
          UV
        </h2>

        <div className="my-4 h-px w-16 bg-neutral-400" />

        <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            YUVARAJ P
        </p>

      </div>

    </div>
  );
};

export default UVIdentity;