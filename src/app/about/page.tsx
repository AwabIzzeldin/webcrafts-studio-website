"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// ---------- Shared Components ----------
const SectionHeading = ({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) => (
  <div className="space-y-4">
    {kicker && (
      <motion.p
        className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/60"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {kicker}
      </motion.p>
    )}

    <motion.h2
      className="text-4xl md:text-6xl font-semibold leading-[1.05] text-[#f5f2ee] drop-shadow-[0_6px_24px_rgba(244,124,97,0.15)]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {title}
    </motion.h2>

    {subtitle && (
      <motion.p
        className="max-w-xl text-base md:text-lg text-white/70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const CTA = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="pt-6"
  >
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-[#0a0014] bg-[#f47c61] font-semibold shadow-[0_10px_40px_-10px_rgba(244,124,97,0.7)] hover:shadow-[0_16px_56px_-10px_rgba(244,124,97,0.85)] transition-shadow"
    >
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  </motion.div>
);

// ---------- Scene Component ----------
function Scene({
  index,
  kicker,
  title,
  subtitle,
  imageSrc,
  tint = "from-black/80 via-black/40 to-black/0",
  align = "left",
}: {
  index: number;
  kicker?: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  tint?: string;
  align?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax transforms
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const fgY = useTransform(scrollYProgress, [0, 1], [30, -10]);
  const decoY = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  const alignClass = align === "left" ? "items-start text-left" : "items-end text-right";
  const contentAlign = align === "left" ? "md:items-start" : "md:items-end";

  return (
    <section ref={ref} className="relative h-screen snap-start overflow-hidden bg-black" aria-label={title}>
      {/* Background Image */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 -z-10">
        <motion.img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
          loading="lazy"
        />
        <motion.div
          style={{ opacity: vignetteOpacity }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.7)_100%)]"
        />
      </motion.div>

      {/* Gradient Tint */}
      <div className={`absolute inset-0 bg-gradient-to-t ${tint} mix-blend-multiply`} />

      {/* Glow Accent */}
      <motion.div style={{ y: decoY }} className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-20">
        <div className="h-full w-full bg-[#f47c61]" />
      </motion.div>

      {/* Text & CTA */}
      <div className={`relative z-10 mx-auto flex h-full max-w-7xl px-6 md:px-10 ${alignClass}`}>
        <motion.div style={{ y: fgY }} className={`mt-auto mb-28 flex w-full flex-col ${contentAlign}`}>
          <div className={`w-full md:w-[60%] ${align === "left" ? "md:pr-8" : "md:ml-auto md:pl-8"}`}>
            <SectionHeading kicker={kicker} title={title} subtitle={subtitle} />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 text-white/50 text-sm select-none">{String(index).padStart(2, "0")}</div>
    </section>
  );
}

// ---------- Main Page ----------
export default function AboutPage() {
  return (
    <main className="min-h-screen w-full text-white bg-[#0a0014]">
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-clip scroll-smooth">
        {/* Hero */}
        <section className="relative h-screen snap-start overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0014] via-[#130027] to-[#1a0033]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_45%)] opacity-20" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-semibold leading-[1.03] text-[#f5f2ee]"
              >
                Behind the Craft
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-5 max-w-xl text-white/70 text-lg"
              >
                Step behind the curtain and discover the philosophy, design process, and creative vision that power every project at WebCrafts Studio.
              </motion.p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">Scroll to explore</div>
        </section>

        {/* Scenes */}
        <Scene
          index={1}
          kicker="Our Philosophy"
          title="Design with Intention"
          subtitle="We don’t chase trends. We craft meaningful, human-centered digital experiences that tell stories and evoke emotion."
          imageSrc="/images/philosophy.jpg"
          tint="from-[#08000f]/80 via-[#0a0014]/40 to-transparent"
          align="left"
        />

        <Scene
          index={2}
          kicker="Our Process"
          title="Where Creativity Meets Precision"
          subtitle="Our workflow is a balance of artistry and technical mastery — from concept to launch, every detail has purpose."
          imageSrc="/images/process.jpg"
          tint="from-[#1a0033]/80 via-[#26004f]/40 to-transparent"
          align="right"
        />

        <Scene
          index={3}
          kicker="Our Ethos"
          title="Built for Connection"
          subtitle="We collaborate with brands who value authenticity, imagination, and timeless impact. Together, we create stories worth remembering."
          imageSrc="/images/ethos.jpg"
          tint="from-black/80 via-black/40 to-transparent"
          align="left"
        />

        {/* Outro */}
        <section className="relative h-screen snap-start overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0a0014] to-[#1a0033]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(244,124,97,0.18)_0%,rgba(244,124,97,0)_60%)]" />
          <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
            <SectionHeading
              kicker="Next Chapter"
              title="Your Brand, Our Story"
              subtitle="We bring your vision to life with design that feels, performs, and endures. Let’s create something unforgettable."
            />
            <CTA href="/contact">Start Your Journey</CTA>
          </div>
        </section>
      </div>
    </main>
  );
}
