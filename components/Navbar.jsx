"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { useContactModal } from "@/lib/useContactModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openContact } = useContactModal();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Logo size={120} />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-purple-400 transition">
            Services
          </a>
          <a href="#solutions" className="hover:text-purple-400 transition">
            Solutions
          </a>
          <a href="#cases" className="hover:text-purple-400 transition">
            Case Studies
          </a>
          <a href="/careers" className="hover:text-purple-400 transition">
            Careers
          </a>

          {/* Contact Button */}
          <button
            onClick={openContact}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 space-y-4">
          <a
            onClick={() => setMenuOpen(false)}
            href="#services"
            className="block text-gray-300"
          >
            Services
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#solutions"
            className="block text-gray-300"
          >
            Solutions
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#cases"
            className="block text-gray-300"
          >
            Case Studies
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="/careers"
            className="block text-gray-300"
          >
            Careers
          </a>

          {/* Mobile Contact Button */}
          <button
            onClick={() => {
              setMenuOpen(false);
              openContact();
            }}
            className="w-full mt-4 px-4 py-3 rounded-lg bg-purple-600 text-white text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
