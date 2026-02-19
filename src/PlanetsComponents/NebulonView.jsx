import React, { useMemo, useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CommonViewer from "../components/CommonViewer";
import { ndm, ndn, ndd, nda, ndr } from "../utils";
import PlanetLoader from "../components/PlanetLoader";

const NebulonView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphere = useRef(new THREE.Mesh());
  const scalingFactor = Math.min(Math.max(window.innerWidth / 1200, 0.5), 1.01);

  useEffect(() => { sphere.current.visible = false; }, []);

  const manager = new THREE.LoadingManager();
  manager.onLoad = function () { setIsLoading(false); sphere.current.visible = true; };

  const texture = useMemo(() => new THREE.TextureLoader(manager).load(ndm), []);
  const normal = useMemo(() => new THREE.TextureLoader(manager).load(ndn), []);
  const displacement = useMemo(() => new THREE.TextureLoader(manager).load(ndd), []);
  const aomap = useMemo(() => new THREE.TextureLoader(manager).load(nda), []);
  const roughness = useMemo(() => new THREE.TextureLoader(manager).load(ndr), []);

  return (
    <>
      <CommonViewer sparkle={"#52b788"} rectAreaLight={"#52b69a"} />
      <pointLight position={[3, 0, 3]} intensity={5} color={"#d8f3dc"} />
      <pointLight position={[-3, -3, 3]} intensity={5} color={"#d8f3dc"} />
      <PlanetLoader isLoading={isLoading} />
      <mesh scale={scalingFactor * 4} position={[0, scalingFactor * 1.5, 0]} ref={sphere}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} normalMap={normal} normalScale={1} aoMap={displacement} aoMapIntensity={0.9} roughnessMap={roughness} roughness={0} />
      </mesh>
      <mesh scale={scalingFactor * 4.18} position={[0, scalingFactor * 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#52b788"} transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default NebulonView;