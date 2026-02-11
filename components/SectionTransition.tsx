"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionTransitionProps {
  variant?: "dots" | "slash" | "line";
}

export default function SectionTransition({
  variant = "dots",
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (variant === "slash") {
    return (
      <div ref={ref} className="relative h-16 overflow-hidden my-4">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #0A66C2 20%, #3B82F6 50%, #0A66C2 80%, transparent)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-2 h-2 bg-blue-500 rotate-45" />
        </motion.div>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div
        ref={ref}
        className="relative h-12 flex items-center justify-center my-4"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xs h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #3B82F6, transparent)",
            transformOrigin: "center",
          }}
        />
      </div>
    );
  }

  // dots variant (default)
  const dots = Array.from({ length: 7 });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-2 py-8 my-4"
      aria-hidden="true"
    >
      {dots.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{
            duration: 0.4,
            delay: i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-full"
          style={{
            width: i === 3 ? 6 : i === 2 || i === 4 ? 4 : 3,
            height: i === 3 ? 6 : i === 2 || i === 4 ? 4 : 3,
            background:
              i === 3
                ? "#0A66C2"
                : i === 2 || i === 4
                  ? "#3B82F6"
                  : "rgba(10, 102, 194, 0.2)",
          }}
        />
      ))}
    </div>
  );
}
