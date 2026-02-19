import React, { useMemo, useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { ja, jd, jm, jn } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const ZephyrionView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());
  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => { sphere.current.visible = false; }, []);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () { setIsLoading(false); sphere.current.visible = true; };

  const texture = useMemo(() => new THREE.TextureLoader(manager).load(jm), []);
  const normal = useMemo(() => new THREE.TextureLoader(manager).load(jn), []);
  const displacement = useMemo(() => new THREE.TextureLoader(manager).load(jd), []);
  const aomap = useMemo(() => new THREE.TextureLoader(manager).load(ja), []);

  return (
    <>
      <CommonViewer sparkle={"#52b788"} rectAreaLight={"#52b69a"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />
      <PlanetLoader isLoading={isLoading} />
      <mesh scale={scalingFactor * 4} position={[0, scalingFactor * 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} normalMap={normal} normalScale={1} displacementMap={displacement} displacementScale={0.05} aoMap={aomap} aoMapIntensity={0.5} roughness={1} />
      </mesh>
      <mesh scale={scalingFactor * 4.18} position={[0, scalingFactor * 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#52b788"} transparent opacity={0.09} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default ZephyrionView;