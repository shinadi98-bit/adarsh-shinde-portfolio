"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { education, certifications } from "@/data/profile";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">Education & Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Academic background</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} className="text-teal-600" />
              <h3 className="text-slate-900 font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-xl border p-5 shadow-sm ${
                    edu.current
                      ? "border-teal-200 bg-teal-50/50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-slate-900 font-semibold text-sm">{edu.degree}</div>
                      <div className="text-teal-600 text-sm mt-0.5">{edu.institution}</div>
                      {edu.location && (
                        <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                          <MapPin size={11} />
                          {edu.location}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar size={11} />
                        {edu.period}
                      </div>
                      {edu.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 border border-teal-200 text-teal-700 font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-blue-600" />
              <h3 className="text-slate-900 font-semibold text-lg">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-200 hover:bg-blue-50/30 transition-colors duration-150"
                >
                  <div>
                    <div className="text-slate-900 text-sm font-semibold">{cert.name}</div>
                    <div className="text-blue-600 text-xs mt-0.5">{cert.issuer}</div>
                  </div>
                  <div className="shrink-0 text-xs text-slate-400 mt-0.5">{cert.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
