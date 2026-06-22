import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Menu, X, Download, ArrowRight, Github, Linkedin, Mail, Phone,
  MapPin, GraduationCap, Award, Trophy, Briefcase, Code2, Cloud,
  Database, Wrench, Brain, ExternalLink, Send, ChevronUp, Sparkles,
  Star, CheckCircle2, Layers, Cpu, FileCode2,
} from "lucide-react";

const PROFILE_IMAGE_URL = "/profile.jpg?v=srilaya";
const RESUME_URL = "https://drive.google.com/file/d/1zxTQVI8XeoVgPLV7HWX4qG5dpvjx4SLN/view?usp=drive_link";
const LINKEDIN_URL = "https://www.linkedin.com/in/srilayamaddukuri";
const GITHUB_URL = "https://github.com/Srilaya30";
const EMAIL = "srilayamaddukuri4321@gmail.com";
const PHONE_DISPLAY = "+91 8096987353";
const PHONE_HREF = "tel:+918096987353";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maddukuri Srilaya | Portfolio" },
      { name: "description", content: "Portfolio of Maddukuri Srilaya, a Computer Science (AI & ML) student, Java and Python developer, cloud enthusiast, and problem solver." },
      { name: "author", content: "Maddukuri Srilaya" },
      { property: "og:title", content: "Maddukuri Srilaya | Portfolio" },
      { property: "og:description", content: "Portfolio showcasing projects, skills, internships, certifications, and achievements by Maddukuri Srilaya." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  ["home", "Home"], ["about", "About"], ["education", "Education"],
  ["skills", "Skills"], ["experience", "Experience"], ["projects", "Projects"],
  ["certifications", "Certifications"], ["achievements", "Achievements"], ["contact", "Contact"],
] as const;

const ROLES = ["AI & ML Student", "Software Developer", "Java Developer", "Problem Solver", "Cloud Enthusiast"];

function Portfolio() {
  return (
    <div className="bg-app viewport-clip min-h-screen text-foreground">
      <BackgroundFX />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------- Background ambient FX ---------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 max-w-[100vw] overflow-hidden contain-paint">
      <div className="absolute -top-24 -left-24 h-[260px] w-[260px] rounded-full glow-ring animate-glow sm:-top-40 sm:-left-40 sm:h-[420px] sm:w-[420px]" />
      <div className="absolute top-1/3 -right-24 h-[300px] w-[300px] rounded-full glow-ring animate-glow sm:-right-40 sm:h-[520px] sm:w-[520px]" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 h-[240px] w-[240px] rounded-full glow-ring animate-glow sm:h-[360px] sm:w-[360px]" style={{ animationDelay: "3s" }} />
    </div>
  );
}

