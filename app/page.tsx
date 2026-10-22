import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Check, ChevronDown, Code2, Download, Network, Mail } from "lucide-react";
import Atmosphere from "./components/atmosphere";
import Navigation from "./components/navigation";
import MotionToggle from "./components/motion-toggle";

const experience = [
  {
    company: "Atlassian", role: "AI/ML Engineer", period: "Jun 2025 — Present", location: "United States · Current role", className: "atlassian",
    headline: "Intelligence, at enterprise scale.",
    description: "Built and improved AI-powered workflow automation across enterprise collaboration products, connecting retrieval, machine learning, and dependable backend services.",
    metrics: [["500K+", "records processed weekly"], ["35%", "faster vector lookup"], ["10K+", "enterprise users supported"], ["15K+", "daily API requests"]],
    focus: ["Improved semantic search relevance by 25% through NLP and FAISS index optimization.", "Deployed and monitored 5+ AI microservices on AWS, improving reliability and throughput by 20%.", "Automated reporting and monitoring to reduce manual effort by 30%."],
    tools: "Python · FastAPI · Hugging Face · LangChain · FAISS · AWS · Docker",
  },
  {
    company: "Zoho", role: "Software Engineer", period: "Aug 2022 — Aug 2024", location: "India", className: "zoho",
    headline: "Better workflows. Less friction.",
    description: "Shipped automation, data pipelines, and AI-enabled backend features for SaaS products, improving the systems people rely on in their everyday work.",
    metrics: [["1M+", "records processed"], ["32%", "workflow-efficiency gain"], ["40%", "less manual effort"], ["27%", "faster API response"]],
    focus: ["Built scheduled Airflow pipelines for CRM products serving 100K+ active users.", "Shipped versioned PostgreSQL migrations with zero downtime in a multi-tenant environment.", "Improved API performance through query optimization and Redis caching; mentored 2 junior engineers."],
    tools: "Python · FastAPI · PostgreSQL · Redis · REST APIs · ML integrations",
  },
];

const projects = [
  {
    title: "MorphArc", category: "COMPUTER VISION / INTERACTION", art: "morph", index: "01", signal: "VISION → MOTION",
    headline: "Your hands become the interface.",
    description: "Real-time hand gestures translated into smooth, intuitive control of a 3D environment.",
    decisions: ["Normalized landmarks and gesture hysteresis for stable input.", "EMA smoothing and damping to make movement feel natural.", "Web Worker backpressure and 66 automated tests for the gesture pipeline."],
    stack: ["React", "MediaPipe", "Three.js", "Web Workers"], live: "https://morpharc.vercel.app/", source: "https://github.com/adityadav1220/MorphArc",
  },
  {
    title: "Catalyst Map", category: "APPLIED AI / RESEARCH", art: "catalyst", index: "02", signal: "EVENT → INSIGHT",
    headline: "Follow the event. Trace the impact.",
    description: "An AI research workspace that maps catalyst-driven market impacts with structured output.",
    decisions: ["Server-side LLM pipeline with schema-validated output.", "Typed errors and deterministic fallbacks when providers fail.", "Vitest coverage for malformed responses and failure paths."],
    stack: ["Next.js", "TypeScript", "Groq", "Vitest"], live: "https://catalyst-map.vercel.app/", source: "https://github.com/adityadav1220/catalyst-map",
  },
  {
    title: "RunRoute", category: "GEOSPATIAL / PRODUCT", art: "route", index: "03", signal: "PREFERENCE → PATH",
    headline: "A better run starts with a route.",
    description: "An interactive geospatial planner that turns a starting point and running preferences into route candidates.",
    decisions: ["Deterministic route generation from distance and preferences.", "Typed geospatial state for predictable map interactions.", "Graph-based pathfinding over map segments to create realistic running loops."],
    stack: ["Next.js", "Mapbox GL", "TypeScript", "WebGL"], live: "https://runroute-kappa.vercel.app/", source: "https://github.com/adityadav1220/RunRoute",
  },
];

