"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectTextAndGallery({
  title,
  subtitle,
  description,
  link,
  gallery,
}: {
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  gallery: string[];
}) {
  const isLive = Boolean(link);

  return (
    <section className="relative w-full bg-[#05000f] text-white py-32 px-6 md:px-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-[#1a0033]/60 to-[#05000f]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f47c61]/10 blur-[200px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold text-[#f47c61]"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 mt-3"
          >
            {subtitle}
          </motion.h3>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-lg leading-relaxed mt-6 max-w-3xl"
        >
          {description}
        </motion.p>

        {isLive ? (
          <Link
            href={link || "#"}
            className="inline-block mt-8 px-8 py-3 rounded-full bg-[#f47c61] text-black font-semibold hover:bg-[#ff9e80] transition-all"
          >
            View Live Project ↗
          </Link>
        ) : (
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/60 font-medium select-none backdrop-blur-sm">
            <span className="h-2 w-2 bg-[#f47c61]/60 rounded-full animate-pulse" />
            Coming Soon
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {gallery.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_-20px_rgba(244,124,97,0.25)] hover:scale-[1.02] transition-transform"
          >
            <Image src={img} alt={`Gallery item ${i + 1}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05000f]/40 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
