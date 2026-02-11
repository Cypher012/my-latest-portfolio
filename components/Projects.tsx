"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight, Zap, Terminal, Lock } from "lucide-react";
import { resumeData } from "@/lib/data";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const cardThemes = [
  {
    border: "border-blue-200 hover:border-blue-400",
    topBar: "#0a66c2",
    tag: "bg-blue-50 border-blue-200 text-blue-700",
    icon: Zap,
    shadow: "rgba(10,102,194,0.12)",
  },
  {
    border: "border-violet-200 hover:border-violet-400",
    topBar: "#7c3aed",
    tag: "bg-violet-50 border-violet-200 text-violet-700",
    icon: Github,
    shadow: "rgba(124,58,237,0.12)",
  },
  {
    border: "border-cyan-200 hover:border-cyan-400",
    topBar: "#0891b2",
    tag: "bg-cyan-50 border-cyan-200 text-cyan-700",
    icon: Terminal,
    shadow: "rgba(8,145,178,0.12)",
  },
  {
    border: "border-emerald-200 hover:border-emerald-400",
    topBar: "#059669",
    tag: "bg-emerald-50 border-emerald-200 text-emerald-700",
    icon: Lock,
    shadow: "rgba(5,150,105,0.12)",
  },
];

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof resumeData.projects)[0];
  index: number;
  featured?: boolean;
}) {
  const theme = cardThemes[index % cardThemes.length];
  const techItems = project.tech.split(", ");

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, boxShadow: `0 24px 48px ${theme.shadow}` }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl border bg-white shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300 ${theme.border}`}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${theme.topBar}, ${theme.topBar}88)`,
        }}
      />

      <div className={`flex flex-col flex-1 ${featured ? "p-8" : "p-6"}`}>
        {/* Status badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.inDevelopment && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              In Development
            </span>
          )}
          {project.openSource && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-medium">
              Open Source
            </span>
          )}
        </div>

        {/* Name */}
        <h3
          className={`font-heading font-bold text-slate-900 mb-3 ${featured ? "text-2xl" : "text-xl"}`}
        >
          {project.name}
        </h3>

        {/* Description */}
        <div className="flex-1 space-y-2 mb-5">
          {project.bullets.slice(0, featured ? 2 : 1).map((bullet, i) => (
            <p key={i} className="text-slate-500 text-sm leading-relaxed">
              {bullet}
            </p>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {techItems.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`px-2.5 py-1 rounded-lg border text-xs font-medium cursor-default ${theme.tag}`}
            >
              {tech.trim()}
            </motion.span>
          ))}
        </div>

        {/* Link */}
        <div className="pt-4 border-t border-slate-100">
          {project.url ? (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              whileHover={{ x: 2 }}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors group/link"
            >
              <Github size={14} />
              <span className="relative">
                Source Code
                <span className="absolute -bottom-px left-0 w-0 h-px bg-blue-500 group-hover/link:w-full transition-all duration-300" />
              </span>
              <ArrowUpRight
                size={12}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
            </motion.a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
              <Lock size={13} />
              Private repository
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [featured, ...rest] = resumeData.projects;

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      aria-label="Projects section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 50% 60%, rgba(10,102,194,0.04) 0%, transparent 70%)",
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
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Featured — spans 2 cols */}
          <div className="md:col-span-2">
            <ProjectCard project={featured} index={0} featured />
          </div>

          {/* Tall card */}
          <div className="md:row-span-2">
            <ProjectCard project={rest[0]} index={1} />
          </div>

          {/* Third */}
          <div>
            <ProjectCard project={rest[1]} index={2} />
          </div>

          {/* Fourth */}
          <div>
            <ProjectCard project={rest[2]} index={3} />
          </div>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            whileHover={{
              y: -8,
              boxShadow: "0 24px 48px rgba(10,102,194,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group rounded-2xl border border-dashed border-blue-300 hover:border-blue-400 bg-blue-50/50 hover:bg-blue-50 flex flex-col items-center justify-center p-8 text-center min-h-[180px] cursor-pointer transition-all duration-300"
          >
            <p className="font-heading font-bold text-slate-800 text-lg mb-1">
              More on GitHub
            </p>
            <p className="text-slate-500 text-sm mb-5">
              Explore all my repositories
            </p>
            <motion.a
              href="https://github.com/Cypher012"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-blue-200 text-blue-700 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 shadow-sm shine"
              aria-label="Visit GitHub profile"
            >
              <Github size={15} />
              @Cypher012
              <ArrowUpRight size={13} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