const toolkit = [
  { title: "Intelligence", label: "MODELS & RETRIEVAL", tools: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "RAG", "FAISS", "MLflow"] },
  { title: "Systems", label: "BACKEND & DATA", tools: ["Python", "Java", "C#", "Go", "C/C++", "SQL", "FastAPI", "Spring Boot", "Node.js", "PostgreSQL", "Redis", "MongoDB", "ClickHouse", "REST", "GraphQL"] },
  { title: "Experience", label: "PRODUCT & INTERACTION", tools: ["React", "Next.js", "TypeScript", "Three.js", "MediaPipe", "Mapbox GL", "Tailwind CSS"] },
  { title: "Delivery", label: "CLOUD & OPERATIONS", tools: ["AWS", "ECS Fargate", "Lambda", "Docker", "Kubernetes", "GitHub Actions", "Airflow", "CloudWatch"] },
];

function Label({ index, children }: { index: string; children: React.ReactNode }) {
  return <span className="section-label"><span>{index}</span><i />{children}</span>;
}

function ProjectArt({ type, index, signal }: { type: string; index: string; signal: string }) {
  return <div className={`project-art art-${type}`} aria-hidden="true">
    <span className="art-index">{index}</span><div className="art-grid" />
    {type === "morph" && <div className="morph-cage"><i /><i /><i /><i /><i /><i /></div>}
    {type === "catalyst" && <div className="catalyst-system"><i /><i /><i /><i /><b /><b /><b /></div>}
    {type === "route" && <div className="route-system"><i /><i /><i /><b /></div>}
    <span className="art-caption">{signal}</span><div className="art-glow" />
  </div>;
}

