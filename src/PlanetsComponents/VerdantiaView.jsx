import React, { useMemo, useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { la, ld, lm, ln } from "../utils";
import CommonViewer from "../components/CommonViewer";
import PlanetLoader from "../components/PlanetLoader";

const VerdantiaView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());
  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => { sphere.current.visible = false; }, []);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () { setIsLoading(false); sphere.current.visible = true; };

  const texture = useMemo(() => new THREE.TextureLoader(manager).load(lm), []);
  const normal = useMemo(() => new THREE.TextureLoader(manager).load(ln), []);
  const displacement = useMemo(() => new THREE.TextureLoader(manager).load(ld), []);
  const aomap = useMemo(() => new THREE.TextureLoader(manager).load(la), []);

  return (
    <>
      <CommonViewer sparkle={"#ffd60a"} rectAreaLight={"#ffd60a"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#fdc500"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#ff7b00"} />
      <PlanetLoader isLoading={isLoading} />
      <mesh scale={scalingFactor * 4} position={[0, scalingFactor * 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} normalMap={normal} normalScale={[1,1]} aoMap={aomap} aoMapIntensity={0.9} roughness={1} />
      </mesh>
      <mesh scale={scalingFactor * 4.18} position={[0, scalingFactor * 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#ffd60a"} transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default VerdantiaView;