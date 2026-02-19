import React from "react";
import Button from "../components/Button";

const HeroOverLay = ({ titleRef, subtitleRef, btnRef }) => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center pt-8 md:pt-0">
      <p className="font-orbiton text-center tracking-[0.5rem] md:tracking-[1rem] text-sm md:text-lg mt-16 md:mt-24 mb-4 md:mb-8" style={{ color: "rgba(224,251,252,0.6)" }}>
        PLANET
      </p>
      <h1 ref={titleRef} className="earth-title text-center" style={{ willChange: "transform" }}>
        Earth
      </h1>
      <div className="underline-div-div mx-auto mt-3"></div>
      <p ref={subtitleRef} className="sub-text text-sm md:text-lg mt-6 md:mt-10 tracking-wide text-center px-6 max-w-md" style={{ willChange: "transform" }}>
        Earth: A vibrant planet rich in life and natural beauty. Our home.
      </p>
      <div ref={btnRef} style={{ willChange: "transform" }}>
        <Button text="LEARN MORE" />
      </div>
    </div>
  );
};

export default HeroOverLay;