import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { fictionalPlanetCardLists } from "../constants";
import { arrowImg } from "../utils";
import SmallPlanetsViewer from "../PlanetsComponents/SmallPlanetsViewer";

const CardsContainer = ({ restrict }) => {
  const nav = useNavigate();
  const handleClick = useCallback((id) => { nav("/planets/" + id); }, [nav]);

  const [array, setArray] = useState([]);
  useEffect(() => {
    setArray(restrict ? fictionalPlanetCardLists.slice(0, 3) : fictionalPlanetCardLists);
  }, [restrict]);

  return (
    <div className="flex justify-center gap-8 md:gap-14 flex-wrap mt-16 md:mt-28 px-4">
      {array.map((list) => (
        <div className="planet-card-wrapper w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96" key={list.id}>
          <div className="relative h-full bg-rectangle-card-bg bg-no-repeat bg-center bg-contain">
            <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 absolute z-50 -top-10 -left-10 md:-top-14 md:-left-14">
              <Canvas>
                <SmallPlanetsViewer tex={list.map} />
              </Canvas>
            </div>
            <img
              src={arrowImg}
              alt="arrow"
              className="arrow"
              onClick={() => handleClick(list.id)}
            />
            <div className="flex flex-col h-full justify-end">
              <p className="text-center font-orbiton font-semibold text-xl md:text-3xl">{list.title}</p>
              <p className="text-center sub-text text-sm md:text-base mb-6 md:mb-10">{list.subtitle}</p>
              <div className="flex justify-center gap-6 md:gap-10 mb-16 md:mb-24">
                <span>
                  <p className="font-orbiton text-center text-sm md:text-base">{list.km}</p>
                  <p className="sub-text text-center text-xs md:text-sm">Radius</p>
                </span>
                <span>
                  <p className="font-orbiton text-center text-sm md:text-base">{list.g}</p>
                  <p className="sub-text text-center text-xs md:text-sm">Gravity</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;