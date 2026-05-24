"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Database, Wrench, Cpu, Users } from "lucide-react";
import { skillGroups } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingUp, Database, Wrench, Cpu, Users,
};

const palette = [
  { border: "border-blue-200", bg: "bg-blue-50/60", icon: "text-blue-600 bg-blue-100", chip: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100" },
  { border: "border-teal-200", bg: "bg-teal-50/60", icon: "text-teal-600 bg-teal-100", chip: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100" },
  { border: "border-violet-200", bg: "bg-violet-50/60", icon: "text-violet-600 bg-violet-100", chip: "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100" },
  { border: "border-amber-200", bg: "bg-amber-50/60", icon: "text-amber-600 bg-amber-100", chip: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" },
  { border: "border-slate-200", bg: "bg-slate-50/60", icon: "text-slate-600 bg-slate-100", chip: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 px-6 bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Capabilities & tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Cpu;
            const p = palette[gi % palette.length];

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.09 }}
                className={`rounded-2xl border ${p.border} ${p.bg} p-6 bg-white shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg ${p.icon}`}>
                    <Icon size={17} />
                  </div>
                  <span className="text-slate-900 text-sm font-semibold">{group.label}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
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
