"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { resumeData } from "@/lib/data";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";

function CountUp({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(inViewRef, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000 });

  useEffect(() => {
    if (isInView) animate(motionVal, target, { duration, ease: "easeOut" });
  }, [isInView, target, duration, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [spring, suffix]);

  return (
    <span ref={inViewRef}>
      <span ref={ref}>0{suffix}</span>
    </span>
  );
}

const stats = [
  { label: "Years Experience", value: 1, suffix: "+", icon: Briefcase },
  { label: "Projects Shipped", value: 10, suffix: "+", icon: Code2 },
  { label: "Technologies", value: 15, suffix: "+", icon: Code2 },
  { label: "Countries Worked With", value: 2, suffix: "", icon: MapPin },
];

export default function About() {
  const edu = resumeData.education[0];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      aria-label="About section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 80% 50%, rgba(10,102,194,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            About Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
            Building the web,{" "}
            <span className="gradient-text">one commit at a time</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              {resumeData.summary}
            </motion.p>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm group hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-800 font-semibold font-heading">
                    {edu.degree}
                  </p>
                  <p className="text-slate-500 text-sm mt-0.5">
                    {edu.institution} · {edu.year}
                  </p>
                  <p className="text-slate-400 text-sm mt-0.5">
                    {edu.expected}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.coursework.split(", ").map((course) => (
                      <span
                        key={course}
                        className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-500 text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="flex items-center gap-3 text-slate-500"
            >
              <MapPin size={16} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm">
                Based in Nigeria · Open to remote worldwide
              </span>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(10,102,194,0.12)",
                }}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm group hover:border-blue-200 transition-all duration-300 cursor-default"
              >
                <div className="text-4xl font-heading font-bold gradient-text mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
