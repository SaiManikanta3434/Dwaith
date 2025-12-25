"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Sticky from "@/components/Sticky";

export default function Workflow() {
  const steps = [
    {
      title: "Analysis & Planning",
      desc: "We analyze requirements and plan scalable digital workflows tailored to your business.",
    },
    {
      title: "Design & Architecture",
      desc: "Crafting secure, high-performance system architecture with modern technologies.",
    },
    {
      title: "Development",
      desc: "Agile development with clean, maintainable, and scalable codebases.",
    },
    {
      title: "Testing & QA",
      desc: "Rigorous testing ensures performance, security, and reliability.",
    },
    {
      title: "Deployment & Support",
      desc: "Seamless deployment with ongoing monitoring and support.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          Workflow Made Seamless <br />
          <span className="text-gray-400 text-2xl md:text-3xl font-medium">
            With Dwaith InfoTech
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT TABS */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => setActive(index)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                  ${
                    active === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-zinc-900 text-gray-400 hover:bg-zinc-800"
                  }`}
              >
                <span className="text-sm uppercase tracking-wide opacity-80">
                  Step {index + 1}
                </span>
                <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4">{steps[active].title}</h3>

            <p className="text-gray-400 mb-8">{steps[active].desc}</p>

            {/* AI / Visual Placeholder */}
            <div className="h-64 rounded-xl bg-gradient-to-br from-purple-600/40 to-pink-600/40 flex items-center justify-center text-white/80 text-sm">
              AI Workflow Visualization
            </div>
          </motion.div>
        </div>
        <div className="min-h-[300vh] p-20">
          <Sticky />
        </div>
      </div>
    </section>
  );
}
