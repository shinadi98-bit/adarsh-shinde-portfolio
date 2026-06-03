"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Database, BookOpen, Cpu, Download } from "lucide-react";
import { profileTracks } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp, Database, BookOpen, Cpu,
};

const colorScheme: Record<string, {
  border: string; activeBorder: string; icon: string; chip: string; link: string;
}> = {
  cyan:   { border: "border-cyan-500/15",   activeBorder: "border-cyan-500/60   ring-1 ring-cyan-500/25",   icon: "text-cyan-400   bg-cyan-500/10",   chip: "bg-cyan-500/8   text-cyan-300",   link: "text-cyan-400   hover:text-cyan-300"   },
  teal:   { border: "border-teal-500/15",   activeBorder: "border-teal-500/60   ring-1 ring-teal-500/25",   icon: "text-teal-400   bg-teal-500/10",   chip: "bg-teal-500/8   text-teal-300",   link: "text-teal-400   hover:text-teal-300"   },
  gold:   { border: "border-amber-500/15",  activeBorder: "border-amber-500/60  ring-1 ring-amber-500/25",  icon: "text-amber-400  bg-amber-500/10",  chip: "bg-amber-500/8  text-amber-300",  link: "text-amber-400  hover:text-amber-300"  },
  violet: { border: "border-violet-500/15", activeBorder: "border-violet-500/60 ring-1 ring-violet-500/25", icon: "text-violet-400 bg-violet-500/10", chip: "bg-violet-500/8 text-violet-300", link: "text-violet-400 hover:text-violet-300" },
};

interface Props {
  activeTrack?: string | null;
  onSelect?: (id: string) => void;
}

export default function ProfileTracks({ activeTrack, onSelect }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSelect = (id: string) => {
    if (onSelect) onSelect(id);
    setTimeout(() => {
      document.getElementById("resumes")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <section id="profile-tracks" className="py-24 px-6 bg-[#080B12]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Profile Tracks</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Four ways to view my profile
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-500 text-base mb-14 max-w-2xl"
        >
          Depending on the role you are hiring for, a different part of my background is most relevant. Each track links to a matching targeted resume.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profileTracks.map((track, i) => {
            const Icon = iconMap[track.icon] ?? TrendingUp;
            const s = colorScheme[track.color] ?? colorScheme.cyan;
            const isActive = activeTrack === track.id;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border bg-white/[0.02] p-5 flex flex-col hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 ${
                  isActive ? s.activeBorder : s.border
                }`}
              >
                {isActive && (
                  <div className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 ${s.chip}`}>
                    Active
                  </div>
                )}

                <div className={`p-2.5 rounded-xl w-fit mb-4 ${s.icon}`}>
                  <Icon size={18} />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{track.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{track.brings}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {track.roles.map((role) => (
                    <span key={role} className={`text-[10px] px-2 py-0.5 rounded-full ${s.chip}`}>
                      {role}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleSelect(track.id)}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150 cursor-pointer ${s.link}`}
                >
                  <Download size={12} /> Get targeted resume
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
