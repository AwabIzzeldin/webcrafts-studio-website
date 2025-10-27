"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/**
 * Cinematic Services Page
 * - Fullscreen, scroll-snapped scenes.
 * - Each scene has a cinematic background (video or gradient), parallax layers, and animated copy.
 * - Alternating layouts to keep rhythm; strong CTA to dedicated service subpages.
 *
 * Tailwind palette (adjust to taste):
 *  - Background base: #0a0014 → #1a0033
 *  - Accent: #f47c61
 *  - Text: #f5f2ee
 *
 * Assets to add (place under /public):
 *  - /videos/web-design.mp4
 *  - /videos/brand-identity.mp4
 *  - /videos/marketing.mp4
 *  - /videos/content.mp4
 */

// ---------- Shared UI -----------
const SectionHeading = ({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) => (
  <div className="space-y-4">
    {kicker ? (
      <motion.p
        className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/60"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {kicker}
      </motion.p>
    ) : null}

    <motion.h2
      className="text-4xl md:text-6xl font-semibold leading-[1.05] text-[#f5f2ee] drop-shadow-[0_6px_24px_rgba(244,124,97,0.15)]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {title}
    </motion.h2>

    {subtitle ? (
      <motion.p
        className="max-w-xl text-base md:text-lg text-white/70"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    ) : null}
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

// ---------- Scene Component -----------
function Scene({
  index,
  kicker,
  title,
  subtitle,
  href,
  videoSrc,
  tint = "from-black/80 via-black/40 to-black/0",
  align = "left",
}: {
  index: number;
  kicker?: string;
  title: string;
  subtitle?: string;
  href: string;
  videoSrc?: string;
  tint?: string; // tailwind gradient classes for overlay
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
  const contentJustify = align === "left" ? "md:items-start" : "md:items-end";

  return (
    <section
      ref={ref}
      className="relative h-screen snap-start overflow-hidden bg-black"
      aria-label={title}
    >
      {/* Cinematic background (video / gradient) */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 -z-10">
        {videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#0a0014] via-[#120022] to-[#1a0033]" />
        )}
        {/* Subtle animated grid/texture */}
        <motion.div
          style={{ opacity: vignetteOpacity }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.7)_100%)]"
        />
      </motion.div>

      {/* Color tint overlay to set the scene mood */}
      <div className={`absolute inset-0 bg-gradient-to-t ${tint} mix-blend-multiply`} />

      {/* Decorative parallax shapes (tasteful, subtle) */}
      <motion.div
        style={{ y: decoY }}
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-20"
      >
        <div className="h-full w-full bg-[#f47c61]" />
      </motion.div>

      {/* Foreground content */}
      <div className={`relative z-10 mx-auto flex h-full max-w-7xl px-6 md:px-10 ${alignClass}`}>
        <motion.div
          style={{ y: fgY }}
          className={`mt-auto mb-28 flex w-full flex-col ${contentJustify}`}
        >
          <div className={`w-full md:w-[60%] ${align === "left" ? "md:pr-8" : "md:ml-auto md:pl-8"}`}>
            <SectionHeading kicker={kicker} title={title} subtitle={subtitle} />
            <CTA href={href}>Explore this Service</CTA>
          </div>
        </motion.div>
      </div>

      {/* Scene index badge */}
      <div className="absolute bottom-6 right-6 text-white/50 text-sm select-none">{String(index).padStart(2, "0")}</div>
    </section>
  );
}

// ---------- Page ----------
export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full text-white bg-[#0a0014]">
      {/* Scroll container with snap */}
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-clip scroll-smooth">
        {/* HERO */}
        <section className="relative h-screen snap-start overflow-hidden">
          {/* Background gradient + soft rays */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0014] via-[#130027] to-[#1a0033]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_45%)] opacity-20" />

          {/* Floating noise/bokeh */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-[0.05]" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-semibold leading-[1.03] text-[#f5f2ee]"
              >
                Worlds of Craft
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-5 max-w-xl text-white/70 text-lg"
              >
                Each service is a world. Scroll to travel through cinematic scenes—then dive into a dedicated space built for your goals.
              </motion.p>
              <CTA href="#scene-1">Enter the Worlds</CTA>
            </div>

            {/* Right-side abstract orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden md:block relative"
            >
              <div className="h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-[#f47c61] via-[#f47c61]/40 to-transparent blur-2xl opacity-40" />
              <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
            </motion.div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Scroll to explore
          </div>
        </section>

        {/* SCENE 1: Web Design & Development */}
        <div id="scene-1">
          <Scene
            index={1}
            kicker="Web Design & Development"
            title="Designs That Move People"
            subtitle="Cinematic, conversion-driven websites engineered for speed, accessibility, and brand impact."
            href="/services/web-design"
            videoSrc="/videos/web-design.mp4"
            tint="from-[#08000f]/80 via-[#0a0014]/40 to-transparent"
            align="left"
          />
        </div>

        {/* SCENE 2: Brand Identity */}
        <Scene
          index={2}
          kicker="Brand Identity & Visual Systems"
          title="Where Your Vision Finds Form"
          subtitle="Logos, typography, palettes, and rules—crafted into a consistent, living identity."
          href="/services/brand-identity"
          videoSrc="/videos/brand-identity.mp4"
          tint="from-[#1a0033]/80 via-[#26004f]/40 to-transparent"
          align="right"
        />

        {/* SCENE 3: Marketing & Growth */}
        <Scene
          index={3}
          kicker="Marketing & Growth"
          title="Make Your Message Heard"
          subtitle="Acquire attention—then turn visibility into velocity with strategy, content, and analytics."
          href="/services/marketing"
          videoSrc="/videos/marketing.mp4"
          tint="from-black/80 via-black/40 to-transparent"
          align="left"
        />

        {/* SCENE 4: Content & Motion */}
        <Scene
          index={4}
          kicker="Content & Motion"
          title="Stories That Breathe Life Into Brands"
          subtitle="From scripts to edits—directed, shot, and produced for emotional impact and performance."
          href="/services/content"
          videoSrc="/videos/content.mp4"
          tint="from-[#0d0d0d]/80 via-black/40 to-transparent"
          align="right"
        />

        {/* OUTRO / CTA */}
        <section className="relative h-screen snap-start overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0a0014] to-[#1a0033]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(244,124,97,0.18)_0%,rgba(244,124,97,0)_60%)]" />

          <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
            <SectionHeading
              kicker="Next Step"
              title="Your Story Deserves the Spotlight"
              subtitle="Tell us where you want to go—we’ll direct the journey."
            />
            <CTA href="/contact">Book a Strategy Call</CTA>
          </div>
        </section>
      </div>
    </main>
  );
}
