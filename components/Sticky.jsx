"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sticky() {
  const items = [
    { src: "/sticky/Dev.jpg", alt: "Group" },
    { src: "/sticky/Tools.jpg", alt: "Everything" },
    { src: "/sticky/Business.jpg", alt: "Eco" },
    { src: "/sticky/Software.jpg", alt: "Hassle" },
  ];

  return (
    <div className="flex flex-col gap-12">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-[96px] rounded-2xl overflow-hidden"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
