"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Database, Wrench, Cpu, Users } from "lucide-react";
import { skillGroups, profileTracks } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp, Database, Wrench, Cpu, Users,
};

const palette = [
  { border: "border-cyan-500/20",   icon: "text-cyan-400   bg-cyan-500/10",   chip: "bg-cyan-500/8   border-cyan-500/20   text-cyan-300   hover:bg-cyan-500/15"   },
  { border: "border-teal-500/20",   icon: "text-teal-400   bg-teal-500/10",   chip: "bg-teal-500/8   border-teal-500/20   text-teal-300   hover:bg-teal-500/15"   },
  { border: "border-violet-500/20", icon: "text-violet-400 bg-violet-500/10", chip: "bg-violet-500/8 border-violet-500/20 text-violet-300 hover:bg-violet-500/15" },
  { border: "border-amber-500/20",  icon: "text-amber-400  bg-amber-500/10",  chip: "bg-amber-500/8  border-amber-500/20  text-amber-300  hover:bg-amber-500/15"  },
  { border: "border-slate-500/20",  icon: "text-slate-400  bg-slate-500/10",  chip: "bg-slate-500/8  border-slate-500/20  text-slate-300  hover:bg-slate-500/15"  },
];

interface Props {
  activeTrack?: string | null;
}

export default function Skills({ activeTrack }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const track = profileTracks.find((t) => t.id === activeTrack);
  const matchedGroups = track?.skillGroups ?? [];

  return (
    <section id="skills" className="py-24 px-6 bg-[#080B12]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Capabilities and tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Cpu;
            const p = palette[gi % palette.length];
            const isMatch = !activeTrack || matchedGroups.includes(group.label);
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.09 }}
                className={`rounded-2xl border ${p.border} bg-white/[0.02] p-6 transition-opacity duration-300 ${isMatch ? "" : "opacity-30"}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg ${p.icon}`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-white text-sm font-semibold">{group.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.035 }}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-150 cursor-default ${p.chip}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
