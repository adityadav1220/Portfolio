"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight, BrainCircuit, ChevronDown, Code2, Download, Layers3,
  Mail, Map, Menu, Moon, Network, Route, Search, Sparkles, Sun,
  Terminal, X, Zap,
} from "lucide-react";

const projects = [
  {
    id: "01", title: "Catalyst Map", eyebrow: "AI event research platform",
    description: "A research workspace that maps catalyst-driven market impacts with structured, dependable AI output.",
    detail: "Built a server-side LLM pipeline with schema validation, typed errors, deterministic fallbacks, and Vitest coverage for malformed outputs and provider failures.",
    tags: ["Next.js", "TypeScript", "Groq", "Vitest"],
    live: "https://catalyst-map.vercel.app/", github: "https://github.com/adityadav1220/catalyst-map", icon: Sparkles,
    gradient: "from-[#7c3aed] to-[#22d3ee]",
  },
  {
    id: "02", title: "MorphArc", eyebrow: "Gesture-controlled 3D interaction",
    description: "Real-time hand gestures translated into smooth, intuitive control of a 3D environment.",
    detail: "Engineered normalization, hysteresis, EMA smoothing, backpressure, and damping across a MediaPipe and Web Worker gesture pipeline, validated with 66 automated tests.",
    tags: ["React", "MediaPipe", "Three.js", "Web Workers"],
    live: "https://morpharc.vercel.app/", github: "https://github.com/adityadav1220/MorphArc", icon: Layers3,
    gradient: "from-[#f97316] to-[#facc15]",
  },
  {
    id: "03", title: "RunRoute", eyebrow: "Intelligent running route planner",
    description: "A geospatial planner that turns run preferences and a chosen start into interactive route candidates.",
    detail: "Designed deterministic route generation, typed geospatial state, and a responsive WebGL map lifecycle with configurable distance and route preferences.",
    tags: ["Next.js", "Mapbox GL", "TypeScript", "WebGL"],
    live: "https://runroute-kappa.vercel.app/", github: "https://github.com/adityadav1220/RunRoute", icon: Route,
    gradient: "from-[#10b981] to-[#22d3ee]",
  },
];