/* ---------- Navigation ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const [id] of NAV) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(id); break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${scrolled ? "" : ""}`}>
        <div className={`glass-strong glass flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl`}>
          <a href="#home" className="flex items-center gap-3 group">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl"
              style={{ background: "linear-gradient(135deg,#8B5CF6,#6366F1)", boxShadow: "0 0 24px rgba(139,92,246,.55)" }}>
              <span className="font-display font-extrabold text-white text-sm">MS</span>
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
            </span>
            <span className="hidden sm:block font-display font-bold tracking-tight">Srilaya<span className="text-gradient">.dev</span></span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${active === id ? "text-white" : "text-[#94A3B8] hover:text-white"}`}>
                {label}
                {active === id && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg,#8B5CF6,#06B6D4)" }} />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-primary rounded-full px-5 py-2.5 text-sm font-semibold">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
            <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass p-4 animate-fade-up">
            <div className="grid gap-1">
              {NAV.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#E2E8F0] hover:bg-white/5 hover:text-white">
                  {label}
                </a>
              ))}
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 btn-primary rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 glass px-4 py-1.5 text-xs font-medium text-[#c4b5fd]">
            <Sparkles className="h-3.5 w-3.5" /> Hello, I'm
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            MADDUKURI
            <br /><span className="text-gradient">SRILAYA</span>
          </h1>

          <div className="mt-5 h-9 flex items-center gap-2 text-lg sm:text-xl font-semibold">
            <span className="text-[#94A3B8]">I'm a</span>
            <span key={roleIdx} className="text-gradient animate-fade-up">{ROLES[roleIdx]}</span>
            <span className="ml-1 h-6 w-0.5 bg-[#8B5CF6] animate-glow" />
          </div>

          <p className="mt-6 max-w-xl text-[#94A3B8] leading-relaxed">
            Computer Science and Engineering (AI &amp; ML) student passionate about building intelligent software solutions,
            scalable applications, and innovative technology-driven products. Skilled in Java, Python, DSA, Cloud Computing,
            and Modern Web Development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="btn-outline inline-grid h-12 w-12 place-items-center rounded-full">
              <Github className="h-5 w-5" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="btn-outline inline-grid h-12 w-12 place-items-center rounded-full">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ["9.09", "CGPA"], ["3+", "Projects"], ["2", "Internships"], ["4+", "Certifications"],
            ].map(([n, l]) => (
              <div key={l} className="glass card-hover px-4 py-4 text-center">
                <div className="font-display text-2xl font-extrabold text-gradient">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[#94A3B8]">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden sm:h-[520px] animate-fade-up" style={{ animationDelay: ".15s" }}>
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[420px] sm:w-[420px]"
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(244,114,182,.55) 0%, rgba(139,92,246,.5) 42%, rgba(6,182,212,.28) 64%, transparent 78%)", filter: "blur(22px)", opacity: 0.9 }} />
          {/* Floating spheres */}
          <div className="absolute right-6 top-16 h-12 w-12 rounded-full animate-float"
            style={{ background: "radial-gradient(circle at 30% 30%, #6ee7b7, #10b981)", boxShadow: "0 10px 30px rgba(16,185,129,.5)" }} />
          <div className="absolute right-2 bottom-24 h-16 w-16 rounded-full animate-float-slow"
            style={{ background: "radial-gradient(circle at 30% 30%, #fde68a, #f59e0b)", boxShadow: "0 10px 30px rgba(245,158,11,.5)" }} />
          <div className="absolute left-2 bottom-12 h-8 w-8 rounded-full animate-float"
            style={{ background: "radial-gradient(circle at 30% 30%, #c4b5fd, #8B5CF6)", boxShadow: "0 10px 30px rgba(139,92,246,.6)", animationDelay: "1s" }} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative z-10 aspect-square w-[280px] overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_0_70px_rgba(139,92,246,0.45)] animate-float sm:w-[380px]">
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
              <img src={PROFILE_IMAGE_URL} alt="Maddukuri Srilaya"
                width={1024} height={1024}
                className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section header ---------- */
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 glass px-4 py-1.5 text-xs font-medium text-[#c4b5fd]">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
        <span className="text-gradient">{title}</span>
      </h2>
      {desc && <p className="mt-4 text-[#94A3B8]">{desc}</p>}
    </div>
  );
}

