"use client";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="relative py-28 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Trending Automation <br />
            <span className="text-gray-800">Our Users Love</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-600 mb-10 max-w-lg">
              Delivering measurable results with scalable automation and
              intelligent digital workflows.
            </p>

            {/* Stats */}
            <div className="flex gap-14 mb-12">
              <div>
                <h3 className="text-4xl font-extrabold">45M+</h3>
                <p className="text-gray-500 mt-2">Processed Automations</p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold">85%</h3>
                <p className="text-gray-500 mt-2">Success Rate</p>
              </div>
            </div>

            <p className="text-gray-600 max-w-md">
              Our automation-first approach helps businesses reduce costs,
              improve efficiency, and accelerate digital transformation.
            </p>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-black rounded-2xl p-6 text-white shadow-xl"
          >
            {/* Placeholder for Image / Video */}
            <div className="h-72 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-sm text-white/80">
              Automation Preview
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-20 bg-black rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Smart Workflow Automation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>AI-Powered Analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Enterprise-Grade Security</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
