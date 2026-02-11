"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { resumeData } from "@/lib/data";

function XIcon({
  size = 17,
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

function MagneticLink({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 3);
        y.set((e.clientY - rect.top - rect.height / 2) / 3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@Cypher012",
    href: "https://github.com/Cypher012",
    style: "hover:border-slate-400 hover:bg-slate-50",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Ayowole Ojoade",
    href: "https://www.linkedin.com/in/ayowole-ojoade-aa1050257",
    style: "hover:border-blue-300 hover:bg-blue-50",
  },
  {
    icon: XIcon,
    label: "X",
    handle: "@blaqcipher02",
    href: "https://x.com/blaqcipher02",
    style: "hover:border-slate-400 hover:bg-slate-50",
  },
  {
    icon: Mail,
    label: "Email",
    handle: resumeData.contact.email,
    href: `mailto:${resumeData.contact.email}`,
    style: "hover:border-blue-300 hover:bg-blue-50",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
      aria-label="Contact section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 50% 50%, rgba(10,102,194,0.05) 0%, transparent 70%), #f8f9fc",
        }}
      />

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 opacity-40"
          style={{
            background: "linear-gradient(to bottom, transparent, #0a66c2)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 opacity-40"
          style={{
            background: "linear-gradient(to top, transparent, #0a66c2)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Let&apos;s build something{" "}
          <span className="gradient-text">together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Whether you have a project in mind, need a collaborator, or just want
          to say hi — my inbox is always open.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <MagneticLink
            href={`mailto:${resumeData.contact.email}`}
            ariaLabel="Send email"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl border border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md shine"
          >
            <span className="font-heading font-bold text-xl md:text-2xl text-slate-800 group-hover:text-blue-700 transition-colors">
              {resumeData.contact.email}
            </span>
            <ArrowUpRight
              size={20}
              className="text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </MagneticLink>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="w-full max-w-sm mx-auto h-px mb-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(10,102,194,0.3), transparent)",
            transformOrigin: "center",
          }}
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, label, handle, href, style }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${label}: ${handle}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group ${style}`}
            >
              <Icon
                size={17}
                className="text-slate-400 group-hover:text-slate-700 transition-colors"
              />
              <div className="text-left">
                <p className="text-slate-400 text-xs">{label}</p>
                <p className="text-slate-700 text-sm font-medium">{handle}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm"
        >
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>{resumeData.contact.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Open to work</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
