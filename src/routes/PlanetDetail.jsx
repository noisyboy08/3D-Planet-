import React from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Nav from "../components/Nav";
import { fictionalPlanetDetailsLists } from "../constants";
import Button from "../components/Button";
import ScrollToTop from "../components/ScrollToTop";
import AnimatedStat from "../components/AnimatedStat";

const PlanetDetail = () => {
  const { id } = useParams();
  const back = useNavigate();
  const isMobile = window.innerWidth < 768;

  const planet = fictionalPlanetDetailsLists.find((p) => p.id === Number(id));
  if (!planet) return <Navigate to="/planets" replace />;

  const { title, des, longDes, diameter, gravity, area, model: Model, color } = planet;

  return (
    <div className="w-screen min-h-screen px-4 sm:px-8 md:px-20" style={{ backgroundColor: color }}>
      <ScrollToTop />
      <Nav border={false} isBack={true} />
      <Canvas
        style={{
          width: "100%",
          height: isMobile ? "45vh" : "60vh",
          position: "relative",
          left: "50%",
          transform: "translate(-50%, -10%)",
        }}
      >
        <Model />
      </Canvas>
      <div className="flex flex-col items-center -translate-y-8 md:-translate-y-14 px-2">
        <h1 className="font-orbiton text-3xl sm:text-5xl md:text-8xl font-bold text-center">{title}</h1>
        <div className="underline-div mx-auto"></div>
        <p className="detail-sub-text mt-6 md:mt-10 px-2">{des}</p>
        <Button text="SCROLL DOWN" />
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 my-10 md:my-20">
          <AnimatedStat label="Diameters" value={diameter + " km"} />
          <AnimatedStat label="Gravity" value={gravity + " g"} />
          <AnimatedStat label="Surface Area" value={area + "M SM"} />
        </div>
        {longDes && longDes.map((paragraph, index) => (
          <p key={index} className="detail-sub-text mb-6 md:mb-8 px-2">{paragraph}</p>
        ))}
        <Button text="READ MORE" />
        <div className="w-full mt-16 md:mt-24">
          <Nav border={false} isBack={false} />
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;