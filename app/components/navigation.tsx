"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header section-width"><a className="monogram" href="#top" aria-label="Aditya Yadav, home" onClick={() => setOpen(false)}><svg viewBox="0 0 88 54" fill="none" aria-hidden="true"><path d="M5 47 26 7 47 47M15 29h23M47 7l18 22L83 7M65 29v18" stroke="currentColor" strokeWidth="4" strokeLinejoin="miter" /></svg></a><nav className={open ? "nav-links is-open" : "nav-links"} id="main-navigation" aria-label="Primary navigation">{[["Experience", "#experience"], ["Projects", "#work"], ["About", "#about"]].map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-resume" href="/Aditya-Yadav-Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={14} /></a></nav><button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></header>;
}
