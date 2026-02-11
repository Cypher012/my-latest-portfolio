"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Code2, Globe, Server, Database, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code2,
  Frontend: Globe,
  Backend: Server,
  Databases: Database,
  "DevOps & Tools": Wrench,
};

const categoryStyles: Record<
  string,
  { card: string; icon: string; iconBg: string; tag: string }
> = {
  Languages: {
    card: "border-violet-200 hover:border-violet-300",
    icon: "text-violet-600",
    iconBg: "bg-violet-50 border-violet-100",
    tag: "bg-violet-50 border-violet-200 text-violet-700",
  },
  Frontend: {
    card: "border-blue-200 hover:border-blue-300",
    icon: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
    tag: "bg-blue-50 border-blue-200 text-blue-700",
  },
  Backend: {
    card: "border-cyan-200 hover:border-cyan-300",
    icon: "text-cyan-600",
    iconBg: "bg-cyan-50 border-cyan-100",
    tag: "bg-cyan-50 border-cyan-200 text-cyan-700",
  },
  Databases: {
    card: "border-emerald-200 hover:border-emerald-300",
    icon: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
    tag: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  "DevOps & Tools": {
    card: "border-orange-200 hover:border-orange-300",
    icon: "text-orange-600",
    iconBg: "bg-orange-50 border-orange-100",
    tag: "bg-orange-50 border-orange-200 text-orange-700",
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      aria-label="Skills section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 20% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
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
            Technical Skills
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
            Tools I work with
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {resumeData.skills.map((skill) => {
            const Icon = categoryIcons[skill.category] ?? Code2;
            const styles =
              categoryStyles[skill.category] ?? categoryStyles["Frontend"];
            const items = skill.items.split(", ");

            return (
              <motion.div
                key={skill.category}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  rotate: 0.5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`p-6 rounded-2xl border bg-white shadow-sm group overflow-hidden cursor-default transition-all duration-300 ${styles.card}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border ${styles.iconBg}`}
                  >
                    <Icon size={17} className={styles.icon} />
                  </div>
                  <h3 className="font-heading font-semibold text-slate-800 text-sm">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, rotate: -1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className={`px-3 py-1 rounded-lg border text-xs font-medium cursor-default ${styles.tag}`}
                    >
                      {item.trim()}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
