import React from "react";
import Nav from "../components/Nav";
import CardsContainer from "../components/CardsContainer";

const PlanetLists = () => {
  return (
    <div className="bg-planet-card-bg bg-cover bg-no-repeat px-4 sm:px-8 md:px-20 pb-16 md:pb-20 overflow-hidden min-h-screen">
      <Nav border={true} isBack={false} />
      <h1 className="text-center font-orbiton text-2xl md:text-4xl font-bold mt-8 mb-2 tracking-wider">
        ALL PLANETS
      </h1>
      <p className="text-center sub-text text-sm md:text-base mb-4">
        Explore the planets of the Enigma Galaxy
      </p>
      <CardsContainer restrict={false} />
    </div>
  );
};

export default PlanetLists;