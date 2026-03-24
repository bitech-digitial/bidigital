"use client";

import Image from "next/image";

type ProjectMockupProps = {
  image: string;
  alt: string;
  label: string;
  url?: string;
  shimmerDelay?: string;
};

export default function ProjectMockup({
  image,
  alt,
  label,
  url = "bidigital.fr",
  shimmerDelay = "0s",
}: ProjectMockupProps) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 300,
        paddingBottom: 48,
      }}
    >
      {/* ── Glow shadow behind browser (animated) ── */}
      <div
        className="glow-pulse-shadow absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(99,102,241,0.35) 0%, transparent 70%)",
          filter: "blur(24px)",
          borderRadius: 20,
          zIndex: 0,
        }}
      />

      {/* ── Browser window ── */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "100%",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "#0d0e20",
          boxShadow:
            "0 20px 60px rgba(99,102,241,0.25), 0 4px 20px rgba(0,0,0,0.5)",
          zIndex: 1,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Chrome bar */}
        <div
          style={{
            height: 32,
            background: "#111235",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 10px",
          }}
        >
          {/* 3 dots */}
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
          </div>

          {/* URL pill */}
          <div
            className="url-bar-shimmer"
            style={
              {
                flex: 1,
                height: 18,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 20,
                border: "1px solid rgba(99,102,241,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                fontSize: 9,
                color: "#6366f1",
                fontFamily: "var(--font-body)",
                overflow: "hidden",
                "--shimmer-delay": shimmerDelay,
              } as React.CSSProperties
            }
          >
            <span style={{ fontSize: 7, color: "#4ade80" }}>🔒</span>
            {url}
          </div>
        </div>

        {/* Screenshot */}
        <div style={{ position: "relative", height: 168 }}>
          <Image
            src={image}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            quality={75}
            loading="lazy"
          />
          {/* Gradient overlay for label */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(5,8,20,0) 40%, rgba(5,8,20,0.85) 100%)",
            }}
          />
          {/* Sector label overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "8px 10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: 10,
                fontWeight: 600,
                color: "#a5b4fc",
                background: "rgba(99,102,241,0.2)",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 20,
                padding: "2px 8px",
                fontFamily: "var(--font-body)",
              }}
            >
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* ── Phone mockup — absolute bottom-right ── */}
      <div
        className="float-phone"
        style={{
          position: "absolute",
          bottom: 0,
          right: -12,
          zIndex: 2,
          width: 72,
          height: 140,
          borderRadius: 18,
          background: "#0d0d0d",
          border: "2.5px solid #2a2a3e",
          boxShadow:
            "0 12px 30px rgba(0,0,0,0.6), 0 2px 8px rgba(99,102,241,0.2)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            width: 24,
            height: 6,
            background: "#000",
            borderRadius: 10,
            marginTop: 6,
            flexShrink: 0,
            zIndex: 1,
          }}
        />

        {/* Screen */}
        <div style={{ position: "relative", flex: 1, width: "100%", marginTop: 2 }}>
          <Image
            src={image}
            alt={alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={60}
            loading="lazy"
          />
          {/* Screen reflection */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Home indicator */}
        <div
          style={{
            width: 28,
            height: 3,
            background: "rgba(255,255,255,0.2)",
            borderRadius: 10,
            margin: "4px auto",
            flexShrink: 0,
          }}
        />
      </div>
    </div>
  );
}
