import { OrbitControls, Sparkles } from "@react-three/drei";
import React from "react";
import StarField from "./StarField";

const CommonViewer = ({ sparkle, rectAreaLight }) => {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={0.2}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ambientLight intensity={0.5} />
      <StarField count={1800} />
      <rectAreaLight
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -5, -1]}
        intensity={10}
        color={rectAreaLight}
      />
    </>
  );
};

export default CommonViewer;