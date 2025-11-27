"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ProjectsPage() {
  const projects = [
    {
      name: "Abubaker — Designer Portfolio",
      role: "Website Design & Development",
      desc: "A modern bilingual portfolio crafted to reflect the designer’s unique identity and visual direction.",
      href: "https://abubaker-ruby.vercel.app/",
      image: "/images/websites/abubaker.png",
    },
    {
      name: "WebCrafts Studio — Agency Site",
      role: "Website Design & Development",
      desc: "The official WebCrafts Studio website. Minimal, dark, and identity-driven with subtle motion.",
      href: "https://www.webcrafts-studio.org/",
      image: "/images/websites/webcrafts.png",
    },
    {
      name: "Empire Schools - Landing Page ",
      role: "Website Design & Development",
      desc: "A clean and modern demo landing page concept built to showcase a school’s programs, vision, and brand identity.",
      href: "https://school-demo-six.vercel.app/",
      image: "/images/websites/schooldemo.png",
    },
    {
  name: "Almustafa Dental Clinic — Demo Website",
  role: "Website Design & Development",
  desc: "A modern clean demo website concept for a dental clinic, designed to present services, trust, and professionalism with a smooth user experience.",
  href: "https://dentalclinic-almustafa.vercel.app/",
  image: "/images/websites/dental.png", 
},

  ];

  return (
    <main className="min-h-screen bg-[#0A0014] text-white">
      <section className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6 lg:px-0">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Projects
          </p>

          <h1 className="text-4xl font-semibold leading-[1.1] md:text-6xl">
            Web Projects
          </h1>

          <p className="max-w-xl text-sm text-white/60 md:text-base leading-relaxed">
            A curated selection of websites designed and developed with clarity,
            identity, and modern experiences. Crafted to{" "}
            <span className="text-white">feel</span> like the brand, not just
            represent it.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <Link href={p.href} target="_blank" rel="noopener noreferrer">
                {/* IMAGE */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* TEXT */}
                <div className="space-y-3 px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">
                    {p.role}
                  </p>

                  <h2 className="text-xl font-medium">{p.name}</h2>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm text-white/80 flex items-center gap-1">
                      Visit website
                      <span className="transition-all duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </span>

                    <span className="text-[11px] px-2 py-1 rounded-full border border-white/15 text-white/60">
                      Live
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 border-t border-white/10 pt-8 text-white/60 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm">
            Have a project in mind? Let’s build something memorable.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80 transition hover:bg-white hover:text-black hover:border-white"
          >
            Let&apos;s work together
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
