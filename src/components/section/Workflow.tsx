"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Monitor,
  Smartphone,
  Code2,
  Layers,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe,
  GitMerge,
  Zap,
  Lock,
  BarChart3,
} from "lucide-react";

/* ── Service Data ──────────────────────────────────────────────── */
const workflowsData = [
  {
    icon: <Monitor size={32} />,
    title: "A Website That Works Hard For You",
    description:
      "Your website is your best salesperson — it works 24/7. We build ones that look stunning, load fast, and turn visitors into real paying customers.",
    colorLight: "#059669",
    colorDark: "#9cfeca",
    stat: "200+",
    statLabel: "Sites Launched",
  },
  {
    icon: <Smartphone size={32} />,
    title: "An App Your Customers Actually Use",
    description:
      "Most of your customers are on their phones. We put your business right in their hands with a smooth, beautiful app they will open every single day.",
    colorLight: "#047857",
    colorDark: "#9cfeca",
    stat: "50+",
    statLabel: "Apps Live",
  },
  {
    icon: <Code2 size={32} />,
    title: "All Your Business Tools, Connected",
    description:
      "Tired of copy-pasting between apps? We link all your business software together so everything runs automatically and nothing falls through the cracks.",
    colorLight: "#065f46",
    colorDark: "#9cfeca",
    stat: "99%",
    statLabel: "On-Time Delivery",
  },
  {
    icon: <Layers size={32} />,
    title: "A Look That Builds Instant Trust",
    description:
      "People judge your business by how it looks online. We design experiences so polished and professional that customers trust you before they even reach out.",
    colorLight: "#059669",
    colorDark: "#9cfeca",
    stat: "98%",
    statLabel: "Client Satisfaction",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "We Stay With You After Launch",
    description:
      "Most agencies disappear once the project is done. We don't. We keep your business online, safe, fast, and growing — every day, without interruption.",
    colorLight: "#047857",
    colorDark: "#3ae7b5",
    stat: "24/7",
    statLabel: "Always Here",
  },
];

/* ── Visual helpers ─────────────────────────────────────────────── */
const GlowOrb = ({ color }: { color: string }) => (
  <div
    className="absolute w-[340px] h-[340px] rounded-full blur-[70px] -z-10 will-change-transform transform-gpu bg-[radial-gradient(circle,var(--orb-color)_0%,transparent_70%)]"
    style={{ "--orb-color": `${color}28` } as React.CSSProperties}
  />
);

const CenterBall = ({
  color,
  icon,
  stat,
  label,
}: {
  color: string;
  icon: React.ReactNode;
  stat: string;
  label: string;
}) => (
  <div
    className="relative w-[230px] h-[230px] rounded-full flex flex-col items-center justify-center z-10 select-none border border-[var(--color-40)] bg-card shadow-[0_0_60px_var(--color-40),inset_0_0_30px_var(--color-0a)] will-change-transform transform-gpu"
    style={{
      "--color-40": `${color}40`,
      "--color-0a": `${color}0a`,
    } as React.CSSProperties}
  >
    <div style={{ color }} className="mb-2">
      {icon}
    </div>
    <span className="text-5xl font-extrabold text-foreground tracking-tighter">{stat}</span>
    <span
      className="text-[10px] tracking-widest font-semibold uppercase mt-1"
      style={{ color }}
    >
      {label}
    </span>
  </div>
);

/* ── Visual 0: Web App ─────────────────────────────────────────── */
const Visual0 = ({ isDark }: { isDark: boolean }) => {
  const positions = ["top-[8%] left-[12%]", "top-[10%] right-[8%]", "bottom-[8%] left-[36%]"];
  const color = isDark ? "#9cfeca" : "#059669";
  
  return (
    <div className="relative w-full flex items-center justify-center py-10 min-h-[360px]">
      <GlowOrb color={color} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full border border-dashed will-change-transform"
        style={{ borderColor: `${color}22` }}
      />
      <CenterBall color={color} icon={<Monitor size={32} strokeWidth={1.5} />} stat="100+" label="Apps Shipped" />
      
      {["<App/>", "{API}", "</div>"].map((tag, i) => (
        <motion.div
          key={tag}
          animate={{ y: [0, -8 - i * 2, 0] }}
          transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className={`absolute px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold z-20 border bg-card shadow-[0_0_16px_var(--shadow-color)] will-change-transform ${positions[i]}`}
          style={{ borderColor: `${color}22`, color: color, "--shadow-color": `${color}18` } as any}
        >
          {tag}
        </motion.div>
      ))}
    </div>
  );
};

