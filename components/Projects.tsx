"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight, AlertCircle } from "lucide-react";
import { projects, profileTracks } from "@/data/profile";

/* ── Dark CSS mock previews ── */

function DriversPreview() {
  return (
    <div className="rounded-xl bg-[#080B12] border border-white/8 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">Sentiment Analysis</span>
        <span className="text-[10px] text-cyan-500 font-semibold">BSE · DJI</span>
      </div>
      <svg viewBox="0 0 260 52" className="w-full mb-3" aria-hidden="true">
        <defs>
          <linearGradient id="drv-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[12, 28, 44].map((y) => (
          <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        ))}
        <path d="M0,44 C18,38 34,30 54,24 C74,18 88,28 108,20 C128,12 145,16 165,8 C182,4 200,10 220,7 L260,4"
          fill="none" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M0,44 C18,38 34,30 54,24 C74,18 88,28 108,20 C128,12 145,16 165,8 C182,4 200,10 220,7 L260,4 L260,52 L0,52 Z"
          fill="url(#drv-fill)" />
        <path d="M0,48 C20,46 42,42 62,38 C82,34 100,40 120,34 C140,28 162,32 182,28 C202,24 225,30 260,26"
          fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth="1.2" strokeDasharray="4 3" strokeLinecap="round" />
      </svg>
      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
        {[{ l: "Observations", v: "148K+" }, { l: "Markets", v: "BSE + DJI" }, { l: "Period", v: "2015–24" }].map((m) => (
          <div key={m.l} className="rounded-lg bg-white/[0.04] border border-white/6 p-2 text-center">
            <div className="text-[9px] text-slate-600">{m.l}</div>
            <div className="text-[11px] font-bold text-white mt-0.5">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        {["FinBERT", "Bloomberg", "Google Trends", "Fear/Greed"].map((t) => (
          <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/15">{t}</span>
        ))}
      </div>
    </div>
  );
}

function TradingPreview() {
  return (
    <div className="rounded-xl bg-[#080B12] border border-white/8 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">Strategy Monitor</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-[10px] text-teal-400 font-medium">Deployed</span>
        </div>
      </div>
      <svg viewBox="0 0 260 60" className="w-full mb-3" aria-hidden="true">
        <defs>
          <linearGradient id="trd-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[12, 28, 44].map((y) => (
          <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        ))}
        <line x1="0" y1="34" x2="260" y2="34" stroke="rgba(148,163,184,0.15)" strokeWidth="1" strokeDasharray="6 3" />
        <path d="M0,52 C18,46 32,42 52,36 C72,30 86,42 106,32 C122,24 140,26 158,18 C174,12 190,16 208,10 L260,7"
          fill="none" stroke="#14B8A6" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M0,52 C18,46 32,42 52,36 C72,30 86,42 106,32 C122,24 140,26 158,18 C174,12 190,16 208,10 L260,7 L260,60 L0,60 Z"
          fill="url(#trd-fill)" />
        <circle cx="106" cy="32" r="3.5" fill="#16a34a" stroke="#080B12" strokeWidth="1.5" />
        <circle cx="158" cy="18" r="3.5" fill="#16a34a" stroke="#080B12" strokeWidth="1.5" />
        <circle cx="72"  cy="38" r="3.5" fill="#dc2626" stroke="#080B12" strokeWidth="1.5" />
      </svg>
      <div className="grid grid-cols-2 gap-1.5 mb-2.5">
        {[{ l: "Signal", v: "BOS/CHoCH" }, { l: "Stop", v: "Vol-Adjusted" }, { l: "Markets", v: "NSE + Crypto" }, { l: "Deploy", v: "Railway.app" }].map((m) => (
          <div key={m.l} className="rounded-lg bg-white/[0.04] border border-white/6 p-2">
            <div className="text-[9px] text-slate-600">{m.l}</div>
            <div className="text-[11px] font-bold text-white mt-0.5">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 text-[9px] text-slate-600">
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Long entry</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />Exit signal</span>
        <span className="flex items-center gap-1"><span className="w-4 border-t border-dashed border-slate-700" />VWAP</span>
      </div>
    </div>
  );
}

function ExampackPreview() {
  return (
    <div className="rounded-xl bg-[#080B12] border border-white/8 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-white">ExamPack</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">Live · exampack.in</span>
      </div>
      <div className="rounded-xl bg-white/[0.04] border border-white/8 p-3.5 mb-2.5">
        <div className="text-[10px] font-semibold text-slate-500 mb-2.5">Sign in to ExamPack</div>
        <div className="space-y-1.5 mb-2.5">
          <div className="h-7 bg-white/5 rounded-lg flex items-center px-2.5">
            <div className="text-[9px] text-slate-600">Email address</div>
          </div>
          <div className="h-7 bg-white/5 rounded-lg flex items-center px-2.5">
            <div className="text-[9px] text-slate-600">Password</div>
          </div>
        </div>
        <div className="h-7 bg-violet-600 rounded-lg flex items-center justify-center">
          <div className="text-[10px] text-white font-medium">Sign In</div>
        </div>
        <div className="text-[9px] text-violet-400/70 text-center mt-1.5">Forgot password?</div>
      </div>
      <div className="flex items-center gap-2 mb-2.5 text-[9px] text-slate-600">
        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-full bg-emerald-500/60 rounded-full" />
        </div>
        <span className="shrink-0 text-emerald-400 font-medium">Deployed</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {["Next.js", "Supabase Auth", "Claude Code", "Vercel"].map((t) => (
          <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/15">{t}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectPreview({ id }: { id: string }) {
  if (id === "drivers")     return <DriversPreview />;
  if (id === "algo-trading") return <TradingPreview />;
  return <ExampackPreview />;
}

/* ── Color schemes ── */
const scheme: Record<string, { border: string; badge: string; tag: string; bullet: string; accent: string; glow: string }> = {
  cyan:   { border: "border-cyan-500/20   hover:border-cyan-500/45",   badge: "bg-cyan-500/10   border-cyan-500/20   text-cyan-400",   tag: "bg-cyan-500/8   text-cyan-300",   bullet: "bg-cyan-400",   accent: "text-cyan-400",   glow: "hover:shadow-cyan-500/6"   },
  teal:   { border: "border-teal-500/20   hover:border-teal-500/45",   badge: "bg-teal-500/10   border-teal-500/20   text-teal-400",   tag: "bg-teal-500/8   text-teal-300",   bullet: "bg-teal-400",   accent: "text-teal-400",   glow: "hover:shadow-teal-500/6"   },
  violet: { border: "border-violet-500/20 hover:border-violet-500/45", badge: "bg-violet-500/10 border-violet-500/20 text-violet-400", tag: "bg-violet-500/8 text-violet-300", bullet: "bg-violet-400", accent: "text-violet-400", glow: "hover:shadow-violet-500/6" },
};

/* ── Modal ── */
type Project = typeof projects[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const s = scheme[project.color] ?? scheme.cyan;
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border bg-[#0D111A] shadow-2xl p-8 ${s.border}`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/8 transition-colors cursor-pointer" aria-label="Close">
          <X size={17} />
        </button>

        <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium mb-4 ${s.badge}`}>{project.type}</span>
        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-slate-500 text-sm mb-5">{project.subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="mb-5"><ProjectPreview id={project.id} /></div>

        <div className="mb-5">
          <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-3">What I did</div>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm">
                <span className={`mt-2 w-1.5 h-1.5 shrink-0 rounded-full ${s.bullet}`} /> {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-3">Skills and Tools</div>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((sk) => (
              <span key={sk} className={`text-xs px-2.5 py-1 rounded-full ${s.tag}`}>{sk}</span>
            ))}
          </div>
        </div>

        {"disclaimer" in project && project.disclaimer && (
          <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/5 border border-amber-500/15 text-amber-400/80 text-xs">
            <AlertCircle size={13} className="mt-0.5 shrink-0" /> {project.disclaimer}
          </div>
        )}

        {"url" in project && project.url && (
          <a href={project.url as string} target="_blank" rel="noopener noreferrer"
            className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${s.accent} hover:underline cursor-pointer`}>
            Visit {(project.url as string).replace("https://", "")} <ExternalLink size={12} />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Main ── */
interface ProjectsProps {
  activeTrack?: string | null;
}

export default function Projects({ activeTrack }: ProjectsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<Project | null>(null);

  const track = profileTracks.find((t) => t.id === activeTrack);
  const matchedIds = track?.projectIds ?? [];

  const getWrapperClass = (id: string) => {
    if (!activeTrack) return "";
    if (matchedIds.includes(id)) return "";
    return "opacity-35";
  };

  const getCardBorder = (id: string, s: typeof scheme[string]) => {
    if (!activeTrack) return `${s.border} ${s.glow}`;
    if (matchedIds.includes(id)) return `${s.border} ring-1 ring-white/10 ${s.glow}`;
    return "border-white/5";
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#080B12]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Finance meets technology</h2>
          <p className="text-slate-500 text-base mt-3 max-w-2xl">Research initiatives, automation systems, and AI-assisted product builds.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const s = scheme[project.color] ?? scheme.cyan;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`transition-opacity duration-300 ${getWrapperClass(project.id)}`}
              >
                {activeTrack && matchedIds.includes(project.id) && (
                  <div className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${s.badge}`}>
                    Relevant for this track
                  </div>
                )}
                <div
                  onClick={() => setSelected(project)}
                  className={`group rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col hover:shadow-xl ${getCardBorder(project.id, s)}`}
                >
                  <div className="p-4 pb-0"><ProjectPreview id={project.id} /></div>

                  <div className="p-5 flex flex-col flex-1">
                    <span className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-medium mb-3 ${s.badge}`}>
                      {project.type}
                    </span>
                    <h3 className="text-white text-lg font-bold mb-1 transition-colors duration-150 group-hover:text-cyan-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs mb-3">{project.subtitle}</p>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                      {project.description.length > 140 ? project.description.slice(0, 140) + "…" : project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.skills.slice(0, 3).map((sk) => (
                        <span key={sk} className={`text-[10px] px-2 py-0.5 rounded-full ${s.tag}`}>{sk}</span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-500">+{project.skills.length - 3}</span>
                      )}
                    </div>
                    <div className={`mt-4 flex items-center gap-1 text-xs font-medium ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-150`}>
                      View details <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
