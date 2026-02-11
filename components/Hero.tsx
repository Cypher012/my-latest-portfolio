"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function XIcon({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.631 5.906-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { resumeData } from "@/lib/data";

function MagneticButton({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 4);
    y.set((e.clientY - rect.top - rect.height / 2) / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </Tag>
  );
}

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const titleRef = useRef(resumeData.title);

  useEffect(() => {
    const title = titleRef.current;
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedTitle(title.slice(0, i + 1));
        i++;
        if (i >= title.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(delay);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-24"
      style={{ background: "#f8f9fc" }}
      aria-label="Hero section"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 40%, rgba(10,102,194,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Name */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="text-[38px] md:text-6xl lg:text-8xl tracking-tight leading-tight whitespace-nowrap text-[#363738]"
            style={{
              fontFamily: "var(--font-roboto-slab)",
              fontWeight: 700,
              textShadow:
                "2px 2px 0px rgba(15,23,42,0.12), 4px 4px 0px rgba(15,23,42,0.06)",
            }}
          >
            {resumeData.name}
          </motion.h1>
        </div>

        {/* Typed title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-8 h-10 text-slate-600"
        >
          <span className="gradient-text">{typedTitle}</span>
          <span
            className="inline-block w-0.5 h-6 bg-blue-500 ml-1 align-middle"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-balance"
        >
          CS student at OAU building production-ready apps. Specializing in{" "}
          <span className="text-slate-800 font-medium">TypeScript/React</span>{" "}
          frontends and <span className="text-slate-800 font-medium">Go</span>{" "}
          backends.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-base transition-all duration-300 shine flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-200"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </MagneticButton>

          <MagneticButton
            className="group px-8 py-4 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 bg-white hover:bg-blue-50 rounded-lg font-medium text-base transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
            <ArrowDownRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            />
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/Cypher012",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/ayowole-ojoade-aa1050257",
              label: "LinkedIn",
            },
            { icon: XIcon, href: "https://x.com/blaqcipher02", label: "X" },
            { icon: Mail, href: "mailto:ayoojoade@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-300 shadow-sm"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent animate-bounce-scroll" />
      </motion.div>
    </section>
  );
}
