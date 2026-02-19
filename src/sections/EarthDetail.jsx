import React from "react";

const EarthDetail = () => {
  return (
    <div className="w-full lg:w-[35vw] px-2">
      <p className="font-orbiton tracking-wide text-sm md:text-lg" style={{ color: "rgba(224,251,252,0.6)" }}>PLANET</p>
      <h1 className="earth-title mt-1">Earth</h1>
      <div className="underline-div mt-3"></div>
      <p className="sub-text text-sm md:text-lg mb-4 mt-6 md:mt-10 tracking-wide leading-relaxed">
        Earth, our home planet, has a diameter of about 12,742 KM. It completes
        one orbit around the Sun in approximately 365.25 days and rotates about
        its axis every 24 hours.
      </p>
      <p className="sub-text text-sm md:text-lg mb-4 tracking-wide leading-relaxed">
        The atmosphere, mainly composed of nitrogen and oxygen, sustains life,
        while iconic features like Mount Everest and the Pacific Ocean add to
        its natural beauty.
      </p>
    </div>
  );
};

export default EarthDetail;