"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  "activité",
  "restaurant",
  "cabinet",
  "boutique",
  "entreprise",
  "marque",
];

export default function WordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    /* Container has the width of the longest word (invisible placeholder) */
    <span className="relative inline-block align-bottom overflow-hidden">
      {/* Invisible spacer — fixes layout shift */}
      <span
        aria-hidden
        className="invisible select-none"
        style={{
          backgroundImage: "linear-gradient(135deg, #2563eb, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        entreprise
      </span>

      {/* Animated word — absolutely positioned over spacer */}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
          exit={{ y: "-110%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(135deg, #2563eb, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
