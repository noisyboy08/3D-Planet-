import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backImg } from "../utils";

const Nav = ({ border, isBack }) => {
  const navigate = useNavigate();
  const handleHome = () => navigate("/");
  const handlePlanet = () => navigate("/planets");
  const handleBack = () => navigate("/planets");

  return (
    <nav className={"flex justify-between items-center py-4 md:py-7 relative z-50 nav-glass px-4 md:px-6 rounded-2xl my-2 " + (border ? "border-b" : "border-0")}>
      {isBack ? (
        <div className="flex items-center gap-2">
          <img src={backImg} alt="back arrow" className="w-5 h-5" />
          <p className={"sub-text text-sm md:text-base transition-all " + (isBack ? "nav-hover-text-isBack" : "nav-hover-text-notBack")} onClick={handleBack}>
            Back
          </p>
        </div>
      ) : (
        <h1 className="font-orbiton font-semibold text-base md:text-xl tracking-widest" style={{ color: "#e0fbfc" }}>
          SpaceSystem
        </h1>
      )}
      <div className="flex gap-6 md:gap-10">
        <p className={"nav-text " + (isBack ? "nav-hover-text-isBack" : "nav-hover-text-notBack")} onClick={handleHome}>Home</p>
        <p className={"nav-text " + (isBack ? "nav-hover-text-isBack" : "nav-hover-text-notBack")} onClick={handlePlanet}>Planets</p>
      </div>
    </nav>
  );
};

export default Nav;