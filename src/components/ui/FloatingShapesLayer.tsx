"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type S = {
  w: number;
  h: number;
  l: string;
  t: string;
  r: number;
  br: number;
  anim: string;
  dur: number;
  d: number;
  fill?: boolean;
};

// ── Dark variant (fond #020318 / #03045E) ──────────────────
const DARK: [S[], S[], S[]] = [
  // Layer 1 — loin, lent
  [
    { w: 180, h: 180, l: "5%",  t: "8%",  r: 18,  br: 28, anim: "shapeFloatUp",    dur: 13, d: 0   },
    { w: 220, h: 80,  l: "3%",  t: "65%", r: -8,  br: 16, anim: "shapeFloatDown",  dur: 15, d: 2   },
    { w: 130, h: 130, l: "84%", t: "45%", r: -12, br: 20, anim: "shapeFloatUp",    dur: 14, d: 4   },
  ],
  // Layer 2 — milieu
  [
    { w: 90,  h: 90,  l: "7%",  t: "40%", r: -15, br: 16, anim: "shapeFloatDrift", dur: 9,  d: 1,   fill: true },
    { w: 70,  h: 140, l: "88%", t: "18%", r: 10,  br: 14, anim: "shapeFloatUp",    dur: 11, d: 3   },
    { w: 100, h: 50,  l: "40%", t: "78%", r: -5,  br: 10, anim: "shapeFloatDown",  dur: 12, d: 5   },
  ],
  // Layer 3 — proche, rapide
  [
    { w: 48,  h: 48,  l: "91%", t: "62%", r: 25,  br: 10, anim: "shapeFloatDown",  dur: 6,  d: 0.5, fill: true },
    { w: 32,  h: 32,  l: "14%", t: "82%", r: -20, br: 6,  anim: "shapeFloatDrift", dur: 5,  d: 2.5, fill: true },
    { w: 60,  h: 28,  l: "55%", t: "12%", r: 8,   br: 8,  anim: "shapeFloatUp",    dur: 7,  d: 1.8 },
  ],
];

// ── Light variant (fond #FFFFFF / #F0F9FF) ─────────────────
const LIGHT: [S[], S[], S[]] = [
  [
    { w: 160, h: 160, l: "4%",  t: "10%", r: 14,  br: 24, anim: "shapeFloatUp",    dur: 13, d: 0   },
    { w: 210, h: 75,  l: "3%",  t: "68%", r: -6,  br: 14, anim: "shapeFloatDown",  dur: 15, d: 2   },
    { w: 120, h: 120, l: "84%", t: "42%", r: -10, br: 20, anim: "shapeFloatUp",    dur: 14, d: 3.5 },
  ],
  [
    { w: 80,  h: 80,  l: "87%", t: "18%", r: -12, br: 14, anim: "shapeFloatDrift", dur: 9,  d: 1,   fill: true },
    { w: 65,  h: 130, l: "90%", t: "58%", r: 8,   br: 12, anim: "shapeFloatUp",    dur: 11, d: 3   },
    { w: 90,  h: 45,  l: "38%", t: "80%", r: -4,  br: 10, anim: "shapeFloatDown",  dur: 12, d: 5   },
  ],
  [
    { w: 42,  h: 42,  l: "89%", t: "76%", r: 22,  br: 8,  anim: "shapeFloatDown",  dur: 6,  d: 0.5, fill: true },
    { w: 28,  h: 28,  l: "11%", t: "52%", r: -18, br: 6,  anim: "shapeFloatDrift", dur: 5,  d: 2,   fill: true },
    { w: 55,  h: 25,  l: "52%", t: "10%", r: 7,   br: 8,  anim: "shapeFloatUp",    dur: 7,  d: 1.5 },
  ],
];

function Layer({
  shapes,
  y,
  border,
  fill,
}: {
  shapes: S[];
  y: MotionValue<string>;
  border: string;
  fill: string;
}) {
  return (
    <motion.div style={{ y }} className="absolute inset-0">
      {shapes.map((s, i) => (
        // Outer div: float animation (translateY/translate only)
        <div
          key={i}
          data-floating-shape
          style={{
            position: "absolute",
            left: s.l,
            top: s.t,
            animation: `${s.anim} ${s.dur}s ease-in-out infinite ${s.d}s`,
            willChange: "transform",
          }}
        >
          {/* Inner div: static rotation + visual style */}
          <div
            style={{
              width: s.w,
              height: s.h,
              transform: `rotate(${s.r}deg)`,
              borderRadius: s.br,
              border: `1.5px solid ${border}`,
              background: s.fill ? fill : "transparent",
            }}
          />
        </div>
      ))}
    </motion.div>
  );
}

export default function FloatingShapesLayer({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 3 couches de parallaxe — vitesses croissantes
  const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-110px"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0px", "-180px"]);

  const isDark = variant === "dark";
  const colors = isDark
    ? {
        l1: "rgba(144,224,239,0.12)",
        l2: "rgba(0,150,199,0.18)",
        l3: "rgba(144,224,239,0.24)",
        fill: "rgba(0,119,182,0.07)",
      }
    : {
        l1: "rgba(0,119,182,0.09)",
        l2: "rgba(0,119,182,0.13)",
        l3: "rgba(0,119,182,0.19)",
        fill: "rgba(0,119,182,0.04)",
      };

  const [L1, L2, L3] = isDark ? DARK : LIGHT;

  if (!mounted) {
    return <div ref={ref} className="absolute inset-0 pointer-events-none" />;
  }

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <Layer shapes={L1} y={y1} border={colors.l1} fill={colors.fill} />
      <Layer shapes={L2} y={y2} border={colors.l2} fill={colors.fill} />
      <Layer shapes={L3} y={y3} border={colors.l3} fill={colors.fill} />
    </div>
  );
}
