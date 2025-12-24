"use client";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px]" />

      {/* Curved Gradient Stroke */}
      <svg
        className="absolute top-0 right-0 w-[700px] h-[500px]"
        viewBox="0 0 700 500"
        fill="none"
      >
        <path
          d="M700 0 C400 100, 300 300, 0 400"
          stroke="url(#grad)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            The Home of <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Dwaith InfoTech builds scalable software, cloud platforms,
            and digital solutions for modern businesses.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-purple-400 transition">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* RIGHT FLOATING CARDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative hidden md:block"
        >
          {/* Card 1 */}
          <div className="absolute top-0 left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-xl w-56">
            <p className="text-sm text-gray-300">Customer Growth</p>
            <h3 className="text-3xl font-bold mt-2">45M+</h3>
          </div>

          {/* Card 2 */}
          <div className="absolute top-40 right-0 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-xl w-56">
            <p className="text-sm text-gray-300">Success Rate</p>
            <h3 className="text-3xl font-bold mt-2">98%</h3>
          </div>

          {/* Card 3 */}
          <div className="absolute bottom-0 left-24 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-xl w-64">
            <p className="text-sm text-gray-300">AI & Cloud Solutions</p>
            <p className="mt-2 text-gray-400 text-sm">
              Optimized enterprise workflows with automation
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
