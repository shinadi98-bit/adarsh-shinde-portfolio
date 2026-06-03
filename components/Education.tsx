"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { education, certifications } from "@/data/profile";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="py-24 px-6 bg-[#05070A]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Education and Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Academic background</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={17} className="text-cyan-400" />
              <h3 className="text-white font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-cyan-500/20 transition-colors duration-150"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-white font-semibold text-sm">{edu.degree}</div>
                      <div className="text-cyan-400 text-sm mt-0.5">{edu.institution}</div>
                      {edu.location && (
                        <div className="flex items-center gap-1 text-slate-600 text-xs mt-1">
                          <MapPin size={10} /> {edu.location}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 text-xs shrink-0">
                      <Calendar size={11} /> {edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={17} className="text-teal-400" />
              <h3 className="text-white font-semibold text-lg">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="flex items-start justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-teal-500/20 transition-colors duration-150"
                >
                  <div>
                    <div className="text-white text-sm font-semibold">{cert.name}</div>
                    <div className="text-teal-400 text-xs mt-0.5">{cert.issuer}</div>
                  </div>
                  <div className="shrink-0 text-slate-600 text-xs mt-0.5">{cert.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
