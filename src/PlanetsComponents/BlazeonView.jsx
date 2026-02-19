import * as THREE from "three";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { fa, fd, fm, fn } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const BlazeonView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());
  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => { sphere.current.visible = false; }, []);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () { setIsLoading(false); sphere.current.visible = true; };

  const texture = useMemo(() => new THREE.TextureLoader(manager).load(fm), []);
  const normal = useMemo(() => new THREE.TextureLoader(manager).load(fn), []);
  const displacement = useMemo(() => new THREE.TextureLoader(manager).load(fa), []);
  const aomap = useMemo(() => new THREE.TextureLoader(manager).load(fd), []);

  return (
    <>
      <CommonViewer sparkle={"#fff0f3"} rectAreaLight={"#fb6107"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#fff0f3"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#fff0f3"} />
      <PlanetLoader isLoading={isLoading} />
      <mesh scale={scalingFactor * 4} position={[0, scalingFactor * 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} normalMap={normal} normalScale={0.1} displacementMap={displacement} displacementScale={0.01} aoMap={aomap} aoMapIntensity={0.5} roughness={0} />
      </mesh>
      {/* Atmospheric glow */}
      <mesh scale={scalingFactor * 4.18} position={[0, scalingFactor * 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#fb6107"} transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default BlazeonView;