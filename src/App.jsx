import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReactLenis from "@studio-freight/react-lenis";
import Home from "./sections/Home";
import PlanetLists from "./routes/PlanetLists";
import PlanetDetail from "./routes/PlanetDetail";
import ScrollToTop from "./components/ScrollToTop";
import GlobalLoader from "./components/GlobalLoader";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <CustomCursor />
      <GlobalLoader onDone={() => setLoaderDone(true)} />
      <div
        style={{
          opacity: loaderDone ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <ReactLenis root>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<PlanetLists />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />
          </Routes>
        </ReactLenis>
      </div>
    </>
  );
};

export default App;