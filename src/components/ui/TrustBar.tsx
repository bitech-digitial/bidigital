"use client";

import { ShieldCheck, Star, HeartHandshake } from "lucide-react";

const items = [
  {
    Icon: ShieldCheck,
    iconColor: "#16a34a",
    title: "Satisfait ou remboursé",
    sub: "Zéro risque pour vous",
  },
  {
    Icon: Star,
    iconColor: "#f59e0b",
    title: "100% de clients satisfaits",
    sub: "Ils nous recommandent",
  },
  {
    Icon: HeartHandshake,
    iconColor: "#2563eb",
    title: "Accompagnement inclus",
    sub: "Avant, pendant et après",
  },
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
      className="py-5 px-6"
    >
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {items.map(({ Icon, iconColor, title, sub }, i) => (
          <div key={title} className="flex items-center gap-8 flex-wrap justify-center">
            {i > 0 && (
              <div
                className="hidden sm:block flex-shrink-0"
                style={{ width: 1, height: 32, background: "#e2e8f0" }}
              />
            )}
            <div className="flex items-center gap-3">
              <Icon style={{ width: 20, height: 20, color: iconColor, flexShrink: 0 }} />
              <div className="flex flex-col text-center sm:text-left">
                <span
                  className="font-semibold text-sm text-slate-800"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </span>
                <span
                  className="text-xs text-slate-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {sub}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
