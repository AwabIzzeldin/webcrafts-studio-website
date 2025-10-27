"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#05000f]/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-white tracking-wide">
          <motion.span
            animate={{ color: ["#ffffff", "#f47c61", "#ffffff"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            WebCrafts
          </motion.span>{" "}
          <span className="text-gray-400 font-light">Studio</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="relative text-gray-300 hover:text-[#f47c61] transition group"
            >
              {link.title}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f47c61] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-medium px-6 py-2 rounded-full transition-all"
            >
              Get a Quote
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#05000f]/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="flex flex-col items-center py-8 space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-gray-300 hover:text-[#f47c61] transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-medium px-8 py-3 rounded-full transition-all"
              >
                Get a Quote
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
