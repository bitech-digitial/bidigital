"use client";

interface OnboardingShellProps {
  step: number;
  total: number;
  children: React.ReactNode;
}

const STEP_LABELS = [
  "Objectif",
  "Style",
  "Couleurs",
  "Logo",
  "Inspirations",
  "Pages",
  "Photos",
];

export default function OnboardingShell({ step, total, children }: OnboardingShellProps) {
  const pct = Math.round((step / total) * 100);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#F8FAFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: "#FFFFFF",
          borderRadius: 20,
          boxShadow: "0 4px 40px rgba(0,0,0,0.07)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ padding: "20px 24px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#007AFF", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {STEP_LABELS[step - 1] ?? ""}
            </span>
            <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>
              {step} / {total}
            </span>
          </div>
          <div style={{ height: 4, background: "#EFF6FF", borderRadius: 99 }}>
            <div
              style={{
                height: 4,
                borderRadius: 99,
                width: `${pct}%`,
                background: "linear-gradient(90deg, #00B4D8, #007AFF)",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "24px 24px 28px" }}>{children}</div>
      </div>
    </div>
  );
}
