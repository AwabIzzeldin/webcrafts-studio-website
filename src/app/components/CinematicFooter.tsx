"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CinematicFooter() {
  return (
    <footer className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center bg-[#05000f] text-white overflow-hidden">
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0033]/70 to-[#05000f]" />
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-[#f47c61]/20 rounded-full blur-[180px]"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-semibold mb-6">
          Let’s <span className="text-[#f47c61]">Create</span> Something
          Extraordinary.
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Whether it’s your first brand, a redesign, or a full digital launch —  
          we’ll bring your vision to life with strategy, motion, and heart.
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-medium px-10 py-4 rounded-full transition-all text-lg"
          >
            Start Your Journey 
          </motion.button>
        </Link>
      </motion.div>

      {/* Subtle credits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-8 text-center text-gray-500 text-sm tracking-wide"
      >
        - Crafted with Precision
      </motion.div>
    </footer>
  );
}
