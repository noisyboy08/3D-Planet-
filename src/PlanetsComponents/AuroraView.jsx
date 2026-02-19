import React, { useEffect, useMemo, useState, useRef } from "react";
import * as THREE from "three";
import { mm, mn, md, ma } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const AuroraView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());
  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => { sphere.current.visible = false; }, []);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () { setIsLoading(false); sphere.current.visible = true; };

  const texture = useMemo(() => new THREE.TextureLoader(manager).load(mm), []);
  const normal = useMemo(() => new THREE.TextureLoader(manager).load(mn), []);
  const displacement = useMemo(() => new THREE.TextureLoader(manager).load(md), []);
  const aomap = useMemo(() => new THREE.TextureLoader(manager).load(ma), []);

  return (
    <>
      <CommonViewer sparkle={"#4cc9f0"} rectAreaLight={"#caf0f8"} />
      <pointLight position={[3, -1, 3]} intensity={5} color={"#00b4d8"} />
      <PlanetLoader isLoading={isLoading} />
      <mesh scale={scalingFactor * 4} position={[0, scalingFactor * 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} normalMap={normal} normalScale={3} displacementMap={displacement} displacementScale={0.05} aoMap={aomap} aoMapIntensity={1.5} roughness={0} />
      </mesh>
      {/* Atmospheric glow */}
      <mesh scale={scalingFactor * 4.18} position={[0, scalingFactor * 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#4cc9f0"} transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default AuroraView;