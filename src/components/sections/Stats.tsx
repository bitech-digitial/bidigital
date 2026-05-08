"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FloatingShapesLayer from "@/components/ui/FloatingShapesLayer";

const stats = [
  { value: 100, suffix: "%", label: "Clients satisfaits" },
  { value: 7, suffix: " jours", label: "Délai de livraison moyen" },
  { value: 3, suffix: " ans", label: "D'expertise digitale" },
  { value: 24, suffix: "h", label: "Délai de réponse garanti" },
];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <div
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 900,
          fontFamily: "var(--font-heading)",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
        }}
      >
        {count}
        {suffix}
      </div>
      <p
        style={{
          fontSize: 16,
          color: "#FFFFFF",
          marginTop: 10,
          fontFamily: "var(--font-body)",
          lineHeight: 1.4,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#03045E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <FloatingShapesLayer variant="dark" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              color: "#FFFFFF",
            }}
          >
            BiDigital en chiffres
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter value={s.value} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  );
}
