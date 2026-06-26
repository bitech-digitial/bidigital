"use client";

import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="beam-glow-1" cx="50%" cy="0%" r="60%">
            <stop offset="0%" stopColor="rgba(0,122,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,122,255,0)" />
          </radialGradient>
          <radialGradient id="beam-glow-2" cx="80%" cy="20%" r="40%">
            <stop offset="0%" stopColor="rgba(0,180,255,0.10)" />
            <stop offset="100%" stopColor="rgba(0,180,255,0)" />
          </radialGradient>
          <filter id="beam-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,122,255,0)" />
            <stop offset="40%" stopColor="rgba(0,122,255,0.4)" />
            <stop offset="100%" stopColor="rgba(0,180,255,0)" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="4s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,180,255,0)" />
            <stop offset="50%" stopColor="rgba(0,122,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,68,204,0)" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="1 0"
              to="-1 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Background glows */}
        <rect width="100%" height="100%" fill="url(#beam-glow-1)" />
        <rect width="100%" height="100%" fill="url(#beam-glow-2)" />

        {/* Animated beam lines */}
        {[
          { x1: "0%", y1: "30%", x2: "100%", y2: "70%", dur: "5s", delay: "0s", opacity: 0.5 },
          { x1: "20%", y1: "0%", x2: "80%", y2: "100%", dur: "7s", delay: "1s", opacity: 0.35 },
          { x1: "100%", y1: "20%", x2: "0%", y2: "80%", dur: "9s", delay: "2s", opacity: 0.25 },
          { x1: "60%", y1: "0%", x2: "40%", y2: "100%", dur: "6s", delay: "0.5s", opacity: 0.2 },
          { x1: "0%", y1: "60%", x2: "100%", y2: "40%", dur: "8s", delay: "1.5s", opacity: 0.15 },
        ].map((beam, i) => (
          <line
            key={i}
            x1={beam.x1}
            y1={beam.y1}
            x2={beam.x2}
            y2={beam.y2}
            stroke="url(#line-grad-1)"
            strokeWidth="1"
            opacity={beam.opacity}
            filter="url(#beam-blur)"
          >
            <animate
              attributeName="opacity"
              values={`0;${beam.opacity};0`}
              dur={beam.dur}
              begin={beam.delay}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Moving bright dots on beams */}
        <circle r="2" fill="rgba(0,180,255,0.8)" filter="url(#beam-blur)">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 0,30% L 100%,70%" />
          <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle r="1.5" fill="rgba(0,122,255,0.9)" filter="url(#beam-blur)">
          <animateMotion dur="7s" begin="2s" repeatCount="indefinite" path="M 20%,0 L 80%,100%" />
          <animate attributeName="opacity" values="0;0.8;0" dur="7s" begin="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Blobs sans filter:blur — gradients larges GPU-friendly */}
      <div
        className="aurora-blob absolute"
        style={{
          width: "90%",
          height: "90%",
          top: "-30%",
          left: "-20%",
          background: "radial-gradient(ellipse at 40% 40%, rgba(0,122,255,0.07) 0%, transparent 65%)",
          animation: "aurora-1 16s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="aurora-blob absolute"
        style={{
          width: "80%",
          height: "80%",
          top: "-20%",
          right: "-15%",
          background: "radial-gradient(ellipse at 60% 30%, rgba(0,180,255,0.08) 0%, transparent 60%)",
          animation: "aurora-2 20s ease-in-out infinite 3s",
          willChange: "transform",
        }}
      />
    </div>
  );
}
