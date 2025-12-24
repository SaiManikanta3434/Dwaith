"use client";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      title: "Enterprise Automation Platform",
      desc: "Built a scalable automation platform processing millions of workflows with high availability.",
      tag: "Automation",
    },
    {
      title: "Cloud Migration for FinTech",
      desc: "Migrated legacy systems to a secure cloud-native architecture with zero downtime.",
      tag: "Cloud",
    },
    {
      title: "AI Analytics for E-Commerce",
      desc: "Implemented AI-driven analytics to improve conversions and customer insights.",
      tag: "AI & Data",
    },
  ];

  return (
    <section className="relative py-32 bg-zinc-950 text-white overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Case Studies That <br />
            <span className="text-emerald-400">Drive Real Impact</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            Explore how Dwaith InfoTech delivers measurable results across
            industries with innovative digital solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 rounded-2xl p-6 border border-white/10
                         hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)]
                         transition-all duration-300"
            >
              {/* Tag */}
              <span className="inline-block mb-4 text-xs font-medium px-3 py-1 rounded-full
                               bg-emerald-500/10 text-emerald-400">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">
                {item.desc}
              </p>

              {/* CTA */}
              <span className="text-sm font-medium text-emerald-400 cursor-pointer hover:underline">
                View Case Study →
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
