"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      aria-label="Experience section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 70% 50%, rgba(10,102,194,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mb-16"
        >
          <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-transparent" />

          <div className="space-y-10">
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="relative flex gap-8"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center shadow-sm z-10 relative">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 40px rgba(10,102,194,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex-1 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-200 transition-all duration-300 group"
                >
                  {/* Role + date */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 flex-shrink-0">
                      <Calendar size={11} />
                      {exp.date}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-100 my-4" />

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-slate-600 text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-blue-400 flex-shrink-0 mt-0.5"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
