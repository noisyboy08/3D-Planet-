import React from "react";
import { earthInfo } from "../constants";

const EarthInfo = () => {
  return (
    <div className="w-full lg:w-[40vw] px-4">
      <div className="flex justify-center gap-8 md:gap-16 my-10 md:my-20 flex-wrap">
        {earthInfo.map((info) => (
          <div className="info-text" key={info.id}>
            <p className="info-sub-text text-center">{info.title}</p>
            <p className="info-number text-center">{info.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarthInfo;