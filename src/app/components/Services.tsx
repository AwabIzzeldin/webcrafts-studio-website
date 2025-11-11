"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandJourney() {
  const stages = [
    {
      title: "1. Visual Identity",
      subtitle: "Design Your Brand’s Personality",
      description:
        "We craft timeless logos, color systems, and brand guidelines that capture your essence — from moodboards to final mark.",
      video: "/videos/dentity.mp4",
      cta: "Start Branding",
      link: "/contact",
    },
    {
      title: "2. Website & Domain",
      subtitle: "Bring Your Brand Online",
      description:
        "We design and develop a custom website that feels alive — optimized for speed, conversions, and seamless user experience. We even handle your domain setup and hosting.",
      video: "/videos/ebsite.mp4",
      cta: "Build My Website",
      link: "/contact",
    },
    {
      title: "3. Content Creation",
      subtitle: "Tell Your Story Everywhere",
      description:
        "Our creative team produces scroll-stopping visuals, videos, and social media content — perfect for Instagram, TikTok, and Reels. Your brand deserves a voice that stands out.",
      video: "/videos/ontent.mp4",
      cta: "Create My Content",
      link: "/contact",
    },
    {
      title: "4. Launch & Growth",
      subtitle: "Go Live & Stay Ahead",
      description:
        "",
      video: "/videos/growth.mp4",
      cta: "Contact Us Now",
      link: "/contact",
    },
  ];

  return (
    // 👇 Hidden on mobile, visible from md breakpoint upwards
    <section className="hidden md:block relative py-32 bg-[#05000f] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-[#1a0033]/80 to-[#05000f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,124,97,0.08)_0%,transparent_70%)]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold"
        >
          Build Your <span className="text-[#f47c61]">Brand from Scratch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          From first idea to viral launch — we guide your brand through every creative stage.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-8">
        {/* Vertical spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f47c61]/80 via-[#ff9e80]/50 to-transparent" />

        {/* Stages */}
        <div className="flex flex-col gap-40">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#f47c61] rounded-full shadow-[0_0_25px_#f47c61]"
              />

              {/* Video background */}
              <div className="relative flex-1 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_-20px_rgba(244,124,97,0.3)]">
                <video
                  src={s.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05000f]/80 via-transparent to-transparent" />
              </div>

              {/* Text content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#f47c61]">
                  {s.title}
                </h3>
                <h4 className="text-xl text-white/80">{s.subtitle}</h4>
                <p className="text-gray-300 leading-relaxed text-lg">{s.description}</p>

                <Link href={s.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 inline-flex items-center gap-2 bg-[#f47c61] hover:bg-[#ff9e80] text-black font-medium px-8 py-3 rounded-full transition-all"
                  >
                    {s.cta} ↗
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
