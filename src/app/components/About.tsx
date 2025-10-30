"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen overflow-hidden bg-[#05000f] text-white px-6 md:px-20">
      {/* Background Gradient (soft cinematic tone) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0014] via-[#100022] to-[#05000f] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,124,97,0.08)_0%,transparent_60%)]" />

      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex-1 max-w-xl text-center md:text-left flex flex-col items-center md:items-start justify-center space-y-6 min-h-[70vh]"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-balance">
          We don’t just build websites —{" "}
          <span className="bg-gradient-to-r from-[#f47c61] to-[#ffb49a] bg-clip-text text-transparent">
            we engineer digital experiences.
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-md md:max-w-xl">
          Our team blends strategy, design, and technology to help brands
          stand out online. From concept to continuous growth — we craft
          digital products that move people and businesses forward.
        </p>

      <Link href = "/about"> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="mt-4 inline-flex items-center justify-center px-8 py-3 font-medium text-black rounded-full bg-[#f47c61] hover:bg-[#ff9e80] transition-all">
            Learn More →
          </button>
        </motion.div>
        </Link>
      </motion.div>

      {/* Right Video Visual — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden md:flex relative z-10 flex-1 justify-center mt-16 md:mt-0"
      >
        <div className="relative w-[85%] md:w-[80%] aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_-20px_rgba(244,124,97,0.3)]">
          <video
            src="/videos/about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05000f]/70 via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
