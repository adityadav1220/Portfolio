"use client";
import { useEffect, useState } from "react";

export default function MotionToggle() {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-motion"); } catch { /* Optional storage. */ }
      const enabled = saved === null ? !media.matches : saved === "on";
      setMotion(enabled);
      document.documentElement.dataset.motion = enabled ? "on" : "off";
      window.dispatchEvent(new CustomEvent("portfolio-motion", { detail: enabled }));
    };
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  function toggle() {
    const enabled = !motion;
    setMotion(enabled);
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    try { localStorage.setItem("portfolio-motion", enabled ? "on" : "off"); } catch { /* Optional storage. */ }
    window.dispatchEvent(new CustomEvent("portfolio-motion", { detail: enabled }));
  }
  return <button className="motion-toggle" onClick={toggle} aria-pressed={motion}>Motion <span>{motion ? "on" : "off"}</span><i aria-hidden="true" /></button>;
}
