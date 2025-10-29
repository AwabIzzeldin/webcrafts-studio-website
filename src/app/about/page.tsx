"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// ---------- Shared UI ----------
const SectionHeading = ({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="space-y-4">
    {kicker && (
      <motion.p
        className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/60"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {kicker}
      </motion.p>
    )}
    <motion.h2
      className="text-4xl md:text-6xl font-semibold leading-[1.05] text-[#f5f2ee]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        className="max-w-xl text-base md:text-lg text-white/70"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const CTA = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
    className="pt-6"
  >
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-[#0a0014] bg-[#f47c61] font-semibold hover:bg-[#ff9d80] shadow-[0_0_30px_rgba(244,124,97,0.5)] transition-all"
    >
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M13 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  </motion.div>
);

// ---------- New Cinematic Section ----------
function CinematicSection({
  index,
  image,
  title,
  subtitle,
  kicker,
  align = "left",
  tint = "from-black/80 via-black/40 to-black/0",
}: {
  index: number;
  image: string;
  title: string;
  subtitle: string;
  kicker?: string;
  align?: "left" | "right";
  tint?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const textAlign = align === "left" ? "text-left items-start" : "text-right items-end";
  const contentAlign = align === "left" ? "md:items-start" : "md:items-end";

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          priority={index === 1}
          className="object-cover object-center brightness-[0.65]"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${tint}`} />
      </motion.div>

      {/* Text Layer */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className={`relative z-10 max-w-6xl px-8 mx-auto flex flex-col ${textAlign}`}
      >
        <div className={`w-full md:w-[60%] ${align === "right" ? "md:ml-auto" : ""}`}>
          <SectionHeading kicker={kicker} title={title} subtitle={subtitle} />
        </div>
      </motion.div>

      {/* Scene Index */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-6 right-6 text-white/50 text-sm select-none"
      >
        {String(index).padStart(2, "0")}
      </motion.span>
    </section>
  );
}

// ---------- Page ----------
export default function AboutPage() {
  return (
    <main className="min-h-screen w-full text-white bg-[#0a0014] overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0014] via-[#130027] to-[#1a0033]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-semibold mb-4 text-[#f5f2ee]">
            Behind the Craft
          </h1>
          <p className="text-lg text-white/70">
            Discover the philosophy, process, and creativity that drive everything we design at WebCrafts Studio.
          </p>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm animate-pulse">
          Scroll to explore ↓
        </div>
      </section>

      {/* Sections */}
      <CinematicSection
        index={1}
        kicker="Our Philosophy"
        title="Design with Intention"
        subtitle="We don’t chase trends. We craft meaningful, human-centered experiences that tell stories and evoke emotion."
        image="/images/serv.png"
        align="left"
        tint="from-[#0a0014]/80 via-[#1a0033]/40 to-transparent"
      />

      <CinematicSection
        index={2}
        kicker="Our Process"
        title="Where Creativity Meets Precision"
        subtitle="Our workflow is a balance of artistry and technical mastery — every detail has purpose."
        image="/images/serv.png"
        align="right"
        tint="from-[#1a0033]/80 via-[#26004f]/40 to-transparent"
      />

      <CinematicSection
        index={3}
        kicker="Our Ethos"
        title="Built for Connection"
        subtitle="We collaborate with brands who value authenticity, imagination, and timeless impact. Together, we create stories worth remembering."
        image="/images/phone.jpg"
        align="left"
        tint="from-black/80 via-black/40 to-transparent"
      />

      {/* Outro */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0a0014] to-[#1a0033]" />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl px-6"
        >
          <SectionHeading
            kicker="Next Chapter"
            title="Your Brand, Our Story"
            subtitle="We bring your vision to life with design that feels, performs, and endures."
          />
          <CTA href="/contact">Start Your Journey</CTA>
        </motion.div>
      </section>
    </main>
  );
}
