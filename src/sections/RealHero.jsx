import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Nav from "../components/Nav";
import HeroOverLay from "./HeroOverLay";
import EarthDetail from "./EarthDetail";
import EarthView from "../PlanetsComponents/EarthView";
import CardsContainer from "../components/CardsContainer";
import EarthInfo from "../components/EarthInfo";

const RealHero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    gsap.to(".view", {
      scrollTrigger: { trigger: ".detail", scrub: 0.2, start: "-50% center", end: "bottom bottom" },
      top: isMobile ? "130%" : "110%",
      left: isMobile ? "0%" : "45%",
      transform: "translateX(0%)",
      duration: 5,
      ease: "power1.out",
      immediateRender: false,
    });
    gsap.to(".view", {
      scrollTrigger: { trigger: ".info", scrub: 0.2, start: "-50% center", end: "bottom 110%" },
      top: isMobile ? "225%" : "205%",
      left: isMobile ? "0%" : "5%",
      transform: "translateX(0%)",
      duration: 10,
      ease: "power1.in",
      immediateRender: false,
    }, "<");

    // Parallax — desktop only to avoid scroll jank on mobile
    if (!isMobile) {
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          scrollTrigger: { trigger: titleRef.current, scrub: 0.5, start: "top 80%", end: "bottom top" },
          y: -60, ease: "none",
        });
      }
      if (subtitleRef.current) {
        gsap.to(subtitleRef.current, {
          scrollTrigger: { trigger: subtitleRef.current, scrub: 0.5, start: "top 80%", end: "bottom top" },
          y: -30, ease: "none",
        });
      }
      if (btnRef.current) {
        gsap.to(btnRef.current, {
          scrollTrigger: { trigger: btnRef.current, scrub: 0.5, start: "top 80%", end: "bottom top" },
          y: -15, ease: "none",
        });
      }
    }
  }, []);

  return (
    <div className="w-screen px-4 sm:px-8 lg:px-20">
      <Nav border={true} isBack={false} />
      <Canvas
        className="w-screen h-screen z-50"
        style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, overflow: "hidden" }}
        eventSource={document.getElementById("root")}
      >
        <View.Port />
      </Canvas>
      <EarthView view={"view"} />
      <HeroOverLay titleRef={titleRef} subtitleRef={subtitleRef} btnRef={btnRef} />
      <div className="min-h-screen relative flex justify-start items-center detail px-2">
        <EarthDetail />
      </div>
      <div className="md:min-h-screen h-full relative flex justify-end items-center info px-2">
        <EarthInfo />
      </div>
      <div className="my-16 md:my-32">
        <h1 className="text-base sm:text-2xl md:text-5xl font-extrabold text-center font-orbiton tracking-wider px-4">
          EXPLORE OTHER PLANETS
        </h1>
        <CardsContainer restrict={true} />
      </div>
      <div>
        <Nav border={false} isBack={false} />
      </div>
    </div>
  );
};

export default RealHero;