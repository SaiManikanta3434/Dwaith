"use client";
import { X } from "lucide-react";
import { useContactModal } from "@/lib/useContactModal";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden border border-white/10 grid md:grid-cols-2">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-5 right-5 text-white/70 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* LEFT SIDE – CONTACT INFO */}
        <div className="relative p-8 bg-black text-white">
          <h3 className="text-xl font-semibold mb-6">
            Have we piqued your interest?
          </h3>

          <h2 className="text-3xl font-bold mb-10">
            Let’s talk <span className="text-purple-400">with us!</span>
          </h2>

          {/* Contact Card */}
          <div className="bg-white text-black rounded-xl p-5 max-w-sm">
            <p className="font-semibold">📍 Hyderabad, India</p>
            <p className="text-sm mt-2">📧 info@dwaith.com</p>
            <p className="text-sm mt-1">📞 +91 XXXXX XXXXX</p>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="p-8 bg-zinc-900">
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full bg-zinc-800 p-3 rounded-lg text-white outline-none"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full bg-zinc-800 p-3 rounded-lg text-white outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="E-mail address*"
                className="w-full bg-zinc-800 p-3 rounded-lg text-white outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-zinc-800 p-3 rounded-lg text-white outline-none"
              />
            </div>

            <textarea
              placeholder="Message*"
              rows={5}
              className="w-full bg-zinc-800 p-3 rounded-lg text-white outline-none"
            />

            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              SEND →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
