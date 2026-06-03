"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/data/profile";

const typeColor: Record<string, string> = {
  Internship: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
  "Full-time": "bg-teal-500/10 text-teal-400 border-teal-500/25",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[#05070A]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Where I have worked</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-teal-500/20 to-transparent" />

          <div className="space-y-8 pl-14 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.13 }}
                className="relative"
              >
                <div className="absolute -left-9 md:-left-14 top-4 w-5 h-5 rounded-full bg-[#05070A] border-2 border-cyan-500/60 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-cyan-500/20 hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-cyan-300 transition-colors duration-150">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Briefcase size={12} className="text-cyan-500 shrink-0" />
                        <span className="text-cyan-400 text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                        <Calendar size={11} /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                        <MapPin size={11} /> {exp.location}
                      </div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${typeColor[exp.type] ?? "bg-slate-500/10 text-slate-400 border-slate-500/25"}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-500/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
