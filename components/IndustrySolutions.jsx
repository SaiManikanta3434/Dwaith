"use client";
import { motion } from "framer-motion";

export default function IndustrySolutions() {
  const industries = [
    { name: "Finance", color: "bg-purple-100 text-purple-700" },
    { name: "Healthcare", color: "bg-green-100 text-green-700" },
    { name: "Education", color: "bg-blue-100 text-blue-700" },
    { name: "E-Commerce", color: "bg-pink-100 text-pink-700" },
    { name: "Logistics", color: "bg-yellow-100 text-yellow-700" },
    { name: "Startups", color: "bg-indigo-100 text-indigo-700" },
  ];

  return (
    <section className="py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Industry Solutions
        </motion.h2>

        {/* Sub text (very subtle like Dribbble) */}
        <p className="text-gray-500 max-w-xl mx-auto mb-14">
          Tailored digital solutions designed to meet the unique challenges of
          every industry we serve.
        </p>

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {industries.map((item) => (
            <span
              key={item.name}
              className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer
                ${item.color}
                hover:scale-105 hover:shadow-md transition-all duration-300`}
            >
              {item.name}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
