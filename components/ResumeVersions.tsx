"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, TrendingUp, Database, BookOpen, Cpu } from "lucide-react";
import { resumeVersions } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp, Database, BookOpen, Cpu,
};

const colorScheme: Record<string, {
  border: string; glow: string; badge: string; bullet: string; btn: string; iconBg: string; iconText: string;
}> = {
  cyan: {
    border:   "border-cyan-500/25   hover:border-cyan-500/50",
    glow:     "hover:shadow-cyan-500/8",
    badge:    "bg-cyan-500/10  border-cyan-500/25  text-cyan-400",
    bullet:   "bg-cyan-400",
    btn:      "bg-cyan-500 hover:bg-cyan-400 text-[#05070A] shadow-cyan-500/20",
    iconBg:   "bg-cyan-500/10",
    iconText: "text-cyan-400",
  },
  teal: {
    border:   "border-teal-500/25   hover:border-teal-500/50",
    glow:     "hover:shadow-teal-500/8",
    badge:    "bg-teal-500/10  border-teal-500/25  text-teal-400",
    bullet:   "bg-teal-400",
    btn:      "bg-teal-500 hover:bg-teal-400 text-[#05070A] shadow-teal-500/20",
    iconBg:   "bg-teal-500/10",
    iconText: "text-teal-400",
  },
  gold: {
    border:   "border-amber-500/25  hover:border-amber-500/50",
    glow:     "hover:shadow-amber-500/8",
    badge:    "bg-amber-500/10 border-amber-500/25 text-amber-400",
    bullet:   "bg-amber-400",
    btn:      "bg-amber-500 hover:bg-amber-400 text-[#05070A] shadow-amber-500/20",
    iconBg:   "bg-amber-500/10",
    iconText: "text-amber-400",
  },
  violet: {
    border:   "border-violet-500/25  hover:border-violet-500/50",
    glow:     "hover:shadow-violet-500/8",
    badge:    "bg-violet-500/10 border-violet-500/25 text-violet-400",
    bullet:   "bg-violet-400",
    btn:      "bg-violet-500 hover:bg-violet-400 text-white shadow-violet-500/20",
    iconBg:   "bg-violet-500/10",
    iconText: "text-violet-400",
  },
};

export default function ResumeVersions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="resumes" className="py-24 px-6 bg-[#05070A]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Resume Versions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Choose the right resume for your hiring need
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-500 text-base mb-14 max-w-2xl"
        >
          Four targeted versions, each optimised for a different role type. Download the one that matches your hiring need.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeVersions.map((rv, i) => {
            const s = colorScheme[rv.color] ?? colorScheme.cyan;
            const Icon = iconMap[rv.icon] ?? TrendingUp;
            return (
              <motion.div
                key={rv.id}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group rounded-2xl border bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 hover:shadow-xl ${s.border} ${s.glow} flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2.5 rounded-xl shrink-0 ${s.iconBg}`}>
                    <Icon size={20} className={s.iconText} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{rv.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {rv.roles.slice(0, 3).map((role) => (
                        <span key={role} className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${s.badge}`}>
                          {role}
                        </span>
                      ))}
                      {rv.roles.length > 3 && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${s.badge}`}>
                          +{rv.roles.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{rv.summary}</p>

                {/* Strengths */}
                <div className="flex-1 mb-5">
                  <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-2.5">
                    Key strengths
                  </div>
                  <ul className="space-y-2">
                    {rv.strengths.map((s2, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm">
                        <span className={`mt-2 w-1.5 h-1.5 shrink-0 rounded-full ${s.bullet}`} />
                        {s2}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download button */}
                <a
                  href={rv.pdf}
                  download
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 shadow-lg cursor-pointer ${s.btn}`}
                >
                  <Download size={15} /> Download PDF
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-slate-700 text-xs mt-10"
        >
          Place resume PDF files in{" "}
          <code className="text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">public/resumes/</code>{" "}
          to activate all download buttons.
        </motion.p>
      </div>
    </section>
  );
}
