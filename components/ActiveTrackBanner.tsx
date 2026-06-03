"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { profileTracks } from "@/data/profile";

const colorMap: Record<string, string> = {
  cyan:   "text-cyan-400   border-cyan-500/30   bg-cyan-500/8",
  teal:   "text-teal-400   border-teal-500/30   bg-teal-500/8",
  gold:   "text-amber-400  border-amber-500/30  bg-amber-500/8",
  violet: "text-violet-400 border-violet-500/30 bg-violet-500/8",
};

interface Props {
  activeTrack: string | null;
  onClear: () => void;
}

export default function ActiveTrackBanner({ activeTrack, onClear }: Props) {
  const track = profileTracks.find((t) => t.id === activeTrack);
  const scheme = colorMap[track?.color ?? "cyan"] ?? colorMap.cyan;

  return (
    <AnimatePresence>
      {activeTrack && track && (
        <motion.div
          key="track-banner"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden sticky top-16 z-40"
        >
          <div className={`border-b ${scheme} backdrop-blur-xl`}>
            <div className="max-w-6xl mx-auto px-6 h-10 flex items-center justify-between">
              <span className="text-xs font-medium">
                Viewing:{" "}
                <span className="font-semibold">{track.title}</span>
                {" "}profile. Relevant sections are highlighted below.
              </span>
              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={() =>
                    document.getElementById("resumes")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-[11px] font-semibold underline underline-offset-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                >
                  Jump to resume
                </button>
                <button
                  onClick={onClear}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-white transition-colors cursor-pointer"
                  aria-label="Clear track selection"
                >
                  <X size={13} /> Clear
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