/* ---------- About ---------- */
const SOFT = ["Communication", "Teamwork", "Problem Solving", "Time Management", "Leadership", "Adaptability"];
function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About Me" title="Crafting intelligent, human-centred software" />
        <div className="mt-12 glass-strong glass card-hover p-8 sm:p-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-[#E2E8F0] leading-relaxed">
              <p>
                Computer Science and Engineering student specializing in <span className="text-white font-semibold">Artificial Intelligence and Machine Learning</span> at
                Pragati Engineering College.
              </p>
              <p>
                Passionate about software engineering, AI technologies, cloud computing, and solving real-world problems through innovative software solutions.
              </p>
              <p>
                Strong foundation in programming, data structures, algorithms, object-oriented programming, and full-stack development — focused on shipping work that's
                fast, accessible, and beautifully built.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-sm uppercase tracking-wider text-[#94A3B8]">Soft Skills</div>
              <div className="flex flex-wrap gap-2">
                {SOFT.map((s, i) => (
                  <span key={s} className="glass px-3 py-1.5 text-xs font-medium text-[#E2E8F0] hover:text-white hover:border-[#8B5CF6]/50 transition"
                    style={{ animationDelay: `${i * 60}ms` }}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="glass p-3"><div className="text-[#94A3B8] text-xs">Location</div><div className="font-semibold mt-1">India</div></div>
                <div className="glass p-3"><div className="text-[#94A3B8] text-xs">Status</div><div className="font-semibold mt-1">Available</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
const EDU = [
  { title: "Bachelor of Technology", sub: "Computer Science and Engineering (AI & ML)", place: "Pragati Engineering College", date: "Expected June 2027", score: "CGPA 9.09 / 10" },
  { title: "Intermediate Education", sub: "MPC", place: "Bhashyam Junior College", date: "2023", score: "97.7%" },
  { title: "Secondary Education", sub: "SSC", place: "Bhashyam EM High School", date: "2021", score: "99.7%" },
];
function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Education" title="Academic Journey" />
        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, #8B5CF6, #06B6D4, transparent)" }} />
          <div className="space-y-10">
            {EDU.map((e, i) => (
              <div key={i} className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-center ${i % 2 ? "" : ""}`}>
                <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:order-2 sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                  <div className="glass-strong glass card-hover p-6">
                    <div className="flex items-center gap-3 sm:hidden mb-2">
                      <GraduationCap className="h-5 w-5 text-[#8B5CF6]" />
                      <span className="text-xs uppercase tracking-wider text-[#94A3B8]">{e.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold">{e.title}</h3>
                    <p className="mt-1 text-[#c4b5fd] text-sm font-medium">{e.sub}</p>
                    <p className="mt-2 text-[#94A3B8] text-sm">{e.place}</p>
                    <div className="hidden sm:block mt-2 text-xs uppercase tracking-wider text-[#94A3B8]">{e.date}</div>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: "rgba(139,92,246,.15)", color: "#c4b5fd", border: "1px solid rgba(139,92,246,.35)" }}>
                      <Star className="h-3 w-3" /> {e.score}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full"
                  style={{ background: "linear-gradient(135deg,#8B5CF6,#06B6D4)", boxShadow: "0 0 0 6px rgba(139,92,246,.15)" }}>
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
const SKILLS: { icon: any; title: string; items: string[] }[] = [
  { icon: Code2, title: "Programming Languages", items: ["Java", "Python", "C"] },
  { icon: Layers, title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { icon: FileCode2, title: "Full Stack", items: ["MERN Stack", "FastAPI"] },
  { icon: Database, title: "Databases", items: ["SQL", "MySQL"] },
  { icon: Cloud, title: "Cloud Computing", items: ["AWS EC2", "AWS S3", "AWS Lambda", "IAM"] },
  { icon: Cpu, title: "Testing", items: ["Selenium"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "PyCharm", "MS Excel"] },
  { icon: Brain, title: "Core Concepts", items: ["DSA", "OOP", "Problem Solving", "Software Development"] },
];
function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skills" title="Tech I build with" desc="A toolkit spanning programming languages, frontend, backend, cloud and core CS fundamentals." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map(({ icon: Icon, title, items }) => (
            <div key={title} className="glass card-hover p-6 group">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(139,92,246,.25), rgba(6,182,212,.25))", border: "1px solid rgba(139,92,246,.35)" }}>
                  <Icon className="h-5 w-5 text-[#c4b5fd]" />
                </span>
                <h3 className="font-display font-bold">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map(it => (
                  <span key={it} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-[#E2E8F0] group-hover:border-[#8B5CF6]/40 transition">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
const EXP = [
  {
    role: "Android Developer Virtual Internship",
    org: "Google for Developers",
    date: "Apr 2025 – Jun 2025",
    tags: ["Java", "Kotlin", "MVVM", "REST APIs", "Material Design"],
    bullets: [
      "Developed modular Android applications",
      "Implemented MVVM architecture with Java & Kotlin",
      "Integrated REST APIs and applied Material Design principles",
      "Improved application performance and UI/UX",
    ],
  },
  {
    role: "AWS Cloud Virtual Internship",
    org: "Amazon Web Services",
    date: "Oct 2024 – Dec 2024",
    tags: ["EC2", "S3", "Lambda", "IAM", "Serverless"],
    bullets: [
      "Built cloud-based solutions using EC2, S3, Lambda and IAM",
      "Designed serverless architectures and deployment pipelines",
      "Implemented security best practices and IAM policies",
      "Gained hands-on deployment experience",
    ],
  },
];
function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="Internships & Roles" />
        <div className="mt-12 grid gap-6">
          {EXP.map((e) => (
            <div key={e.role} className="glass-strong glass card-hover p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                    style={{ background: "linear-gradient(135deg,#8B5CF6,#06B6D4)", boxShadow: "0 10px 30px -10px rgba(139,92,246,.6)" }}>
                    <Briefcase className="h-5 w-5 text-white" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg sm:text-xl font-bold">{e.role}</h3>
                    <p className="text-[#c4b5fd] font-medium text-sm">{e.org}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-[#E2E8F0]"
                  style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)" }}>{e.date}</span>
              </div>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-[#E2E8F0]">
                {e.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-[#06B6D4] shrink-0" /><span>{b}</span></li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {e.tags.map(t => <span key={t} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-[#c4b5fd]">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    title: "DevInsight AI PRO",
    badge: "AI Project",
    tech: ["Python", "FastAPI", "React.js", "TypeScript", "RAG", "Vector Embeddings", "GitHub API"],
    desc: "RAG-Based Repository Intelligence Platform that analyzes GitHub repositories and provides contextual code understanding using AI-powered semantic search and vector embeddings.",
    features: ["Repository ingestion", "Semantic search", "Vector embeddings", "AI-powered code analysis"],
    image: "/projects/devinsight-ai-pro.png",
    github: "https://github.com/Srilaya30/devinsight_ai_pro",
  },
  {
    title: "Hand Gesture Volume Control System",
    badge: "Computer Vision",
    tech: ["Python", "OpenCV", "MediaPipe"],
    desc: "Real-time gesture recognition application that controls computer volume through webcam-captured hand gestures.",
    features: ["Hand tracking", "Gesture recognition", "Dynamic audio control", "Real-time interaction"],
    image: "/projects/hand-gesture-volume-control.png",
    github: "https://github.com/Srilaya30/Hand-Gesture-Volume-Control-System",
  },
  {
    title: "Aadhaar Data Extraction & Passcode Generator",
    badge: "OCR Tool",
    tech: ["Python", "OpenCV", "Tesseract OCR", "Tkinter"],
    desc: "Desktop application that extracts Aadhaar card details using OCR and generates secure passcodes for authentication and privacy.",
    features: ["OCR processing", "Automated extraction", "Secure passcode generation", "Privacy-focused"],
    image: "/projects/aadhaar-data-extraction.png",
    github: "https://github.com/Srilaya30/VISIOCR",
  },
];
function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Featured Projects" title="Things I've built" desc="A selection of projects spanning AI, computer vision, and developer tooling." />
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="glass card-hover overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover object-center transition duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex rounded-md bg-[#050816]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c4b5fd] ring-1 ring-white/15">
                    {p.badge}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{p.desc}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-[#E2E8F0]">
                  {p.features.map(f => <li key={f} className="flex items-start gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-[#06B6D4] shrink-0" />{f}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map(t => <span key={t} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-[#c4b5fd]">{t}</span>)}
                </div>
                <div className="mt-6 flex gap-2 pt-4 border-t border-white/10">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-lg px-3 py-2 text-xs font-semibold inline-flex items-center gap-1.5 flex-1 justify-center">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
const CERTS = [
  { title: "ServiceNow Certified System Administrator (CSA)", url: "https://drive.google.com/file/d/1BXaiBx7ezeAfMFukk-7e6Dtp6JRVcAT_/view?usp=drive_link", image: "/certificates/servicenow-csa.png", color: "#10B981" },
  { title: "ServiceNow Certified Implementation Specialist (CMDB & CSDM)", url: "https://drive.google.com/file/d/1UyaJoY9JiRo8T_sG_Z6N_kTLO0_rdWJ8/view?usp=drive_link", image: "/certificates/servicenow-cmdb-csdm.png", color: "#06B6D4" },
  { title: "Salesforce Certified Agentforce Specialist", url: "https://drive.google.com/file/d/1Dxd0GJOUHnS5HGHnlWb6VrYD2cZ8j964/view?usp=drive_link", image: "/certificates/salesforce-agentforce-specialist.png", color: "#8B5CF6" },
  { title: "Salesforce Certified AI Associate", url: "https://drive.google.com/file/d/1E2dm6N6-E_QE0NjXQyTxZWIU7YYYpJDc/view?usp=drive_link", image: "/certificates/salesforce-ai-associate.png", color: "#F59E0B" },
  { title: "Aviatrix Multi Cloud Network Associate", url: "https://drive.google.com/file/d/1n7_ko7w2vlJ0U7KLLMtD7oKt5gBohF5D/view?usp=drive_link", image: "/certificates/aviatrix-multicloud-network-associate.png", color: "#EC4899" },
];
function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Certifications" title="Credentials & Courses" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map(c => (
            <div key={c.title} className="glass card-hover overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-white">
                <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-full w-full object-contain object-center transition duration-500 hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                    style={{ background: `linear-gradient(135deg, ${c.color}, rgba(139,92,246,.35))`, boxShadow: `0 10px 24px -12px ${c.color}` }}>
                    <Award className="h-4 w-4 text-white" />
                  </span>
                  <h3 className="font-display font-bold leading-tight text-white">{c.title}</h3>
                </div>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5 inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold">
                  View Certificate <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Achievements ---------- */
const ACH = [
  { title: "Agentblazer Legend '25 Badge", org: "Salesforce Trailhead", icon: Award },
  { title: "Winner — Pragati Premiere League", org: "Throw Ball Competition", icon: Trophy },
];
function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Achievements" title="Wins & Recognition" />
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {ACH.map(({ icon: Icon, ...a }) => (
            <div key={a.title} className="glass-strong glass card-hover p-8 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl animate-glow"
                style={{ background: "linear-gradient(135deg,#F59E0B,#8B5CF6)", boxShadow: "0 0 40px rgba(245,158,11,.5)" }}>
                <Icon className="h-8 w-8 text-white" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{a.title}</h3>
              <p className="mt-1 text-sm text-[#94A3B8]">{a.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Contact" title="Let's Build Something Amazing Together"
          desc="Have a project in mind, an opportunity, or just want to say hi? My inbox is open." />
        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 glass-strong glass p-7 space-y-5">
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow icon={Phone} label="Phone" value={PHONE_DISPLAY} href={PHONE_HREF} />
            <ContactRow icon={MapPin} label="Location" value="India" />
            <div className="pt-3 border-t border-white/10">
              <div className="text-xs uppercase tracking-wider text-[#94A3B8] mb-3">Find me on</div>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
                  { Icon: Github, href: GITHUB_URL, label: "GitHub" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl glass card-hover">
                    <Icon className="h-5 w-5 text-[#c4b5fd]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="lg:col-span-3 glass-strong glass p-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's it about?" />
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">Message</label>
              <textarea required rows={5} placeholder="Tell me a bit about your project…"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-[#64748B] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/30 transition" />
            </div>
            <button type="submit" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold w-full sm:w-auto">
              {sent ? <>Sent <CheckCircle2 className="ml-2 h-4 w-4" /></> : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
        style={{ background: "linear-gradient(135deg, rgba(139,92,246,.3), rgba(6,182,212,.3))", border: "1px solid rgba(139,92,246,.35)" }}>
        <Icon className="h-5 w-5 text-[#c4b5fd]" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-[#94A3B8]">{label}</div>
        <div className="font-medium text-white truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-90 transition">{inner}</a> : inner;
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">{label}</label>
      <input required type={type} name={name} placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-[#64748B] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/30 transition" />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl font-display font-extrabold text-white"
                style={{ background: "linear-gradient(135deg,#8B5CF6,#6366F1)" }}>MS</span>
              <span className="font-display font-bold">Maddukuri Srilaya</span>
            </div>
            <p className="mt-4 text-sm text-[#94A3B8] max-w-xs">AI & ML Student | Software Developer building intelligent, scalable software.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-3">Quick Links</div>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {NAV.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="text-[#94A3B8] hover:text-white transition">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-3">Connect</div>
            <div className="flex gap-2">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass card-hover" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 text-[#c4b5fd]" />
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass card-hover" aria-label="GitHub">
                <Github className="h-4 w-4 text-[#c4b5fd]" />
              </a>
              <a href={`mailto:${EMAIL}`} className="grid h-10 w-10 place-items-center rounded-xl glass card-hover" aria-label="Email">
                <Mail className="h-4 w-4 text-[#c4b5fd]" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-[#94A3B8]">
          <div>&copy; 2026 Maddukuri Srilaya. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Back to top ---------- */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onS = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full btn-primary animate-fade-up">
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
