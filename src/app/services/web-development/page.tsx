"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function WebDesignPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.15]);

  const FadeIn = ({ children, delay = 0, className = "" }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );

  const Section = ({ children, className = "" }: any) => (
    <section className={`relative w-full px-6 md:px-24 py-24 md:py-32 ${className}`}>{children}</section>
  );

  return (
    <main
      ref={pageRef}
      className="relative text-white overflow-hidden font-sans bg-gradient-to-b from-[#0a0014] via-[#1a0033]/70 to-[#05000f]"
    >
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(244,124,97,0.08)_0%,transparent_70%)]" />
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* ================= HERO ================= */}
      <Section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Does your brand <span className="text-[#f47c61]">need a website?</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mt-6">
            We make websites that feel exclusive — not like they came from a template graveyard.
          </p>
        </FadeIn>
      </Section>

      {/* =============== INTRO / WHY WEBSITE =============== */}
      <Section className="max-w-4xl mx-auto text-center md:text-left">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let’s be honest — most websites look the same.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-gray-300 text-lg leading-relaxed">
            That’s because most “agencies” reuse templates. We build everything from scratch —
            combining code, design, and storytelling to create something that looks alive.
          </p>
        </FadeIn>
      </Section>

      {/* =============== FLOATING MOCKUPS =============== */}
      <Section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Text block */}
        <div className="z-10">
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why your website matters</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Instagram gets attention, but your website earns trust.
              It’s your online home — where visitors actually convert.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-3 text-gray-400 text-lg">
              <li>• You own it. Not Meta, not Wix.</li>
              <li>• You control how it looks and feels.</li>
              <li>• It becomes the center of your brand’s story.</li>
            </ul>
          </FadeIn>
        </div>

        {/* Floating visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] flex justify-center"
        >
          <div className="absolute w-[55%] md:w-[60%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_-10px_rgba(244,124,97,0.3)] right-0 top-8">
            <Image src="/images/mockups/laptop.jpg" alt="Laptop mockup" fill className="object-cover" />
          </div>
          <div className="absolute w-[45%] md:w-[48%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_-10px_rgba(244,124,97,0.3)] left-0 bottom-8">
            <Image src="/images/mockups/phone.jpg" alt="Phone mockup" fill className="object-cover" />
          </div>
        </motion.div>
      </Section>

      {/* =============== WHY US (1-2-3) =============== */}
      <Section className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <h3 className="text-3xl md:text-4xl font-semibold mb-12">Why choose WebCrafts?</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              n: "01",
              title: "Custom from scratch",
              desc: "No templates, no shortcuts. We design around your brand and goals.",
            },
            {
              n: "02",
              title: "Full ownership",
              desc: "You keep the domain, files, and code. It’s 100% yours.",
            },
            {
              n: "03",
              title: "Cinematic storytelling",
              desc: "We make websites that feel alive — made to be remembered.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="text-[#f47c61] font-semibold text-lg mb-2">{item.n}</div>
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-300 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* =============== COMPARISON =============== */}
      <Section className="max-w-5xl mx-auto">
        <FadeIn>
          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            “Good enough” vs <span className="text-[#f47c61]">Crafted to stand out</span>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "The Others 😬",
              items: [
                "• Recycled templates",
                "• Builder subscriptions",
                "• Same layout for every client",
                "• Pretty, but not powerful",
              ],
            },
            {
              title: "WebCrafts ✨",
              items: [
                "• Handcrafted design & code",
                "• Fully owned by you",
                "• Tailored to your audience",
                "• Designed for impact",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <h4 className="text-2xl font-semibold text-[#f47c61] mb-4">{card.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {card.items.map((text, j) => (
                  <li key={j}>{text}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* =============== QUOTE =============== */}
      <Section className="text-center max-w-3xl mx-auto">
        <FadeIn>
          <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
            “We don’t build websites. <span className="text-[#f47c61]">We build online experiences</span>
            that make people stop, scroll, and feel something.”
          </blockquote>
        </FadeIn>
      </Section>

      {/* =============== CTA =============== */}
      <Section className="text-center">
        <FadeIn>
          <h3 className="text-4xl md:text-6xl font-semibold">
            Ready to <span className="text-[#f47c61]">own your digital space</span>?
          </h3>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5">
            Let’s create a website that’s actually yours — fast, cinematic, and unforgettable.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 rounded-full bg-[#f47c61] text-black font-semibold hover:bg-[#ff9e80] transition-all"
            >
              Start a Project ↗
            </motion.button>
          </Link>
        </FadeIn>
      </Section>
    </main>
  );
}