export default function Home() {
  return (
    <div id="portfolio" data-glow-intensity="0.7">
      <a className="skip-link" href="#experience">Skip to experience</a>
      <Atmosphere />
      <Navigation />
      <main>
        <section id="top" className="hero section-width" aria-labelledby="hero-title">
          <div className="hero-role"><span />AI / ML ENGINEER &amp; SOFTWARE BUILDER</div>
          <h1 id="hero-title"><span>ADITYA</span><span>YADAV<span className="period">.</span></span></h1>
          <p className="hero-intro">I turn complex ideas into<br />systems you can <em>actually use.</em></p>
          <div className="hero-actions"><a className="button-primary" href="#experience">Explore my experience <ArrowDownRight size={18} /></a><a className="text-link" href="mailto:adityadav1220@gmail.com">Get in touch <ArrowUpRight size={15} /></a></div>
          <div className="hero-proof"><span>EXPERIENCE AT</span><a href="#atlassian">Atlassian</a><i /><a href="#zoho">Zoho</a></div>
          <div className="hero-footer"><span>BASED IN SUNNYVALE, CALIFORNIA</span><a href="#experience" aria-label="Scroll to professional experience"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a></div>
          <span className="hero-side" aria-hidden="true">CURIOSITY / PRECISION / IMPACT</span>
        </section>

        <section id="experience" className="experience section-width content-section" aria-labelledby="experience-title">
          <div className="section-heading"><div><Label index="01">PROFESSIONAL EXPERIENCE</Label><h2 id="experience-title">Built for the <em>real world.</em></h2></div><p>Work that reached beyond the prototype.<br />AI, backend systems, and enterprise products.</p></div>
          <div className="experience-list">
            {experience.map((job, index) => <article className={`experience-card depth-panel ${job.className}`} id={job.className} key={job.company}>
              <div className="panel-shine" aria-hidden="true" />
              <div className="experience-identity"><span className="job-index">0{index + 1} / EXPERIENCE</span><div className="company-lockup"><span className="company-symbol" aria-hidden="true">{job.company === "Atlassian" ? <><i /><i /></> : <><i>Z</i><i>O</i><i>H</i><i>O</i></>}</span><h3>{job.company}</h3></div><p className="job-role">{job.role}</p><p className="job-period">{job.period}<br /><span>{job.location}</span></p><div className="experience-lines" aria-hidden="true"><i /><i /><i /><i /></div></div>
              <div className="experience-content"><h4>{job.headline}</h4><p>{job.description}</p><dl className="job-metrics">{job.metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className="job-focus">{job.focus.map(focus => <span key={focus}><Check size={13} />{focus}</span>)}</div><p className="job-tools">{job.tools}</p></div>
            </article>)}
          </div>
        </section>

        <section id="work" className="projects section-width content-section" aria-labelledby="projects-title">
          <div className="section-heading"><div><Label index="02">SELECTED PROJECTS</Label><h2 id="projects-title">Ideas, <em>made real.</em></h2></div><a className="text-link" href="https://github.com/adityadav1220" target="_blank" rel="noopener noreferrer"><Code2 size={16} />Explore GitHub <ArrowUpRight size={15} /></a></div>
          <div className="project-grid">{projects.map(project => <article className="project-card depth-panel" key={project.title}>
            <div className="panel-shine" aria-hidden="true" />
            <a className="project-preview" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project`}><ProjectArt type={project.art} index={project.index} signal={project.signal} /><span className="preview-link">Open live project <ArrowUpRight size={14} /></span></a>
            <div className="project-content"><p className="project-category">{project.category}</p><h3><a href={project.live} target="_blank" rel="noopener noreferrer">{project.title}<ArrowUpRight size={20} /></a></h3><h4>{project.headline}</h4><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><details className="engineering-notes"><summary>Inside the engineering <ChevronDown size={15} /></summary><ul>{project.decisions.map(decision => <li key={decision}>{decision}</li>)}</ul></details></div>
            <div className="project-links"><a href={project.live} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={14} /></a><a href={project.source} target="_blank" rel="noopener noreferrer"><Code2 size={14} />Source</a></div>
          </article>)}</div>
        </section>

        <section id="toolkit" className="toolkit section-width content-section" aria-labelledby="toolkit-title">
          <div className="section-heading"><div><Label index="03">TECHNICAL TOOLKIT</Label><h2 id="toolkit-title">From model <em>to product.</em></h2></div><p>The tools behind the work.<br />Across intelligence, systems, and delivery.</p></div>
          <div className="toolkit-grid">{toolkit.map((group, i) => <div className="toolkit-group" key={group.title}><span className="toolkit-label">0{i + 1} / {group.label}</span><h3>{group.title}</h3><div>{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>)}</div>
        </section>

        <section id="about" className="about section-width content-section" aria-labelledby="about-title">
          <div className="about-image"><div className="portrait-frame"><Image src="/images/profile.png" alt="Aditya Yadav" width={290} height={331} sizes="(max-width: 700px) 220px, 290px" /><span aria-hidden="true" /></div><div className="portrait-caption"><span>ADITYA YADAV</span><span>THE PERSON BEHIND THE CODE</span></div></div>
          <div className="about-copy"><Label index="04">A LITTLE MORE HUMAN</Label><h2 id="about-title">Engineer by craft.<br /><em>Curious by nature.</em></h2><p>I enjoy the work between a promising ML prototype and a product people can depend on: preparing data, shaping APIs, improving performance, and getting the details right.</p><p>I completed my M.S. in Computer Science at Stevens Institute of Technology in May 2026. I currently work in AI/ML engineering at Atlassian, following two years in software engineering at Zoho.</p><div className="credentials"><span>AWS Certified ML Engineer — Associate</span><span>TensorFlow Developer Professional Certificate</span></div><div className="off-clock"><span>WHEN THE LAPTOP CLOSES</span><p>Anime. Marvel. Movies, sitcoms, and games. I love worlds built with care—especially the atmosphere of <em>The Dark Knight Rises</em>. That love of detail found its way into this site, too.</p></div></div>
        </section>

        <section id="contact" className="contact section-width" aria-labelledby="contact-title"><div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div><Label index="05">WHAT COMES NEXT</Label><h2 id="contact-title">Let&apos;s build<br /><em>something that matters.</em></h2><p>Open to AI/ML and software engineering roles.<br />If the work sounds like a fit, I&apos;d love to hear from you.</p><div className="contact-actions"><a className="button-primary" href="mailto:adityadav1220@gmail.com"><Mail size={17} />Say hello <ArrowUpRight size={18} /></a><a className="button-outline" href="/Aditya-Yadav-Resume.pdf" download><Download size={16} />Download résumé</a></div><a className="email-address" href="mailto:adityadav1220@gmail.com">adityadav1220@gmail.com</a></section>
      </main>
      <footer className="site-footer section-width"><a className="footer-name" href="#top">ADITYA YADAV<span>.</span></a><div className="footer-socials"><a href="https://github.com/adityadav1220" target="_blank" rel="noopener noreferrer" aria-label="Aditya Yadav on GitHub"><Code2 size={16} /></a><a href="https://www.linkedin.com/in/adityadav8182" target="_blank" rel="noopener noreferrer" aria-label="Aditya Yadav on LinkedIn"><Network size={16} /></a><a href="mailto:adityadav1220@gmail.com" aria-label="Email Aditya Yadav"><Mail size={16} /></a></div><MotionToggle /><a className="back-top" href="#top">Back to top <ArrowUpRight size={13} /></a></footer>
    </div>
  );
}
