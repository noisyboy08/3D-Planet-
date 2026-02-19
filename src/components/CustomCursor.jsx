import React, { useEffect, useRef } from "react";

// Only show custom cursor on non-touch devices
const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (isTouchDevice()) return; // Skip on mobile/tablet touch screens

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      animId = requestAnimationFrame(animateRing);
    };

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, p, img, .arrow, .planet-card-wrapper").forEach((el) => {
        el.addEventListener("mouseenter", () => { dot.classList.add("hovering"); ring.classList.add("hovering"); });
        el.addEventListener("mouseleave", () => { dot.classList.remove("hovering"); ring.classList.remove("hovering"); });
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(animateRing);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  if (isTouchDevice()) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;