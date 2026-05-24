"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight, AlertCircle } from "lucide-react";
import { projects } from "@/data/profile";

/* ──────────────────────────────────────────────────────────────
   CSS Mock Previews (no real screenshots needed)
────────────────────────────────────────────────────────────── */

function DriversPreview() {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
          Sentiment Analysis
        </span>
        <span className="text-[10px] text-teal-600 font-semibold">BSE · DJI</span>
      </div>

      {/* Dual-line chart */}
      <svg viewBox="0 0 260 54" className="w-full mb-3" aria-hidden="true">
        <defs>
          <linearGradient id="drivers-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[12, 28, 44].map((y) => (
          <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="#e2e8f0" strokeWidth="0.5" />
        ))}
        {/* Main signal line */}
        <path
          d="M0,44 C18,40 30,34 50,28 C70,22 85,30 105,22 C125,14 142,18 162,10 C182,6 200,12 220,8 L260,5"
          fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"
        />
        <path
          d="M0,44 C18,40 30,34 50,28 C70,22 85,30 105,22 C125,14 142,18 162,10 C182,6 200,12 220,8 L260,5 L260,54 L0,54 Z"
          fill="url(#drivers-fill)"
        />
        {/* Secondary dashed line */}
        <path
          d="M0,48 C20,46 40,42 60,38 C80,34 100,40 120,34 C140,28 160,32 180,26 C200,22 225,28 260,22"
          fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round"
        />
      </svg>

      {/* Metric row */}
      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
        {[
          { l: "Observations", v: "148K+" },
          { l: "Markets", v: "BSE + DJI" },
          { l: "Period", v: "2015–24" },
        ].map((m) => (
          <div key={m.l} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm text-center">
            <div className="text-[10px] text-slate-400">{m.l}</div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">{m.v}</div>
          </div>
        ))}
      </div>

      {/* Tool chips */}
      <div className="flex flex-wrap gap-1">
        {["FinBERT", "Bloomberg", "Google Trends", "Fear/Greed"].map((t) => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function TradingPreview() {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
          Strategy Monitor
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          <span className="text-[10px] text-teal-600 font-medium">Deployed</span>
        </div>
      </div>

      {/* Price chart with signal markers */}
      <svg viewBox="0 0 260 60" className="w-full mb-3" aria-hidden="true">
        <defs>
          <linearGradient id="trading-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[12, 28, 44].map((y) => (
          <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="#e2e8f0" strokeWidth="0.5" />
        ))}
        {/* VWAP baseline */}
        <line x1="0" y1="34" x2="260" y2="34" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 3" />
        {/* Price path */}
        <path
          d="M0,50 C18,46 32,42 52,38 C72,34 85,44 105,34 C120,26 138,28 155,20 C172,14 188,18 205,12 L260,8"
          fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"
        />
        <path
          d="M0,50 C18,46 32,42 52,38 C72,34 85,44 105,34 C120,26 138,28 155,20 C172,14 188,18 205,12 L260,8 L260,60 L0,60 Z"
          fill="url(#trading-fill)"
        />
        {/* Entry/exit markers */}
        <circle cx="105" cy="34" r="3.5" fill="#16a34a" stroke="white" strokeWidth="1.5" />
        <circle cx="155" cy="20" r="3.5" fill="#16a34a" stroke="white" strokeWidth="1.5" />
        <circle cx="70" cy="42" r="3.5" fill="#dc2626" stroke="white" strokeWidth="1.5" />
      </svg>

      {/* Info cards */}
      <div className="grid grid-cols-2 gap-1.5 mb-2.5">
        {[
          { l: "Signal", v: "BOS/CHoCH" },
          { l: "Platform", v: "Railway.app" },
          { l: "Markets", v: "NSE + Crypto" },
          { l: "Stop Logic", v: "Vol-Adjusted" },
        ].map((m) => (
          <div key={m.l} className="bg-white rounded-lg p-2 border border-slate-100 shadow-sm">
            <div className="text-[10px] text-slate-400">{m.l}</div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">{m.v}</div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-3 text-[10px] text-slate-400">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" />Long entry</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" />Exit signal</span>
        <span className="flex items-center gap-1"><span className="w-4 border-t border-dashed border-slate-300" />VWAP</span>
      </div>
    </div>
  );
}

function ExampackPreview() {
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-slate-800">ExamPack</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 font-medium">
          Live · exampack.in
        </span>
      </div>

      {/* Mock auth card */}
      <div className="bg-white rounded-xl p-3.5 shadow-sm border border-slate-100 mb-2.5">
        <div className="text-[11px] font-semibold text-slate-600 mb-2.5">Sign in to ExamPack</div>
        <div className="space-y-1.5 mb-2.5">
          <div className="h-7 bg-slate-100 rounded-lg flex items-center px-2.5">
            <div className="text-[10px] text-slate-400">Email address</div>
          </div>
          <div className="h-7 bg-slate-100 rounded-lg flex items-center px-2.5">
            <div className="text-[10px] text-slate-400">Password</div>
          </div>
        </div>
        <div className="h-7 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="text-[11px] text-white font-medium">Sign In</div>
        </div>
        <div className="text-[10px] text-blue-500 text-center mt-2">Forgot password?</div>
      </div>

      {/* Deployment status */}
      <div className="flex items-center gap-2 mb-2.5 text-[10px] text-slate-500">
        <div className="flex-1 h-1.5 bg-green-100 rounded-full overflow-hidden">
          <div className="h-full w-full bg-green-400 rounded-full" />
        </div>
        <span className="shrink-0 text-green-600 font-medium">Deployed ✓</span>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1">
        {["Next.js", "Supabase Auth", "Claude Code", "Vercel"].map((t) => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Preview resolver
────────────────────────────────────────────────────────────── */
function ProjectPreview({ id }: { id: string }) {
  if (id === "drivers") return <DriversPreview />;
  if (id === "algo-trading") return <TradingPreview />;
  return <ExampackPreview />;
}

/* ──────────────────────────────────────────────────────────────
   Colour scheme per project
────────────────────────────────────────────────────────────── */
const scheme: Record<string, { badge: string; tag: string; accent: string }> = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    tag: "bg-blue-50 text-blue-700",
    accent: "text-blue-600",
  },
  teal: {
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    tag: "bg-teal-50 text-teal-700",
    accent: "text-teal-600",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    tag: "bg-violet-50 text-violet-700",
    accent: "text-violet-600",
  },
};

/* ──────────────────────────────────────────────────────────────
   Modal
────────────────────────────────────────────────────────────── */
type Project = typeof projects[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const s = scheme[project.color] ?? scheme.blue;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium mb-4 ${s.badge}`}>
          {project.type}
        </span>

        <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
        <p className="text-slate-500 text-sm mb-5">{project.subtitle}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Visual mockup in modal */}
        <div className="mb-5">
          <ProjectPreview id={project.id} />
        </div>

        <div className="mb-5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">What I did</div>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-teal-500" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Skills & Tools</div>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((sk) => (
              <span key={sk} className={`text-xs px-2.5 py-1 rounded-full ${s.tag}`}>{sk}</span>
            ))}
          </div>
        </div>

        {"disclaimer" in project && project.disclaimer && (
          <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-xs">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            {project.disclaimer}
          </div>
        )}

        {"url" in project && project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${s.accent} hover:underline cursor-pointer`}
          >
            Visit {(project.url as string).replace("https://", "")}
            <ExternalLink size={13} />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Main section
────────────────────────────────────────────────────────────── */
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Finance meets technology</h2>
          <p className="text-slate-500 text-base mt-3 max-w-2xl">
            Research initiatives, automation systems, and AI-assisted product builds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const s = scheme[project.color] ?? scheme.blue;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                onClick={() => setSelected(project)}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Visual mockup header */}
                <div className="p-4 pb-0">
                  <ProjectPreview id={project.id} />
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <span className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full border text-[11px] font-medium mb-3 ${s.badge}`}>
                    {project.type}
                  </span>

                  <h3 className="text-slate-900 text-lg font-bold mb-1 group-hover:text-teal-700 transition-colors duration-150">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs mb-3">{project.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {project.description.length > 140
                      ? project.description.slice(0, 140) + "…"
                      : project.description}
                  </p>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.skills.slice(0, 3).map((sk) => (
                      <span key={sk} className={`text-[11px] px-2 py-0.5 rounded-full ${s.tag}`}>
                        {sk}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        +{project.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className={`mt-4 flex items-center gap-1 text-xs font-medium ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-150`}>
                    View full details
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform duration-150" />
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
