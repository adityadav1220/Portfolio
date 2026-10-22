"use client";
import { useEffect, useRef } from "react";

const GLOW_INTENSITY = 0.7;

export default function Atmosphere() {
  const backdropRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = document.getElementById("portfolio"), backdrop = backdropRef.current, canvas = canvasRef.current, light = lightRef.current;
    if (!root || !backdrop || !canvas || !light) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const panels = Array.from(document.querySelectorAll<HTMLElement>(".depth-panel"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let motion = document.documentElement.dataset.motion !== "off" && !reduced.matches;
    let width = 1, height = 900, frame = 0, visible = true;
    const pointer = { x: .7, y: .22, targetX: .7, targetY: .22 };
    const fragments = [[.52,.1,7,-40,.9],[.83,.21,11,50,2],[.94,.5,6,40,.7],[.69,.46,4,80,1.7],[.88,.05,9,-30,.2],[.6,.36,4,90,2.4],[.78,.59,5,70,1.2]];
    const faces = [[0,2,3],[0,3,4],[0,4,5],[0,5,2],[1,3,2],[1,4,3],[1,5,4],[1,2,5]];
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const dx = motion ? pointer.x - .5 : .2, dy = motion ? pointer.y - .5 : -.28;
      fragments.forEach(([px, py, size, z, angle]) => {
        const x = px * width - dx * (80 - z * .3), y = py * height - dy * 35, turn = angle + dx * .25;
        const vertices = [[0,-size*1.6,0],[0,size*1.4,0],[-size,0,0],[0,0,size*.8],[size,0,0],[0,0,-size*.8]].map(([vx, vy, vz]) => {
          const rx = vx * Math.cos(turn) - vz * Math.sin(turn), rz = vx * Math.sin(turn) + vz * Math.cos(turn), perspective = 750 / (750 + z + rz);
          return [width * .5 + (x + rx - width * .5) * perspective, height * .44 + (y + vy - height * .44) * perspective, rz];
        });
        faces.map(indices => ({ indices, depth: indices.reduce((a, i) => a + vertices[i][2], 0) })).sort((a,b) => b.depth - a.depth).forEach(({indices}, i) => {
          const illumination = Math.max(0, 1 - Math.hypot(px - pointer.x, py - pointer.y) * 1.4), value = Math.round(10 + i * 3 + illumination * 22 * GLOW_INTENSITY);
          ctx.beginPath(); indices.forEach((index, j) => { const [vx, vy] = vertices[index]; if (j) ctx.lineTo(vx, vy); else ctx.moveTo(vx, vy); });
          ctx.closePath(); ctx.fillStyle = `rgb(${value-2},${value+2},${value+7})`; ctx.fill();
          ctx.strokeStyle = `rgba(171,197,216,${.025 + illumination * .1 * GLOW_INTENSITY})`; ctx.lineWidth = .6; ctx.stroke();
        });
      });
    }
    function render() {
      frame = 0; if (document.hidden) return;
      pointer.x += (pointer.targetX - pointer.x) * .11; pointer.y += (pointer.targetY - pointer.y) * .11;
      if (visible && backdrop) { backdrop.style.transform = motion ? `translate3d(${(pointer.x-.5)*-16}px,${(pointer.y-.5)*-10}px,0) scale(1.035)` : "scale(1.035)"; draw(); }
      if (motion && Math.abs(pointer.x-pointer.targetX)+Math.abs(pointer.y-pointer.targetY) > .001) frame = requestAnimationFrame(render);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(render); }
    function onPointer(event: PointerEvent) {
      if (event.pointerType === "touch" || !motion || !light) return;
      pointer.targetX = event.clientX / window.innerWidth; pointer.targetY = Math.min(1, Math.max(0, (event.clientY + window.scrollY) / height));
      light.style.setProperty("--cursor-x", `${event.clientX}px`); light.style.setProperty("--cursor-y", `${event.clientY}px`); light.style.opacity = String(GLOW_INTENSITY);
      panels.forEach(panel => {
        const rect = panel.getBoundingClientRect(); if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
        const x = (event.clientX - rect.left) / rect.width, y = (event.clientY - rect.top) / rect.height;
        panel.style.setProperty("--panel-x", `${x*100}%`); panel.style.setProperty("--panel-y", `${y*100}%`);
        const nearby = x > -.2 && x < 1.2 && y > -.2 && y < 1.2, maxTilt = panel.classList.contains("experience-card") ? 1.7 : 4;
        panel.style.transform = nearby ? `perspective(1400px) rotateX(${Math.max(-maxTilt,Math.min(maxTilt,(.5-y)*5))}deg) rotateY(${Math.max(-maxTilt,Math.min(maxTilt,(x-.5)*6))}deg)` : "none";
      }); schedule();
    }
    function resetPanels() { panels.forEach(panel => panel.style.transform = "none"); if (light) light.style.opacity = "0"; }
    function resize() {
      width = window.innerWidth; height = width < 700 ? 780 : 980; const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      if (!canvas || !ctx) return;
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio); canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0); schedule();
    }
    function onMotion(event: Event) { motion = (event as CustomEvent<boolean>).detail; if (!motion) resetPanels(); schedule(); }
    function updateProgress() { const max = document.documentElement.scrollHeight - window.innerHeight; root?.style.setProperty("--scroll-progress", String(max > 0 ? window.scrollY / max : 0)); resetPanels(); }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule(); }); observer.observe(backdrop);
    const onVisibility = () => { if (!document.hidden) schedule(); };
    window.addEventListener("pointermove", onPointer, { passive: true }); document.documentElement.addEventListener("pointerleave", resetPanels);
    window.addEventListener("resize", resize, { passive: true }); window.addEventListener("scroll", updateProgress, { passive: true }); window.addEventListener("portfolio-motion", onMotion); document.addEventListener("visibilitychange", onVisibility);
    resize(); updateProgress();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("pointermove", onPointer); window.removeEventListener("resize", resize); window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("portfolio-motion", onMotion); document.removeEventListener("visibilitychange", onVisibility); document.documentElement.removeEventListener("pointerleave", resetPanels); resetPanels();
    };
  }, []);
  return <><div className="atmosphere" aria-hidden="true"><div className="skyline" ref={backdropRef} /><div className="skyline-shade" /><canvas ref={canvasRef} className="fragments" /><div className="grain" /></div><div className="cursor-aura" ref={lightRef} aria-hidden="true" /><div className="reading-progress" aria-hidden="true" /></>;
}