const skills = [
  { group: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "LangChain", "RAG", "FAISS", "MLflow"] },
  { group: "Backend", items: ["Python", "FastAPI", "Node.js", "Spring Boot", "REST APIs", "GraphQL", "PostgreSQL", "Redis", "MongoDB"] },
  { group: "Product", items: ["React", "Next.js", "TypeScript", "JavaScript", "Three.js", "Mapbox GL", "Tailwind CSS", "Power BI"] },
  { group: "Cloud / MLOps", items: ["AWS", "ECS Fargate", "Lambda", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Airflow", "CloudWatch"] },
];

const experience = [
  {
    company: "Atlassian", role: "AI/ML Engineer", period: "Oct 2025 — Jul 2026", place: "USA",
    summary: "Built and improved AI-powered workflow automation across enterprise collaboration products.",
    impact: ["500K+ records processed weekly", "25% stronger semantic-search relevance", "35% faster vector lookup", "15K+ daily API requests"],
    tech: "Python · FastAPI · Hugging Face · LangChain · FAISS · AWS · Docker",
  },
  {
    company: "Zoho", role: "Software Engineer", period: "Apr 2022 — Aug 2024", place: "India",
    summary: "Shipped scalable automation, data pipelines, and AI-enabled backend features for SaaS products.",
    impact: ["1M+ records processed", "32% workflow-efficiency gain", "40% less manual effort", "27% faster API response"],
    tech: "Python · FastAPI · PostgreSQL · Redis · REST APIs · ML integrations",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>("01");
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const filteredSkills = useMemo(() => skills.map((group) => ({
    ...group,
    items: group.items.filter((skill) => skill.toLowerCase().includes(query.toLowerCase())),
  })).filter((group) => group.items.length), [query]);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Aditya Yadav, home">AY<span>.</span></a>
        <div className={`nav-links ${menu ? "open" : ""}`}>
          {[["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["About", "#about"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenu(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="mailto:AYadav25@stevens.edu">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            {menu ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <div className="availability"><span /> Open to AI/ML &amp; software engineering roles</div>
          <h1>I build AI systems<br />that survive <em>production.</em></h1>
          <p className="hero-lede">AI/ML engineer with 3 years of experience turning models into reliable products—from retrieval pipelines and real-time inference APIs to data-intensive backend systems.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button secondary" href="/Aditya-Yadav-Resume.pdf" download>Résumé <Download size={16} /></a>
          </div>
          <div className="social-row">
            <a href="https://github.com/adityadav1220" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/adityadav8182" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn</a>
            <a href="mailto:AYadav25@stevens.edu"><Mail size={17} /> Email</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI systems profile visualization">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="system-card terminal-card">
            <div className="terminal-head"><span /><span /><span /><b>production_ai.py</b></div>
            <code><i>01</i> model = build_pipeline()<br /><i>02</i> api = FastAPI()<br /><i>03</i> deploy(model, scale=<strong>&quot;real&quot;</strong>)<br /><i>04</i> monitor(latency, drift)</code>
          </div>
          <div className="metric-card metric-a"><strong>500K+</strong><span>records / week</span></div>
          <div className="metric-card metric-b"><strong>15K+</strong><span>API calls / day</span></div>
          <div className="core"><BrainCircuit size={42} /><span>AI × Systems</span></div>
        </div>
      </section>

      <section className="impact-strip" aria-label="Selected impact">
        {[["3", "years building AI & software"], ["1M+", "records across pipelines"], ["35%", "faster vector retrieval"], ["66", "tests for real-time gestures"]].map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section id="work" className="section-wrap content-section">
        <SectionLabel>Selected work</SectionLabel>
        <div className="section-heading"><h2>Projects built beyond<br />the happy path.</h2><p>Each project pairs ambitious interaction with careful engineering: typed contracts, fallbacks, deterministic behavior, and tests.</p></div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon; const isOpen = openProject === project.id;
            return (
              <article className={`project-card ${isOpen ? "expanded" : ""}`} key={project.id}>
                <button className="project-main" onClick={() => setOpenProject(isOpen ? null : project.id)} aria-expanded={isOpen}>
                  <div className={`project-art bg-gradient-to-br ${project.gradient}`}>
                    <div className="art-grid" /><Icon size={52} /><span>{project.id}</span>
                  </div>
                  <div className="project-copy">
                    <span className="eyebrow">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.description}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <ChevronDown className="project-chevron" size={22} />
                </button>
                <div className="project-detail"><p>{project.detail}</p><div><a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a><a href={project.github} target="_blank" rel="noreferrer"><Code2 size={15} /> Source</a></div></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="section-wrap content-section">
        <SectionLabel>Experience</SectionLabel>
        <div className="section-heading"><h2>Shipping at enterprise<br />scale.</h2><p>Production-focused experience spanning machine learning, backend engineering, cloud deployment, and operational automation.</p></div>
        <div className="timeline">
          {experience.map((job, index) => (
            <article className="timeline-row" key={job.company}>
              <div className="timeline-index">0{index + 1}</div>
              <div className="timeline-role"><h3>{job.role}</h3><p>{job.company} · {job.place}</p><span>{job.period}</span></div>
              <div className="timeline-body"><p>{job.summary}</p><div className="impact-grid">{job.impact.map((item) => <span key={item}>{item}</span>)}</div><small>{job.tech}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-wrap content-section">
        <SectionLabel>Technical toolkit</SectionLabel>
        <div className="skills-head"><div><h2>Built across the stack.</h2><p>Search the tools I use to move from prototype to monitored production system.</p></div><label className="skill-search"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find a skill" aria-label="Find a skill" />{query && <button onClick={() => setQuery("")} aria-label="Clear skill search"><X size={15} /></button>}</label></div>
        <div className="skills-grid">
          {filteredSkills.map((group) => <div className="skill-group" key={group.group}><h3>{group.group}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
          {!filteredSkills.length && <div className="no-results">No match yet. Try Python, AWS, React, or RAG.</div>}
        </div>
      </section>

      <section id="about" className="section-wrap about-section">
        <div className="about-card">
          <SectionLabel>About</SectionLabel><h2>Curious about models.<br />Serious about systems.</h2>
          <p>I enjoy the engineering work between a promising ML prototype and a dependable product: data preparation, API design, validation, performance, deployment, and monitoring. I completed my M.S. in Computer Science at Stevens Institute of Technology in May 2026.</p>
          <div className="about-notes"><span><Terminal size={18} /> Python-first builder</span><span><Zap size={18} /> Product-minded</span><span><Map size={18} /> Based in the U.S.</span></div>
        </div>
        <div className="contact-card"><span className="eyebrow">Next conversation</span><h2>Have an ambitious AI problem?</h2><p>I’m interested in teams building useful AI products with real technical depth.</p><a href="mailto:AYadav25@stevens.edu">Start a conversation <ArrowUpRight size={18} /></a></div>
      </section>

      <footer className="section-wrap"><a className="monogram" href="#top">AY<span>.</span></a><p>Designed and engineered by Aditya Yadav.</p><div><a href="tel:+16319740339">+1 (631) 974-0339</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
