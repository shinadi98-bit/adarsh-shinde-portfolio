"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown, Download, FolderOpen, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

const expertiseCards = [
  {
    label: "Equity Research",
    sub: "DCF · Comps · Valuation",
    icon: "📈",
    color: "bg-blue-50 border-blue-100",
    text: "text-blue-800",
  },
  {
    label: "AI Automation",
    sub: "Claude · n8n · Relevance AI",
    icon: "⚡",
    color: "bg-teal-50 border-teal-100",
    text: "text-teal-800",
  },
  {
    label: "SAP FICO / ERP",
    sub: "GL · Taxation · Cost Objects",
    icon: "🏛",
    color: "bg-slate-100 border-slate-200",
    text: "text-slate-800",
  },
  {
    label: "Quant Research",
    sub: "FinBERT · Sentiment · Python",
    icon: "🔬",
    color: "bg-violet-50 border-violet-100",
    text: "text-violet-800",
  },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#F8F9FC]">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(13,148,136,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(37,99,235,0.05) 0%, transparent 50%)",
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium mb-6"
            >
              <MapPin size={12} />
              {profile.location} · Open to opportunities
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4"
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="text-teal-600">{profile.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-slate-600 font-light mb-3"
            >
              Finance, Research & AI Automation
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base text-slate-500 leading-relaxed mb-2 max-w-lg"
            >
              Bridging financial analysis, market research, ERP systems, and AI-enabled workflows.
            </motion.p>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[15px] text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              MBA Finance candidate with buy-side equity research, SAP FICO, and AI-assisted
              automation experience. I build finance-first systems across research, trading
              workflows, and digital productivity.
            </motion.p>

            {/* Role pills */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2 mb-8"
            >
              {["MBA Finance", "Equity Research", "SAP FICO", "AI Automation"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <FolderOpen size={15} />
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <Download size={15} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer"
              >
                <MessageSquare size={15} />
                Contact Me
              </button>
            </motion.div>

            {/* Contact meta */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-5 text-sm text-slate-400"
            >
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-slate-700 transition-colors cursor-pointer">
                <Mail size={13} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 hover:text-slate-700 transition-colors cursor-pointer">
                <Phone size={13} />
                {profile.phone}
              </a>
            </motion.div>
          </div>

          {/* ── Right: Expertise Dashboard Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 relative overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                    Expertise Overview
                  </div>
                  <div className="text-sm font-semibold text-slate-700">
                    Finance · Research · Automation
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* 2×2 expertise cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {expertiseCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className={`rounded-xl p-3.5 border ${card.color}`}
                  >
                    <div className="text-lg mb-1" role="img" aria-hidden="true">
                      {card.icon}
                    </div>
                    <div className={`text-sm font-semibold mb-0.5 ${card.text}`}>
                      {card.label}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight">{card.sub}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mini chart strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="rounded-xl bg-slate-50 border border-slate-100 p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-slate-400 font-medium">Research output signal</span>
                  <span className="text-[11px] text-teal-600 font-semibold">↑ Active</span>
                </div>
                <svg viewBox="0 0 240 44" className="w-full h-9" aria-hidden="true">
                  <defs>
                    <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,38 C20,36 35,30 55,26 C75,22 90,28 110,20 C130,14 148,16 165,10 C182,6 200,9 220,7 L240,5"
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,38 C20,36 35,30 55,26 C75,22 90,28 110,20 C130,14 148,16 165,10 C182,6 200,9 220,7 L240,5 L240,44 L0,44 Z"
                    fill="url(#chart-fill)"
                  />
                </svg>
              </motion.div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { v: "₹350Cr+", l: "AUM Advisory" },
                  { v: "200+", l: "SAP Incidents" },
                  { v: "148K+", l: "Observations" },
                ].map((s) => (
                  <div key={s.l} className="text-center rounded-lg bg-slate-50 border border-slate-100 py-2">
                    <div className="text-sm font-bold text-slate-800">{s.v}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 cursor-pointer"
          onClick={() => scrollTo("about")}
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