/* ── Visual 1: Mobile Apps ─────────────────────────────────────── */
const Visual1 = ({ isDark }: { isDark: boolean }) => {
  const color = isDark ? "#3ae7b5" : "#047857";
  return (
    <div className="relative w-full flex items-center justify-center py-10 min-h-[360px]">
      <GlowOrb color={color} />
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.15 + i * 0.08, 1], opacity: [0.15, 0, 0.15] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeOut", delay: i * 0.4 }}
          className="absolute rounded-full border will-change-transform"
          style={{
            borderColor: `${color}40`,
            width: `${180 + i * 45}px`,
            height: `${180 + i * 45}px`,
          }}
        />
      ))}
      <CenterBall color={color} icon={<Smartphone size={32} strokeWidth={1.5} />} stat="50+" label="Apps Live" />
      
      {[
        { label: "iOS", pos: "top-[8%] left-[14%]", delay: 0, dur: 3.5 },
        { label: "APK", pos: "top-[10%] right-[8%]", delay: 0.6, dur: 4.5 },
        { label: "PWA", pos: "bottom-[8%] left-[34%]", delay: 1.2, dur: 4 },
      ].map(({ label, pos, delay, dur }) => (
        <motion.div
          key={label}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
          className={`absolute ${pos} w-[66px] h-[66px] rounded-full flex items-center justify-center z-20 text-[11px] font-bold border bg-card shadow-[0_0_20px_var(--shadow-color)] will-change-transform`}
          style={{ color: color, borderColor: `${color}30`, "--shadow-color": `${color}20` } as any}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
};

/* ── Visual 2: API & Backend ───────────────────────────────────── */
const Visual2 = ({ isDark }: { isDark: boolean }) => {
  const colorOrb = isDark ? "#07694a" : "#065f46";
  const colorElems = isDark ? "#9cfeca" : "#059669";
  
  return (
    <div className="relative w-full flex items-center justify-center py-10 min-h-[360px]">
      <GlowOrb color={colorOrb} />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full border border-dashed will-change-transform"
        style={{ borderColor: `${colorOrb}30` }}
      />
      <CenterBall color={colorElems} icon={<Code2 size={32} strokeWidth={1.5} />} stat="99.9%" label="Uptime SLA" />
      
      {[
        { Icon: GitMerge, pos: "top-[8%] left-[14%]", delay: 0, dur: 4 },
        { Icon: Cpu, pos: "top-[10%] right-[8%]", delay: 0.5, dur: 5 },
        { Icon: Globe, pos: "bottom-[8%] left-[36%]", delay: 1, dur: 4.5 },
      ].map(({ Icon, pos, delay, dur }) => (
        <motion.div
          key={pos}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
          className={`absolute ${pos} w-[66px] h-[66px] rounded-full flex items-center justify-center z-20 border bg-card shadow-[0_0_20px_var(--shadow-color)] will-change-transform`}
          style={{ borderColor: `${colorElems}25`, "--shadow-color": `${colorElems}15` } as any}
        >
          <Icon size={24} color={colorElems} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── Visual 3: UI/UX ──────────────────────────────────────────── */
const Visual3 = ({ isDark }: { isDark: boolean }) => {
  const positions = ["top-[8%] left-[12%]", "top-[10%] right-[8%]", "bottom-[8%] left-[36%]"];
  const color = isDark ? "#9cfeca" : "#059669";
  return (
    <div className="relative w-full flex items-center justify-center py-10 min-h-[360px]">
      <GlowOrb color={color} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full border border-dashed will-change-transform"
        style={{ borderColor: `${color}20` }}
      />
      <CenterBall color={color} icon={<Layers size={32} strokeWidth={1.5} />} stat="10x" label="Engagement" />
      
      {["UX", "UI", "DS"].map((label, i) => (
        <motion.div
          key={label}
          animate={{ y: [0, -8 - i * 2, 0] }}
          transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className={`absolute z-20 w-[66px] h-[66px] rounded-full flex items-center justify-center text-[12px] font-bold border bg-card shadow-[0_0_20px_var(--shadow-color)] will-change-transform ${positions[i]}`}
          style={{ color: color, borderColor: `${color}30`, "--shadow-color": `${color}18` } as any}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
};

/* ── Visual 4: Support & Security ─────────────────────────────── */
const Visual4 = ({ isDark }: { isDark: boolean }) => {
  const color = isDark ? "#3ae7b5" : "#047857";
  return (
    <div className="relative w-full flex items-center justify-center py-10 min-h-[360px]">
      <GlowOrb color={color} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full border border-dashed will-change-transform"
        style={{ borderColor: `${color}25` }}
      />
      <CenterBall color={color} icon={<ShieldCheck size={32} strokeWidth={1.5} />} stat="24/7" label="Always On" />
      
      {[
        { Icon: Lock, pos: "top-[8%] left-[14%]", delay: 0, dur: 4 },
        { Icon: Zap, pos: "top-[10%] right-[8%]", delay: 0.5, dur: 5 },
        { Icon: BarChart3, pos: "bottom-[8%] left-[36%]", delay: 1, dur: 4.5 },
      ].map(({ Icon, pos, delay, dur }) => (
        <motion.div
          key={pos}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
          className={`absolute ${pos} w-[66px] h-[66px] rounded-full flex items-center justify-center z-20 border bg-card shadow-[0_0_20px_var(--shadow-color)] will-change-transform`}
          style={{ borderColor: `${color}30`, "--shadow-color": `${color}20` } as any}
        >
          <Icon size={24} color={color} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── Main Component ────────────────────────────────────────────── */
const WorkFlows: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const visuals = [<Visual0 isDark={isDark} />, <Visual1 isDark={isDark} />, <Visual2 isDark={isDark} />, <Visual3 isDark={isDark} />, <Visual4 isDark={isDark} />];

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="workflows" className="py-20 bg-background relative overflow-hidden">
      {/* Background ambient glow - static to avoid repaint */}
      <div className="absolute inset-0 pointer-events-none transform-gpu">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 bg-secondary" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-8 bg-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">
            How We Help Your Business
          </p>
          <h2 className="text-3xl md:text-4xl font-medium font-syne mb-6 leading-tight">
            Five Ways We{" "}
            <span className="text-secondary">Grow Your Business Online</span>
          </h2>
          <p className="text-black dark:text-gray-400 max-w-2xl mx-auto font-space-grotesk text-lg">
            From your first website to a full digital business — we handle the hard stuff so you can focus on what you do best.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-4 py-8" ref={timelineRef}>
          {/* Scroll progress line */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] md:-translate-x-1/2 bg-foreground/8 z-0 overflow-hidden">
            <motion.div
              className="w-full h-full origin-top bg-[linear-gradient(180deg,#9cfeca_0%,#3ae7b5_50%,#07694a_100%)] shadow-[0_0_12px_#9cfeca80] will-change-transform"
              style={{ scaleY }}
            />
          </div>

          {workflowsData.map((service, index) => {
            const isLeft = index % 2 === 0;
            const activeColor = isDark ? service.colorDark : service.colorLight;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row w-full items-center min-h-[200px] md:min-h-[400px] gap-4 md:gap-8 py-4 md:py-0"
                style={{
                  "--accent": activeColor,
                  "--accent-12": `${activeColor}12`,
                  "--accent-18": `${activeColor}18`,
                  "--accent-20": `${activeColor}20`,
                  "--accent-30": `${activeColor}30`,
                  "--accent-60": `${activeColor}60`,
                } as React.CSSProperties}
              >
                {/* Timeline Node */}
                <div className="absolute top-1/2 left-[20px] md:left-1/2 w-12 h-12 rounded-full -translate-x-1/2 -translate-y-1/2 z-[2] flex items-center justify-center text-sm font-bold text-black font-syne transform-gpu bg-secondary shadow-[0_0_20px_rgba(156,254,202,0.6)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {isLeft ? (
                  <>
                    {/* Card LEFT */}
                    <div className="w-[90%] ml-[10%] md:ml-0 md:w-[calc(50%-3rem)] md:pr-12">
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="will-change-transform group relative p-8 md:p-10 rounded-[24px] border border-foreground/10 bg-foreground/5 overflow-hidden transition-[transform,box-shadow] duration-500 cursor-default md:-rotate-1 hover:!-translate-y-[8px] hover:!rotate-0 hover:!scale-[1.02] hover:shadow-[0_0_40px_var(--accent-18)]"
                      >
                        <div className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center mb-7 border transition-colors duration-300 bg-[var(--accent-12)] border-[var(--accent-30)] text-[var(--accent)] shadow-[0_0_10px_var(--accent-18)]">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold font-syne mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-black dark:text-gray-400 font-space-grotesk leading-relaxed text-sm">
                          {service.description}
                        </p>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[24px] bg-[linear-gradient(90deg,var(--accent),transparent)]" />
                      </motion.div>
                    </div>

                    {/* Visual RIGHT */}
                    <motion.div
                      className="hidden md:flex w-[calc(50%-3rem)] items-center justify-center relative overflow-visible will-change-transform"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: "-80px" }}
                    >
                      {visuals[index]}
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Visual LEFT */}
                    <motion.div
                      className="hidden md:flex w-[calc(50%-3rem)] items-center justify-center relative overflow-visible will-change-transform"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: "-80px" }}
                    >
                      {visuals[index]}
                    </motion.div>

                    {/* Card RIGHT */}
                    <div className="w-[90%] ml-[10%] md:w-[calc(50%-3rem)] md:ml-auto md:pl-12">
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="will-change-transform group relative p-8 md:p-10 rounded-[24px] border border-foreground/10 bg-foreground/5 overflow-hidden transition-[transform,box-shadow] duration-500 cursor-default md:rotate-1 hover:!-translate-y-[8px] hover:!rotate-0 hover:!scale-[1.02] hover:shadow-[0_0_40px_var(--accent-18)]"
                      >
                        <div className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center mb-7 border transition-colors duration-300 bg-[var(--accent-12)] border-[var(--accent-30)] text-[var(--accent)] shadow-[0_0_10px_var(--accent-18)]">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold font-syne mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-black dark:text-gray-400 font-space-grotesk leading-relaxed text-sm">
                          {service.description}
                        </p>

                        <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[24px] bg-[linear-gradient(90deg,var(--accent),transparent)]" />
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkFlows;
