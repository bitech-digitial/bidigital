"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

const BEFORE_ITEMS = [
  { label: "Design", value: "Template gratuit Wix", bad: true },
  { label: "Mobile", value: "Non optimisé", bad: true },
  { label: "SEO", value: "Introuvable sur Google", bad: true },
  { label: "RGPD", value: "Aucune conformité", bad: true },
  { label: "Vitesse", value: "Score 34/100", bad: true },
  { label: "Identité", value: "Sans personnalisation", bad: true },
];

const AFTER_ITEMS = [
  { label: "Design", value: "Sur-mesure & professionnel", bad: false },
  { label: "Mobile", value: "100% responsive", bad: false },
  { label: "SEO", value: "Top 3 Google local", bad: false },
  { label: "RGPD", value: "Mentions + cookies inclus", bad: false },
  { label: "Vitesse", value: "Score 97/100", bad: false },
  { label: "Identité", value: "Votre marque, votre univers", bad: false },
];

function ComparePanel({
  side,
  items,
  clipPath,
}: {
  side: "before" | "after";
  items: { label: string; value: string; bad: boolean }[];
  clipPath: string;
}) {
  const isBefore = side === "before";

  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ clipPath }}
    >
      {/* Panel bg */}
      <div
        className="absolute inset-0"
        style={{
          background: isBefore
            ? "linear-gradient(160deg, #0d0e1a 0%, #111325 100%)"
            : "linear-gradient(160deg, #070a1a 0%, #0c0f28 100%)",
        }}
      />

      {/* Header label */}
      <div
        className="relative z-10 text-center py-3 text-xs font-bold uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-body)",
          background: isBefore
            ? "rgba(239,68,68,0.1)"
            : "rgba(99,102,241,0.12)",
          borderBottom: `1px solid ${isBefore ? "rgba(239,68,68,0.2)" : "rgba(99,102,241,0.2)"}`,
          color: isBefore ? "#f87171" : "#818cf8",
        }}
      >
        {isBefore ? "❌  Avant BiDigital" : "✅  Après BiDigital"}
      </div>

      {/* Items */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 gap-3 py-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5">
            <span
              className="flex-shrink-0 w-4 h-4 rounded-full mt-0.5 flex items-center justify-center text-[9px] font-bold"
              style={{
                background: item.bad ? "rgba(239,68,68,0.15)" : "rgba(74,222,128,0.12)",
                color: item.bad ? "#f87171" : "#4ade80",
              }}
            >
              {item.bad ? "✕" : "✓"}
            </span>
            <div>
              <span
                className="text-[10px] font-semibold uppercase tracking-wider block"
                style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
              >
                {item.label}
              </span>
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-body)",
                  color: item.bad ? "#6b7280" : "#a1a1aa",
                  textDecoration: item.bad ? "line-through" : "none",
                }}
              >
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [ratio, setRatio] = useState(0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateRatio = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const r = Math.max(0.08, Math.min(0.92, (clientX - rect.left) / rect.width));
    setRatio(r);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => { if (dragging.current) updateRatio(e.clientX); },
    [updateRatio]
  );
  const onMouseUp = useCallback(() => { dragging.current = false; }, []);
  const onTouchMove = useCallback(
    (e: TouchEvent) => { if (dragging.current) updateRatio(e.touches[0].clientX); },
    [updateRatio]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  const pct = `${(ratio * 100).toFixed(1)}%`;
  const beforeClip = `polygon(0 0, ${pct} 0, ${pct} 100%, 0 100%)`;
  const afterClip = `polygon(${pct} 0, 100% 0, 100% 100%, ${pct} 100%)`;

  return (
    <section
      id="avant-apres"
      className="py-24 px-4 relative"
      style={{ background: "#050814" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            Transformation
          </span>
          <h2
            className="font-extrabold text-3xl lg:text-4xl mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
            }}
          >
            La différence{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              avant / après
            </span>
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
          >
            Glissez le curseur pour comparer — aucune agence locale ne vous montre ça.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            ref={containerRef}
            className="relative overflow-hidden select-none"
            style={{
              borderRadius: 20,
              height: "clamp(300px, 52vw, 460px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              cursor: "col-resize",
            }}
            onMouseDown={(e) => { dragging.current = true; updateRatio(e.clientX); }}
            onTouchStart={(e) => { dragging.current = true; updateRatio(e.touches[0].clientX); }}
          >
            {/* After (full background) */}
            <ComparePanel side="after" items={AFTER_ITEMS} clipPath="none" />

            {/* Before (clipped) */}
            <ComparePanel side="before" items={BEFORE_ITEMS} clipPath={beforeClip} />

            {/* After clipped for clean edge */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: afterClip }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, #070a1a 0%, #0c0f28 100%)",
                }}
              />
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-px pointer-events-none"
              style={{
                left: pct,
                background: "rgba(129,140,248,0.6)",
                boxShadow: "0 0 12px rgba(129,140,248,0.5)",
              }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full z-20"
              style={{
                left: pct,
                width: 40,
                height: 40,
                background: "#6366f1",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "0 0 20px rgba(99,102,241,0.6)",
                pointerEvents: "none",
              }}
            >
              <GripVertical className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Hint */}
          <p
            className="text-center text-xs mt-3"
            style={{ fontFamily: "var(--font-body)", color: "#3f3f46" }}
          >
            ← Glissez pour comparer →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
