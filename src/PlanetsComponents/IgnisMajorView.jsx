import React, { useMemo, useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CommonViewer from "../components/CommonViewer";
import { im, inn, idd, ia, ir } from "../utils";
import PlanetLoader from "../components/PlanetLoader";

const IgnisMajorView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());
  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => { sphere.current.visible = false; }, []);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () { setIsLoading(false); sphere.current.visible = true; };

  const texture = useMemo(() => new THREE.TextureLoader(manager).load(im), []);
  const normal = useMemo(() => new THREE.TextureLoader(manager).load(inn), []);
  const displacement = useMemo(() => new THREE.TextureLoader(manager).load(idd), []);
  const aomap = useMemo(() => new THREE.TextureLoader(manager).load(ia), []);
  const roughness = useMemo(() => new THREE.TextureLoader(manager).load(ir), []);

  return (
    <>
      <CommonViewer sparkle={"#ffffff"} rectAreaLight={"#edf2f4"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />
      <PlanetLoader isLoading={isLoading} />
      <mesh scale={scalingFactor * 4} position={[0, scalingFactor * 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} normalMap={normal} normalScale={0.5} aoMap={aomap} aoMapIntensity={0.5} displacementMap={displacement} displacementScale={0.05} roughnessMap={roughness} roughness={0.5} />
      </mesh>
      <mesh scale={scalingFactor * 4.18} position={[0, scalingFactor * 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#adb5bd"} transparent opacity={0.07} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default IgnisMajorView;