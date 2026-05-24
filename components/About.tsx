"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";

const quickFacts = [
  { label: "MBA Finance", detail: "FLAME University, Pune · 2024–26" },
  { label: "CA Inter Group I", detail: "ICAI Qualified" },
  { label: "Buy-Side Equity Research", detail: "₹350Cr+ AUM advisory" },
  { label: "SAP FICO / ERP Consulting", detail: "HCL Technologies · 200+ incidents resolved" },
  { label: "AI-Assisted Automation", detail: "Claude Code · n8n · Relevance AI" },
  { label: "Tools", detail: "Bloomberg · Python · Tableau · Excel" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Finance-first. Automation-enabled.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left: Narrative — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-4 text-slate-600 text-[15px] leading-relaxed"
          >
            {profile.about.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "₹350Cr+", label: "AUM Advisory" },
                { value: "200+", label: "SAP Incidents" },
                { value: "150+", label: "Clients Managed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm"
                >
                  <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick facts — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
                Quick Profile
              </div>
              <div className="space-y-4">
                {quickFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-teal-500" />
                    <div>
                      <div className="text-sm font-semibold text-slate-800">{fact.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{fact.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
