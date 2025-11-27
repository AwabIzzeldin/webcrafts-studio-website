"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const services = [
    {
      title: "Website Development",
      href: "/services/web-development",
      subtitle: "Cinematic, conversion-driven websites built for performance and emotion.",
      preview: "/images/web-preview.jpg",
    },
    {
      title: "Visual Identity",
      href: "/services/branding",
      subtitle: "Timeless logos, brand systems, and visual identities that stand apart.",
      preview: "/images/identity-preview.jpg",
    },
    {
      title: "Content Creation",
      href: "/services/content",
      subtitle: "High-impact visuals and storytelling crafted for social engagement.",
      preview: "/images/content-preview.jpg",
    },
  ];

  // ✨ Other main pages you had before
  const mainLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080012]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6 text-white">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-[#f5f2ee] hover:text-[#f47c61] transition-colors"
        >
          WebCrafts <span className="text-[#f47c61]">Studio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 text-lg font-medium">
          {/* Main Pages */}
          {mainLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-[#f47c61] transition-colors"
            >
              {link.title}
            </Link>
          ))}

          {/* Services Dropdown */}
         
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-[#f5f2ee]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden bg-[#0a0014]/95 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 space-y-5 text-gray-300 text-lg font-medium">
              {mainLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              ))}

              {/* Services Submenu */}
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center">
                  <span>Services</span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    ⌄
                  </span>
                </summary>
                <div className="flex flex-col mt-2 pl-4 border-l border-white/10 space-y-2">
                  {services.map((s, i) => (
                    <Link key={i} href={s.href} onClick={() => setMobileOpen(false)}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
