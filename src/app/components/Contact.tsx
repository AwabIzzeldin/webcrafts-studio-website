"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#0a0014] text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-gray-300 mb-8">
          Tell us about your project and we’ll get back to you within 24 hours.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:border-[#f47c61]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:border-[#f47c61]"
          />
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="p-3 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:border-[#f47c61]"
          />
          <button
            type="submit"
            className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-semibold px-6 py-3 rounded-full transition mt-2"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
