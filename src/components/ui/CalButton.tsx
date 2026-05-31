"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { ReactNode, CSSProperties } from "react";
import { Calendar } from "lucide-react";

interface CalButtonProps {
  children?: ReactNode;
  /** Layout only: w-full, justify-center, etc. */
  className?: string;
  /** Visual overrides: padding, fontSize, borderRadius, etc. */
  style?: CSSProperties;
  onClick?: () => void;
}

export default function CalButton({
  children = "Prendre rendez-vous",
  className = "",
  style,
  onClick,
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#007AFF" },
          dark:  { "cal-brand": "#007AFF" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="15min"
      data-cal-link="bidigital/15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={`cal-shimmer-btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ${className}`}
      style={{
        background:    "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
        color:         "#ffffff",
        fontFamily:    "var(--font-heading)",
        fontSize:      "15px",
        padding:       "12px 22px",
        borderRadius:  12,
        border:        "none",
        cursor:        "pointer",
        boxShadow:     "0 4px 15px rgba(0,122,255,0.3)",
        transition:    "transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
        position:      "relative",
        overflow:      "hidden",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform  = "translateY(-1px)";
        e.currentTarget.style.filter     = "brightness(1.08)";
        e.currentTarget.style.boxShadow  = "0 6px 22px rgba(0,122,255,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform  = "translateY(0)";
        e.currentTarget.style.filter     = "brightness(1)";
        e.currentTarget.style.boxShadow  = (style?.boxShadow as string) ?? "0 4px 15px rgba(0,122,255,0.3)";
      }}
      onClick={onClick}
    >
      {/* Shimmer overlay */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "calShimmer 2.2s linear infinite",
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />
      <Calendar size={16} strokeWidth={2} style={{ flexShrink: 0, position: "relative", zIndex: 1 }} />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </button>
  );
}
