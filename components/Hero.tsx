"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ChevronDown, BookOpen, FolderOpen, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

const tiles = [
  { label: "Equity Research",    sub: "DCF · Comps · Bloomberg",  color: "border-cyan-500/30  bg-cyan-500/5  text-cyan-300"   },
  { label: "AI Automation",      sub: "Claude · n8n · Relevance",  color: "border-violet-500/30 bg-violet-500/5 text-violet-300" },
  { label: "SAP FICO",           sub: "GL · Tax · Cost Objects",   color: "border-teal-500/30   bg-teal-500/5   text-teal-300"   },
  { label: "Quant Research",     sub: "FinBERT · Sentiment · Py",  color: "border-slate-500/30  bg-slate-500/5  text-slate-300"  },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#05070A] overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-8"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,1) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6"
            >
              <MapPin size={12} /> {profile.location} · Open to opportunities
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] tracking-tight mb-4"
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="text-cyan-400">{profile.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-xl md:text-2xl text-slate-300 font-light mb-2"
            >
              Finance, Research and AI Automation
            </motion.p>

            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="text-sm text-slate-500 mb-4"
            >
              Bridging markets, systems, data, and execution.
            </motion.p>

            <motion.p
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[15px] text-slate-400 leading-relaxed max-w-lg mb-8"
            >
              MBA Finance candidate with buy-side equity research, SAP FICO, accounts and tax experience,
              and AI-assisted automation projects across research, trading workflows, and digital products.
            </motion.p>

            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("resumes")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#05070A] text-sm font-bold transition-colors duration-200 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <BookOpen size={15} /> View Resume Versions
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 hover:bg-white/10 text-white text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <FolderOpen size={15} /> Explore Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 text-teal-400 text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <MessageSquare size={15} /> Contact Me
              </button>
            </motion.div>

            <motion.div
              custom={6} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-5 text-sm text-slate-600"
            >
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer">
                <Mail size={13} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer">
                <Phone size={13} /> {profile.phone}
              </a>
            </motion.div>
          </div>

          {/* Right: Animated Finance Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 shadow-2xl shadow-black/60">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 60%)" }} />

                {/* Header bar */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div>
                    <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-0.5">
                      Finance Intelligence
                    </div>
                    <div className="text-sm font-semibold text-slate-300">
                      Research · Systems · Automation
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                </div>

                {/* 2x2 expertise tiles */}
                <div className="grid grid-cols-2 gap-2.5 mb-4 relative z-10">
                  {tiles.map((tile, i) => (
                    <motion.div
                      key={tile.label}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                      className={`rounded-xl p-3 border ${tile.color}`}
                    >
                      <div className="text-xs font-semibold mb-0.5">{tile.label}</div>
                      <div className="text-[10px] text-slate-500 leading-tight">{tile.sub}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated chart line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="rounded-xl bg-white/[0.03] border border-white/8 p-3 mb-3 relative z-10"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-slate-600 font-medium">Signal output</span>
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-signal" />
                      Active
                    </div>
                  </div>
                  <svg viewBox="0 0 260 48" className="w-full h-9" aria-hidden="true">
                    <defs>
                      <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[10, 25, 40].map((y) => (
                      <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    ))}
                    <path
                      d="M0,42 C18,38 32,30 52,24 C72,18 88,26 108,18 C128,10 144,14 162,8 C180,4 200,7 220,5 L260,3"
                      fill="url(#hero-fill)"
                      className="animate-draw-chart"
                      style={{ fill: "transparent" }}
                    />
                    <path
                      d="M0,42 C18,38 32,30 52,24 C72,18 88,26 108,18 C128,10 144,14 162,8 C180,4 200,7 220,5 L260,3"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className="animate-draw-chart"
                    />
                  </svg>
                </motion.div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 relative z-10">
                  {[
                    { v: "Rs.350Cr+", l: "AUM Research" },
                    { v: "200+",    l: "SAP Incidents" },
                    { v: "148K+",   l: "Observations"  },
                  ].map((s) => (
                    <motion.div
                      key={s.l}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.4 }}
                      className="rounded-lg bg-white/[0.04] border border-white/8 py-2 text-center"
                    >
                      <div className="text-xs font-bold text-white">{s.v}</div>
                      <div className="text-[9px] text-slate-600 mt-0.5">{s.l}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-700 cursor-pointer"
          onClick={() => scrollTo("about")}
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={15} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
