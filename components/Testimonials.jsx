"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Founder, FinTech Startup",
      feedback:
        "Dwaith InfoTech transformed our automation workflows and helped us scale faster than expected.",
    },
    {
      name: "Anita Sharma",
      role: "Product Manager",
      feedback:
        "Professional team with deep technical expertise. Delivery was smooth and well-structured.",
    },
    {
      name: "Michael Lee",
      role: "CTO, SaaS Company",
      feedback:
        "Their cloud and AI solutions significantly improved our system performance and reliability.",
    },
  ];

  return (
    <section className="py-28 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            See What Our <br />
            Happy Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 mb-6">
                “{item.feedback}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards / Trust Badges (Optional but matches Image-1 vibe) */}
        <div className="mt-20 flex flex-wrap gap-6 items-center">
          {["Top IT Partner", "Trusted by Startups", "Cloud Excellence", "AI Innovator"].map(
            (badge) => (
              <div
                key={badge}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600"
              >
                {badge}
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
