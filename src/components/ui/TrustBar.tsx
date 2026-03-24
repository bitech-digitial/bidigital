"use client";

import { ShieldCheck, Star, HeartHandshake } from "lucide-react";

const items = [
  {
    Icon: ShieldCheck,
    iconColor: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    title: "Satisfait ou remboursé",
    sub: "Zéro risque pour vous",
  },
  {
    Icon: Star,
    iconColor: "#fb923c",
    bg: "rgba(251,146,60,0.1)",
    title: "100% de clients satisfaits",
    sub: "Ils nous recommandent",
  },
  {
    Icon: HeartHandshake,
    iconColor: "#818cf8",
    bg: "rgba(99,102,241,0.1)",
    title: "Accompagnement inclus",
    sub: "Avant, pendant et après",
  },
];

export default function TrustBar() {
  return (
    <div
      className="py-5 px-6"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {items.map(({ Icon, iconColor, bg, title, sub }, i) => (
          <div key={title} className="flex items-center gap-8 flex-wrap justify-center">
            {i > 0 && (
              <div
                className="hidden sm:block flex-shrink-0"
                style={{ width: 1, height: 32, background: "rgba(255,255,255,0.06)" }}
              />
            )}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: bg }}
              >
                <Icon style={{ width: 16, height: 16, color: iconColor }} />
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <span
                  className="font-semibold text-sm"
                  style={{ fontFamily: "var(--font-heading)", color: "#e0e0ff" }}
                >
                  {title}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
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
