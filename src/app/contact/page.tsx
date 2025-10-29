"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    service: "",
    budget: "",
    contact: "",
  });

  const handleChange = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const submitForm = (e: any) => {
    e.preventDefault();
    alert("Thank you! We’ll get in touch soon.");
  };

  const fade = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05000f] text-white px-6 md:px-12">
      {/* Background gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-[#1a0033]/80 to-[#05000f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f47c61]/10 blur-[240px] rounded-full" />

      {/* Container */}
      <div className="relative z-10 w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_60px_-20px_rgba(244,124,97,0.2)]">
        <AnimatePresence mode="wait">
          {/* Step 1 – Name */}
          {step === 1 && (
            <motion.div key="step1" {...fade} className="space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
                What’s your{" "}
                <span className="text-[#f47c61]">name?</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                We’d love to know who we’re speaking to.
              </p>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="e.g. Awab Izzeldin"
                className="w-full mt-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:border-[#f47c61] transition-all"
              />
              <button
                onClick={next}
                disabled={!form.name}
                className="mt-6 bg-[#f47c61] hover:bg-[#ff9e80] text-black font-semibold px-8 py-3 rounded-full transition-all disabled:opacity-40"
              >
                Continue →
              </button>
            </motion.div>
          )}

          {/* Step 2 – Service */}
          {step === 2 && (
            <motion.div key="step2" {...fade} className="space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
                Hi {form.name}, what service do you{" "}
                <span className="text-[#f47c61]">need?</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                Select the main service you’re interested in.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {["Website Design", "Brand Identity", "Content Creation"].map(
                  (s) => (
                    <button
                      key={s}
                      onClick={() => handleChange("service", s)}
                      className={`px-6 py-4 rounded-xl border text-sm sm:text-base ${
                        form.service === s
                          ? "bg-[#f47c61] text-black border-transparent"
                          : "border-white/10 hover:border-[#f47c61]/40"
                      } transition-all`}
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
              <div className="flex justify-between mt-8 text-sm sm:text-base">
                <button
                  onClick={prev}
                  className="text-gray-400 hover:text-white transition"
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  disabled={!form.service}
                  className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-semibold px-8 py-3 rounded-full transition-all disabled:opacity-40"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3 – Budget */}
          {step === 3 && (
            <motion.div key="step3" {...fade} className="space-y-6 text-center">
              <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
                What’s your{" "}
                <span className="text-[#f47c61]">budget range?</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                This helps us suggest the right scope and solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {["$500–$1,000", "$1,000–$3,000", "$3,000+"].map((b) => (
                  <button
                    key={b}
                    onClick={() => handleChange("budget", b)}
                    className={`px-6 py-4 rounded-xl border text-sm sm:text-base ${
                      form.budget === b
                        ? "bg-[#f47c61] text-black border-transparent"
                        : "border-white/10 hover:border-[#f47c61]/40"
                    } transition-all`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8 text-sm sm:text-base">
                <button
                  onClick={prev}
                  className="text-gray-400 hover:text-white transition"
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  disabled={!form.budget}
                  className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-semibold px-8 py-3 rounded-full transition-all disabled:opacity-40"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4 – Contact */}
          {step === 4 && (
            <motion.form
              key="step4"
              onSubmit={submitForm}
              {...fade}
              className="space-y-6 text-center"
            >
              <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
                Finally, how can we{" "}
                <span className="text-[#f47c61]">reach you?</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                You can share your email or WhatsApp number.
              </p>
              <input
                type="text"
                value={form.contact}
                onChange={(e) => handleChange("contact", e.target.value)}
                placeholder="e.g. you@example.com or +966 50 123 4567"
                className="w-full mt-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-base sm:text-lg placeholder-gray-500 focus:outline-none focus:border-[#f47c61] transition-all"
              />
              <div className="flex justify-between mt-8 text-sm sm:text-base">
                <button
                  type="button"
                  onClick={prev}
                  className="text-gray-400 hover:text-white transition"
                >
                  ← Back
                </button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  disabled={!form.contact}
                  className="bg-[#f47c61] hover:bg-[#ff9e80] text-black font-semibold px-8 py-3 rounded-full transition-all disabled:opacity-40"
                >
                  Submit →
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Step Indicators */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-full ${
              step === i ? "bg-[#f47c61]" : "bg-white/20"
            } transition-all`}
          />
        ))}
      </motion.div>
    </main>
  );
}
