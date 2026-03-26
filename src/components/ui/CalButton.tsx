"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { ReactNode, CSSProperties } from "react";

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
          light: { "cal-brand": "#0077B6" },
          dark:  { "cal-brand": "#0077B6" },
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
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ${className}`}
      style={{
        background:    "linear-gradient(135deg, #0077B6 0%, #023E8A 100%)",
        color:         "#ffffff",
        fontFamily:    "var(--font-heading)",
        fontSize:      "15px",
        padding:       "12px 22px",
        borderRadius:  12,
        border:        "none",
        cursor:        "pointer",
        boxShadow:     "0 4px 15px rgba(0,119,182,0.3)",
        transition:    "transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform  = "translateY(-1px)";
        e.currentTarget.style.filter     = "brightness(1.08)";
        e.currentTarget.style.boxShadow  = "0 6px 22px rgba(0,119,182,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform  = "translateY(0)";
        e.currentTarget.style.filter     = "brightness(1)";
        e.currentTarget.style.boxShadow  = (style?.boxShadow as string) ?? "0 4px 15px rgba(0,119,182,0.3)";
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
