"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Database, BookOpen, Cpu, ChevronRight, LayoutGrid } from "lucide-react";
import { profileTracks } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp, Database, BookOpen, Cpu,
};

const colorScheme: Record<string, {
  border: string; activeBorder: string; badge: string; icon: string; cta: string; glow: string;
}> = {
  cyan: {
    border:       "border-white/8      hover:border-cyan-500/40",
    activeBorder: "border-cyan-500/60  ring-1 ring-cyan-500/30",
    badge:        "bg-cyan-500/10  text-cyan-400",
    icon:         "text-cyan-400   bg-cyan-500/10",
    cta:          "text-cyan-400   hover:text-cyan-300",
    glow:         "hover:shadow-cyan-500/8",
  },
  teal: {
    border:       "border-white/8      hover:border-teal-500/40",
    activeBorder: "border-teal-500/60  ring-1 ring-teal-500/30",
    badge:        "bg-teal-500/10  text-teal-400",
    icon:         "text-teal-400   bg-teal-500/10",
    cta:          "text-teal-400   hover:text-teal-300",
    glow:         "hover:shadow-teal-500/8",
  },
  gold: {
    border:       "border-white/8      hover:border-amber-500/40",
    activeBorder: "border-amber-500/60 ring-1 ring-amber-500/30",
    badge:        "bg-amber-500/10 text-amber-400",
    icon:         "text-amber-400  bg-amber-500/10",
    cta:          "text-amber-400  hover:text-amber-300",
    glow:         "hover:shadow-amber-500/8",
  },
  violet: {
    border:       "border-white/8      hover:border-violet-500/40",
    activeBorder: "border-violet-500/60 ring-1 ring-violet-500/30",
    badge:        "bg-violet-500/10 text-violet-400",
    icon:         "text-violet-400  bg-violet-500/10",
    cta:          "text-violet-400  hover:text-violet-300",
    glow:         "hover:shadow-violet-500/8",
  },
};

interface Props {
  activeTrack: string | null;
  onSelect: (id: string) => void;
  onClear: () => void;
}

export default function TrackSelector({ activeTrack, onSelect, onClear }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSelect = (id: string) => {
    onSelect(id);
    // Small delay so state updates before scroll
    setTimeout(() => {
      document.getElementById("resumes")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <section id="track-selector" className="py-20 px-6 bg-[#05070A]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Hiring?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What are you hiring for?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-slate-500 text-base mb-10 max-w-2xl"
        >
          Choose the track that best matches your role. The site will highlight the most relevant
          experience, projects, and resume.
        </motion.p>

        {/* 4 track cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {profileTracks.map((track, i) => {
            const Icon = iconMap[track.icon] ?? TrendingUp;
            const s = colorScheme[track.color] ?? colorScheme.cyan;
            const isActive = activeTrack === track.id;

            return (
              <motion.button
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                onClick={() => handleSelect(track.id)}
                className={`group text-left rounded-2xl border bg-white/[0.02] p-5 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.04] hover:shadow-xl cursor-pointer w-full ${
                  isActive ? s.activeBorder : s.border
                } ${s.glow}`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 ${s.badge}`}>
                    Active
                  </div>
                )}

                {/* Icon */}
                <div className={`p-2.5 rounded-xl w-fit mb-4 ${s.icon}`}>
                  <Icon size={18} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-sm mb-2 leading-tight">{track.title}</h3>

                {/* Copy */}
                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                  {track.selectorCopy}
                </p>

                {/* Best-for chips */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {(track.bestFor ?? []).slice(0, 3).map((role) => (
                    <span key={role} className={`text-[10px] px-2 py-0.5 rounded-full ${s.badge}`}>
                      {role}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-1 text-xs font-semibold transition-colors duration-150 ${s.cta}`}>
                  {track.ctaLabel}
                  <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* View full profile option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center"
        >
          {activeTrack ? (
            <button
              onClick={onClear}
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              <LayoutGrid size={14} />
              Clear selection and view full profile
            </button>
          ) : (
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              <LayoutGrid size={14} />
              View full profile without filtering
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
