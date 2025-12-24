"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600" />

      {/* Glow */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-white/20 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Ready to Transform <br />
          Your Business Digitally?
        </motion.h2>

        <p className="mt-6 text-white/90 max-w-2xl mx-auto">
          Partner with Dwaith InfoTech to build scalable, secure, and future-ready
          digital solutions tailored to your business.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 rounded-lg bg-black text-white font-medium hover:bg-zinc-900 transition">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-lg border border-white/30 hover:bg-white/10 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
