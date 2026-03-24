"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 127, suffix: "+", label: "Sites livrés", sublabel: "depuis 2022" },
  { value: 4.9, suffix: "/5", label: "Satisfaction client", sublabel: "moyenne Google" },
  { value: 48, suffix: "h", label: "Délai moyen", sublabel: "de livraison" },
  { value: 0, suffix: "", label: "Client perdu", sublabel: "taux de rétention 100%" },
];

function Counter({
  target,
  suffix,
  decimals = 0,
  active,
}: {
  target: number;
  suffix: string;
  decimals?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;
    ref.current = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((eased * target).toFixed(decimals)));
      if (step >= steps) {
        if (ref.current) clearInterval(ref.current);
        setDisplay(target);
      }
    }, stepDuration);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [active, target, decimals]);

  return (
    <span>
      {decimals > 0 ? display.toFixed(decimals) : Math.floor(display)}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-14 px-4 relative overflow-hidden"
      style={{ background: "#050814", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
            >
              {/* Number */}
              <p
                className="font-extrabold leading-none mb-1"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(36px, 6vw, 56px)",
                  background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.03em",
                }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.label === "Satisfaction client" ? 1 : 0}
                  active={isInView}
                />
              </p>

              {/* Label */}
              <p
                className="font-semibold text-sm mb-0.5"
                style={{ fontFamily: "var(--font-heading)", color: "#e0e0ff" }}
              >
                {stat.label}
              </p>

              {/* Sublabel */}
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
              >
                {stat.sublabel}
              </p>

              {/* Separator (not last) */}
              {i < stats.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/4 h-1/2"
                  style={{ width: 1, background: "rgba(255,255,255,0.05)" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
