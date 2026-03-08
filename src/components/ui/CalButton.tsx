"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useCallback } from "react";
import { Calendar } from "lucide-react";
import { ReactNode } from "react";

interface CalButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}

export default function CalButton({
  children = "Prendre rendez-vous",
  className = "",
  variant = "primary",
  onClick,
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#2563eb" },
          dark: { "cal-brand": "#2563eb" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  const handleClick = useCallback(async () => {
    onClick?.();
    const cal = await getCalApi({ namespace: "15min" });
    cal("modal", {
      calLink: "bidigital/15min",
      config: { layout: "month_view" },
    });
  }, [onClick]);

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 cursor-pointer border-none";

  const variantStyles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200",
    ghost:
      "bg-transparent border border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-600 hover:text-slate-800 px-6 py-3.5",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={handleClick}
    >
      <Calendar size={18} />
      {children}
    </button>
  );
}
