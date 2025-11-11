"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ProjectsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  const sections = [
    {
      id: 1,
      title: "Website Design",
      subtitle: "Digital experiences that move people",
      description:
        "We design and build high-performing websites that look beautiful and feel intuitive. Each project is handcrafted for conversion, speed, and storytelling.",
      image: "/images/webdev.png",
      link: "/services/web-development",
    },
    {
      id: 2,
      title: "Visual Identity Creation",
      subtitle: "Where your vision finds its form",
      description:
        "From logo design to full brand systems — we help you define a visual language that expresses your brand’s voice with clarity and emotion.",
      image: "/images/branding.png",
      link: "/services/branding",
    },
    {
      id: 3,
      title: "Content Creation",
      subtitle: "Stories that capture attention",
      description:
        "We produce cinematic visuals, videos, and social content that transform brands into experiences. Scroll-stopping storytelling made for modern audiences.",
      image: "/images/content.png",
      link: "/services/content",
    },
  ];

  return (
    <main
      ref={ref}
      className="relative text-white overflow-hidden bg-gradient-to-b from-[#0a0014] via-[#1a0033]/70 to-[#05000f]"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,124,97,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* === HERO SECTION === */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Soft Coral Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f47c61]/10 blur-[200px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Crafting{" "}
            <span className="text-[#f47c61]">Digital Stories</span>
            <br />
            That Inspire Emotion
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-6">
            Every project is a collaboration — blending identity, design, and storytelling
            to create digital experiences that resonate.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10"
          >
            <Link
              href="#section-1"
              className="inline-block px-10 py-4 rounded-full bg-[#f47c61] text-black font-semibold hover:bg-[#ff9e80] transition-all text-lg"
            >
              View Our Work ↗
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 text-white/50 text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-[1px] bg-white/40"
          />
        </motion.div>
      </section>

      {/* === PROJECT SECTIONS === */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={`section-${s.id}`}
          className={`relative h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden`}
        >
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"
          />

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative z-10 flex-1 max-w-lg px-8 lg:px-16 ${
              i % 2 === 0 ? "lg:ml-12 lg:text-left" : "lg:mr-12 lg:text-right"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-[#f47c61]">{s.title}</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-white/80 mb-6">{s.subtitle}</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">{s.description}</p>
            <Link
              href={s.link}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#f47c61] text-black font-semibold hover:bg-[#ff9e80] transition-all"
            >
              Explore →
            </Link>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative z-10 flex-1 flex justify-center items-center ${
              i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <div className="relative w-[90%] md:w-[80%] lg:w-[70%] aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_-20px_rgba(244,124,97,0.3)]">
              <Image
                src={s.image}
                alt={`${s.title} showcase`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05000f]/70 via-transparent to-transparent" />
            </div>
          </motion.div>
        </section>
      ))}

      {/* === OUTRO === */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold mb-6"
        >
          Ready to <span className="text-[#f47c61]">Build Your Brand?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          We design brands and build stories that connect — through pixels, sound, and
          movement. Let’s build something timeless together.
        </motion.p>
        <Link
          href="/contact"
          className="mt-10 inline-block px-10 py-4 rounded-full bg-[#f47c61] text-black font-semibold hover:bg-[#ff9e80] transition-all"
        >
          Work With Us ↗
        </Link>
        <div className="absolute w-[400px] h-[400px] bg-[#f47c61]/20 blur-[200px] rounded-full -z-10" />
      </section>
    </main>
  );
}
