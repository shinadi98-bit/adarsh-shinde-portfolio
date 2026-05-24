"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "border-blue-200 bg-blue-50/60 hover:bg-blue-50",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    color: "border-teal-200 bg-teal-50/60 hover:bg-teal-50",
    iconColor: "text-teal-600 bg-teal-100",
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null as string | null,
    color: "border-slate-200 bg-slate-50/60 hover:bg-slate-50",
    iconColor: "text-slate-600 bg-slate-100",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const allItems = [
    ...contactItems,
    ...(profile.linkedin
      ? [{
          icon: LinkedinIcon,
          label: "LinkedIn",
          value: "linkedin.com/in/adarsh-shinde",
          href: profile.linkedin,
          color: "border-blue-200 bg-blue-50/60 hover:bg-blue-50",
          iconColor: "text-blue-600 bg-blue-100",
        }]
      : []),
    ...(profile.github
      ? [{
          icon: GithubIcon,
          label: "GitHub",
          value: "github.com/shinadi98-bit",
          href: profile.github,
          color: "border-slate-200 bg-slate-50/60 hover:bg-slate-100",
          iconColor: "text-slate-700 bg-slate-200",
        }]
      : []),
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Let&apos;s connect</h2>
          <p className="text-slate-500 text-base mt-3 max-w-xl mx-auto">
            Open to roles in fintech, investment research, financial analysis, business analysis,
            and AI-adjacent finance operations.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {allItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className={`flex items-center gap-4 p-5 rounded-xl border shadow-sm transition-all duration-150 cursor-pointer ${item.color}`}>
                  <div className={`p-2.5 rounded-lg ${item.iconColor}`}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-0.5">{item.label}</div>
                    <div className={`text-sm font-semibold text-slate-800 flex items-center gap-1.5`}>
                      {item.value}
                      {item.href && <ExternalLink size={11} className="text-slate-400" />}
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : content}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="text-center"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold transition-colors duration-200 shadow-md cursor-pointer"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
