"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export function ShimmerButton({
  shimmerColor = "rgba(255,255,255,0.4)",
  shimmerSize = "0.08em",
  shimmerDuration = "2s",
  borderRadius = "14px",
  background = "linear-gradient(145deg, #1A8AFF 0%, #007AFF 50%, #0055D4 100%)",
  className,
  children,
  as = "button",
  href,
  target,
  rel,
  ...props
}: ShimmerButtonProps) {
  const style = {
    "--shimmer-color": shimmerColor,
    "--shimmer-size": shimmerSize,
    "--shimmer-duration": shimmerDuration,
    "--border-radius": borderRadius,
    "--background": background,
  } as React.CSSProperties;

  const classes = cn(
    "shimmer-btn relative inline-flex items-center justify-center overflow-hidden font-semibold",
    className
  );

  const content = (
    <>
      <style>{`
        .shimmer-btn {
          background: var(--background);
          border-radius: var(--border-radius);
          color: #fff;
          cursor: pointer;
          border: none;
          outline: none;
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .shimmer-btn:hover {
          box-shadow: 0 8px 32px rgba(0,122,255,0.45);
          transform: translateY(-1px);
        }
        .shimmer-btn:active { transform: translateY(0); }
        .shimmer-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--shimmer-color) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer-slide var(--shimmer-duration) linear infinite;
          border-radius: inherit;
        }
        @keyframes shimmer-slide {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }
      `}</style>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} style={style}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} style={style} {...props}>
      {content}
    </button>
  );
}
