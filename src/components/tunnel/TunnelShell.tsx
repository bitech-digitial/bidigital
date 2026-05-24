// src/components/tunnel/TunnelShell.tsx
"use client";
import { motion } from "framer-motion";

interface TunnelShellProps {
  step: number;
  children: React.ReactNode;
}

const TOTAL = 4;

export default function TunnelShell({ step, children }: TunnelShellProps) {
  const progress = (step / TOTAL) * 100;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #F0F4FA 0%, #F5F8FC 40%, #FFFFFF 100%)",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: "#FFFFFF",
          borderRadius: 20,
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 28px 16px",
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <a
              href="/"
              style={{
                fontWeight: 800,
                fontSize: 18,
                fontFamily: "var(--font-heading)",
                background:
                  "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textDecoration: "none",
              }}
            >
              BiDigital
            </a>
            <span
              style={{
                fontSize: 12,
                color: "#94A3B8",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
              }}
            >
              Étape {step} / {TOTAL}
            </span>
          </div>

          <div
            style={{
              height: 3,
              background: "#F1F5F9",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #00B4D8, #007AFF)",
                borderRadius: 2,
              }}
              initial={{ width: `${((step - 1) / TOTAL) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "28px" }}>{children}</div>
      </div>
    </main>
  );
}
