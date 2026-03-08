"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "bidigital_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Defer setState to avoid synchronous setState-in-effect warning
      const timer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#e2e8f0] shadow-2xl"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p
              className="text-sm text-[#475569] max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nous utilisons des cookies pour améliorer votre expérience et
              analyser notre trafic. Aucune donnée n&apos;est vendue à des tiers.{" "}
              <a
                href="/politique-de-confidentialite"
                className="text-blue-500 underline text-xs"
              >
                En savoir plus
              </a>
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={refuse}
                className="px-5 py-2 rounded-lg border border-[#e2e8f0] text-[#64748b] text-sm transition-colors hover:bg-[#f8fafc]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 rounded-lg bg-[#2563eb] text-white text-sm font-medium transition-colors hover:bg-[#1d4ed8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
