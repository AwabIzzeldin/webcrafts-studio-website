"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Showcase() {
  const showcases = [
    {
      title: "Web Development",
      subtitle: "Performance-driven websites built to scale.",
      link: "/services/web-development",
      color: "from-[#f47c61]/20 to-[#1a0033]/30",
    },
    {
      title: "Website Redesign",
      subtitle: "Transform your old website into a digital masterpiece.",
      link: "/services/website-redesign",
      color: "from-[#ff9e80]/20 to-[#1a0033]/30",
    },
    {
      title: "Maintenance & Support",
      subtitle: "Keep your website fast, secure, and up-to-date.",
      link: "/services/maintenance",
      color: "from-[#ffb49a]/20 to-[#1a0033]/30",
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-16 bg-[#05000f] text-white overflow-hidden">
      {/* Ambient gradient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-[#100022] to-[#05000f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(244,124,97,0.08)_0%,transparent_60%)]" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold mb-4">
          Explore Our <span className="text-[#f47c61]">Capabilities</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Each service is a crafted digital experience.  
          Click below to explore how we build, refine, and evolve websites.
        </p>
      </motion.div>

      {/* Showcase Cards */}
      <div className="relative z-10 flex flex-col gap-12 md:gap-20 max-w-6xl mx-auto">
        {showcases.map((item, i) => (
          <Link key={i} href={item.link} className="group">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative w-full rounded-3xl overflow-hidden bg-gradient-to-br ${item.color} border border-white/5 backdrop-blur-sm py-16 md:py-24 px-8 md:px-16 flex flex-col items-center md:items-start transition-all duration-500`}
            >
              {/* Ambient hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,rgba(244,124,97,0.6),transparent_70%)] blur-3xl transition-all duration-700" />

              {/* Text */}
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-semibold text-white group-hover:text-[#f47c61] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-lg mt-4">{item.subtitle}</p>
              </div>

              {/* Floating corner arrow */}
              <motion.span
                className="absolute right-8 bottom-6 md:right-10 md:bottom-8 text-[#f47c61] text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ↗
              </motion.span>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
