"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/data/profile";

const typeColor: Record<string, string> = {
  Internship: "bg-blue-50 text-blue-700 border-blue-200",
  "Full-time": "bg-teal-50 text-teal-700 border-teal-200",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-slate-300 to-slate-200" />

          <div className="space-y-8 pl-14 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.13 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-9 md:-left-14 top-4 w-5 h-5 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-slate-900 font-semibold text-lg leading-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Briefcase size={13} className="text-teal-600 shrink-0" />
                        <span className="text-teal-700 text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${typeColor[exp.type] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-teal-400" />
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
