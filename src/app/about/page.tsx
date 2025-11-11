"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative text-white overflow-hidden font-sans bg-gradient-to-b from-[#0a0014] via-[#1a0033]/70 to-[#05000f]">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(244,124,97,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* === 01 — OUR STORY === */}
      <section className="relative flex flex-col justify-center items-center min-h-screen px-6 md:px-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.2em] text-[#f47c61]/80 mb-3"
        >
          01 — Our Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-semibold max-w-4xl leading-tight"
        >
          Where <span className="text-[#f47c61]">Code</span> Meets{" "}
          <span className="text-[#f47c61]">Design</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mt-6"
        >
          WebCrafts Studio is led by <span className="text-[#f47c61]">Awab Izzeldin</span> — a Software Engineering student passionate about turning creative ideas into real digital products.  
          We build modern websites and brand systems that blend technology and creativity.
        </motion.p>
      </section>

      {/* === 02 — PHILOSOPHY === */}
      <section className="relative flex flex-col justify-center items-center min-h-[90vh] px-6 md:px-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.2em] text-[#f47c61]/80 mb-3"
        >
          02 — Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold max-w-3xl leading-tight"
        >
          Simple ideas. Clean design. Real results.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mt-6"
        >
          We believe good design should be effortless — fast, clear, and meaningful.  
          Every project we create is built to perform and designed to last.
        </motion.p>
      </section>

      {/* === 03 — THE WORK === */}
      <section className="relative flex flex-col justify-center items-center min-h-screen px-6 md:px-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.2em] text-[#f47c61]/80 mb-3"
        >
          03 — What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold mb-12 max-w-4xl leading-tight"
        >
          We help brands stand out online
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          {[
            {
              title: "Website Design",
              desc: "Modern, fast, and responsive websites built for impact and conversion.",
              link: "/services/web-development",
            },
            {
              title: "Visual Identity",
              desc: "Logos, color systems, and brand styles that define your look and voice.",
              link: "/services/branding",
            },
            {
              title: "Content Creation",
              desc: "Short videos, reels, and visuals that grab attention and grow your audience.",
              link: "/services/content",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-semibold text-[#f47c61] mb-3">{s.title}</h3>
              <p className="text-gray-300 text-lg mb-6">{s.desc}</p>
              <Link href={s.link}>
                <button className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-medium px-6 py-2 rounded-full transition-all">
                  Explore →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === 04 — THE VISION === */}
      <section className="relative flex flex-col justify-center items-center min-h-screen px-6 md:px-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.2em] text-[#f47c61]/80 mb-3"
        >
          04 — Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold max-w-3xl leading-tight"
        >
          Building the next wave of creative brands
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mt-6"
        >
          Our goal is simple — help businesses grow through design, technology, and storytelling.  
          If you’re building something new, we’re here to bring it to life.
        </motion.p>

        <Link href="/contact" className="mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 rounded-full bg-[#f47c61] text-black font-semibold hover:bg-[#ff9e80] transition-all"
          >
            Start a Project ↗
          </motion.button>
        </Link>
      </section>
    </main>
  );
}
