"use client";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-10 h-10 text-[#f47c61]" />,
    title: "Creative Innovation",
    desc: "Every project is a new opportunity to push design boundaries.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-[#f47c61]" />,
    title: "Performance Focused",
    desc: "We combine beauty with speed and optimization — always.",
  },
  {
    icon: <Heart className="w-10 h-10 text-[#f47c61]" />,
    title: "Client-Centered",
    desc: "Our success depends on your satisfaction — and results.",
  },
];

export default function Values() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#120024] text-center">
      <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 rounded-2xl bg-[#1e0038] border border-[#2e0050] shadow-lg"
          >
            <div className="flex justify-center mb-4">{v.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-[#f47c61]">
              {v.title}
            </h3>
            <p className="text-gray-300">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
