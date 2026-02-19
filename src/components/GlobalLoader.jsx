import React, { useEffect, useState } from "react";

const GlobalLoader = ({ onDone }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      if (onDone) onDone();
    }, 2300);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={"global-loader" + (hidden ? " hidden" : "")}>
      <div className="loader-planet-ring" />
      <p className="font-orbiton tracking-[0.35em] text-sm mt-8" style={{ color: "#4cc9f0" }}>
        LOADING UNIVERSE
      </p>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>
      <p className="mt-4 text-xs tracking-widest" style={{ color: "rgba(224,251,252,0.35)" }}>
        SPACE SYSTEM
      </p>
    </div>
  );
};

export default GlobalLoader;