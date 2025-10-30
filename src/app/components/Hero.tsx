"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-[#05000f] text-white px-6 md:px-12">
    
      {/* Background video with cinematic overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05000f]/90 via-[#100022]/80 to-[#05000f]" />
      </div>

      {/* Soft ambient glow */}
      <div className="absolute bottom-0 w-[50%] h-[200px] blur-3xl bg-[#f47c61]/20 rounded-full opacity-50" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center space-y-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl md:text-7xl font-light tracking-tight max-w-5xl leading-tight"
        >
          We <span className="font-semibold text-[#f47c61]">design</span> and{" "}
          <span className="font-semibold text-[#f47c61]">build</span>{" "}
          <span className="text-white/90">digital experiences</span> that elevate brands.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          From concept to launch — we craft cinematic, performance-driven websites
          that turn ideas into digital impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-6 mt-6"
        >
  <Link href="/contact">
    <button className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-medium px-8 py-3 rounded-full transition-all">
      Start a Project
    </button>
  </Link>

  <Link href="/projects">
    <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full transition-all">
      View Work
    </button>
  </Link>
        </motion.div>
      </motion.div>

      {/* Subtle marquee / tagline line */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/10 bg-transparent backdrop-blur-[3px] py-8">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap text-3xl md:text-5xl font-light tracking-widest text-white/30 uppercase"
        >
          <span className="mx-16">Creative Branding </span>
          <span className="mx-16">Web Design </span>
          <span className="mx-16">Content Creation</span>
          <span className="mx-16">Web Development </span>
        </motion.div>
      </div>
    </section>
  );
}
