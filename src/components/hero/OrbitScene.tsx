import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const OrbitScene = () => {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    easing.dampE(
      group.current.rotation,
      [
        state.pointer.y * 0.15,
        state.pointer.x * 0.15,
        group.current.rotation.z + delta * 0.08,
      ],
      0.2,
      delta
    );

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
  });

  const radius = 1.8;

  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight
        position={[3, 3, 5]}
        intensity={2}
      />

      <group ref={group}>

        {Array.from({ length: 6 }).map((_, i) => {

          const angle = (Math.PI * 2 * i) / 6;

          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0,
              ]}
            >
              <sphereGeometry args={[0.032, 32, 32]} />

              <meshStandardMaterial
                color="#666666"
                roughness={1}
                metalness={0}
            />

            </mesh>
          );
        })}

      </group>
    </>
  );
};

export default OrbitScene;