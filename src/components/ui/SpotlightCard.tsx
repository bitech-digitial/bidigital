"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(0,85,255,0.10)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !spotRef.current) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, ${spotlightColor}, transparent 60%)`;
  }, [spotlightColor]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative overflow-hidden rounded-2xl", className)}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(25,30,79,0.08)",
        boxShadow: isHovered
          ? "0 8px 32px rgba(25,30,79,0.10)"
          : "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        ref={spotRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
        suppressHydrationWarning
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
