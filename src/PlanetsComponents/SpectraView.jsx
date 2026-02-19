import React, { useMemo, useEffect, useState, useRef } from "react";
import CommonViewer from "../components/CommonViewer";
import { sa, sd, sm, sn, sr } from "../utils";
import * as THREE from "three";
import PlanetLoader from "../components/PlanetLoader";

const SpectraView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());
  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => { sphere.current.visible = false; }, []);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () { setIsLoading(false); sphere.current.visible = true; };

  const texture = useMemo(() => new THREE.TextureLoader(manager).load(sm), []);
  const normal = useMemo(() => new THREE.TextureLoader(manager).load(sn), []);
  const displacement = useMemo(() => new THREE.TextureLoader(manager).load(sd), []);
  const aomap = useMemo(() => new THREE.TextureLoader(manager).load(sa), []);
  const roughness = useMemo(() => new THREE.TextureLoader(manager).load(sr), []);

  return (
    <>
      <CommonViewer sparkle={"#ff7b00"} rectAreaLight={"#ffffff"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#ff0a54"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#e01e37"} />
      <PlanetLoader isLoading={isLoading} />
      <mesh scale={scalingFactor * 4} position={[0, scalingFactor * 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} normalMap={normal} normalScale={[1,1]} aoMap={aomap} aoMapIntensity={0.9} roughnessMap={roughness} roughness={0} />
      </mesh>
      <mesh scale={scalingFactor * 4.18} position={[0, scalingFactor * 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#ff0a54"} transparent opacity={0.09} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default SpectraView;