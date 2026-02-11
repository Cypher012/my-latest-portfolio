"use client";

import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Home, User, Code2, Briefcase, FolderOpen, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

function DockItem({
  item,
  isActive,
  onClick,
  mouseX,
}: {
  item: (typeof navLinks)[0];
  isActive: boolean;
  onClick: () => void;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [tooltip, setTooltip] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return 999;
    return Math.abs(val - (bounds.left + bounds.width / 2));
  });

  const scale = useTransform(distance, [0, 50, 100], [1.5, 1.2, 1]);
  const springScale = useSpring(scale, { stiffness: 350, damping: 25 });
  const Icon = item.icon;

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      style={{ scale: springScale }}
      whileTap={{ scale: 0.85 }}
      onHoverStart={() => setTooltip(true)}
      onHoverEnd={() => setTooltip(false)}
      className="relative flex flex-col items-center cursor-pointer origin-bottom"
      aria-label={item.label}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-medium whitespace-nowrap pointer-events-none"
          >
            {item.label}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-400/40"
            : "text-slate-500 hover:text-blue-600"
        }`}
      >
        <Icon size={19} />
      </div>

      {/* Active dot */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="dock-active"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-blue-600"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ── Desktop floating navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center px-6 pt-5"
      >
        <nav
          className={`w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-2xl bg-white border border-slate-200 transition-all duration-300 ${
            scrolled
              ? "shadow-lg shadow-slate-900/10"
              : "shadow-md shadow-slate-900/5"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="relative group cursor-pointer"
            aria-label="Go to top"
          >
            <span
              style={{
                fontFamily: "var(--font-roboto-slab)",
                fontWeight: 700,
                color: "#0f172a",
                letterSpacing: "0.12em",
              }}
              className="text-xl uppercase"
            >
              Cipher
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300" />
          </button>

          {/* Links */}
          <ul className="flex items-center gap-1">
            {navLinks.slice(1).map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className={`relative px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-blue-50 rounded-lg border border-blue-100"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-300 cursor-pointer shine"
          >
            Hire me
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile bottom dock ── */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="fixed bottom-6 left-0 right-0 flex justify-center z-50 md:hidden px-4"
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <div className="flex items-center gap-2 px-4 py-3 rounded-[28px] bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl shadow-slate-900/20">
          {navLinks.map((item) => (
            <DockItem
              key={item.href}
              item={item}
              isActive={activeSection === item.href.slice(1)}
              onClick={() => scrollTo(item.href)}
              mouseX={mouseX}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
