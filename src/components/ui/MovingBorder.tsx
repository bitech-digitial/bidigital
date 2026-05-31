"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";

interface MovingBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  rx?: string;
  ry?: string;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  borderClassName,
  duration = 2400,
  rx = "14px",
  ry = "14px",
}: MovingBorderProps) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength?.();
    if (!length) return;
    const pxPerMs = length / duration;
    progress.set((time * pxPerMs) % length);
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div className={cn("relative inline-flex h-auto w-auto p-px overflow-hidden", containerClassName)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <rect
          ref={pathRef}
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>
      <motion.div
        style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
      >
        <div
          className={cn(
            "h-20 w-20 opacity-[0.7]",
            borderClassName
          )}
          style={{
            background: "radial-gradient(circle, rgba(0,122,255,0.9) 0%, rgba(0,180,255,0.6) 40%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />
      </motion.div>
      <div
        className={cn(
          "relative border border-[rgba(0,122,255,0.2)] rounded-[14px] z-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
