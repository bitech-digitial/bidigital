"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CalButton from "@/components/ui/CalButton";

const navLinks = [
  { label: "Exemples", href: "#exemples" },
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#processus" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
            <span
              className="text-white text-sm font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              B
            </span>
          </div>
          <span
            className="font-extrabold text-lg tracking-tight text-transparent bg-clip-text"
            style={{
              fontFamily: "var(--font-heading)",
              backgroundImage: "linear-gradient(135deg, #0f172a, #2563eb)",
            }}
          >
            BiDigital
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#475569] hover:text-[#0f172a] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <CalButton variant="primary" className="text-sm px-4 py-2 rounded-lg">
          Démarrer mon projet →
        </CalButton>
      </nav>
    </motion.header>
  );
}
