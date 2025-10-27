"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // Scroll progress from Framer Motion
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-[#05000f] text-white overflow-hidden relative">
      {/* === SCROLL PROGRESS BAR === */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-[#f47c61] z-[9999]"
      />

      {/* === HERO SECTION === */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 md:px-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-[#1a0033]/80 to-[#05000f]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            We Turn{" "}
            <span className="bg-gradient-to-r from-[#f47c61] to-[#ffb49a] bg-clip-text text-transparent">
              Ideas into Digital Stories
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            WebCrafts Studio is a creative web agency crafting meaningful digital
            experiences through design, storytelling, and technology.
          </p>
        </motion.div>
      </section>

      {/* === STORY SECTION === */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 md:py-40 gap-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,124,97,0.08)_0%,transparent_60%)]" />

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Our <span className="text-[#f47c61]">Vision</span> is Simple:
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We believe every brand has a story worth telling. Our mission is to
            help ambitious brands communicate their vision through design and
            technology that feels human — cinematic, emotional, and timeless.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            From concept to code, every project we build is crafted with precision,
            emotion, and purpose. We go beyond visuals — we engineer experiences.
          </p>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="hidden md:flex relative z-10 flex-1 justify-center"
        >
          <div className="relative w-[80%] aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_-20px_rgba(244,124,97,0.3)]">
            <video
              src="/videos/about.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05000f]/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* === VALUES SECTION === */}
      <section className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-[#05000f] via-[#0a0014] to-[#05000f]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            What <span className="text-[#f47c61]">Drives</span> Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A blend of creativity, clarity, and craftsmanship. We design with
            empathy, build with precision, and grow with intention.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
          {[
            {
              title: "🎨 Design with Emotion",
              desc: "Every interface tells a story — we craft digital experiences that feel alive and intentional.",
            },
            {
              title: "⚙️ Build with Precision",
              desc: "Our development process ensures performance, scalability, and timeless functionality.",
            },
            {
              title: "🚀 Grow with Strategy",
              desc: "We don’t stop at launch — we help your brand evolve with data, content, and creativity.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-4 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-semibold text-[#f47c61]">{v.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA / OUTRO SECTION === */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-[#05000f]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-semibold">
            Ready to Build Something{" "}
            <span className="text-[#f47c61]">Extraordinary?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Let’s collaborate to create your brand’s next big chapter — from
            identity and design to full digital presence.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-flex items-center justify-center px-10 py-4 font-medium text-black rounded-full bg-[#f47c61] hover:bg-[#ff9e80] transition-all text-lg"
            >
              Start Your Journey ↗
            </motion.button>
          </Link>
        </motion.div>

        <div className="absolute w-[400px] h-[400px] bg-[#f47c61]/20 blur-[200px] rounded-full -z-10" />
      </section>
    </main>
  );
}
