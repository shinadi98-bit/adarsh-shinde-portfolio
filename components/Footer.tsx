"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-slate-600 font-medium">{profile.name}</span>{" "}
          · {profile.location}
        </div>

        <div className="text-slate-300 text-xs">
          Built with Next.js · Tailwind · Framer Motion
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 text-xs transition-colors duration-150 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={13} />
          Back to top
        </motion.button>
      </div>
    </footer>
  );
}
