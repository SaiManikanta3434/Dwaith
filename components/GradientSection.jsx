"use client";
import { motion } from "framer-motion";

export default function GradientSection({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Glow blobs */}
      <div className="glow-blob top-[-100px] left-[-100px]" />
      <div className="glow-blob pink bottom-[-120px] right-[-120px]" />

      {children}
    </motion.section>
  );
}
