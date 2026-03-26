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
    iconColor: "#0077B6",
    bg: "rgba(0,119,182,0.08)",
    title: "Accompagnement inclus",
    sub: "Avant, pendant et après",
  },
];

export default function TrustBar() {
  return (
    <div
      className="py-5 px-6"
      style={{
        background: "#F0F9FF",
        borderTop: "1px solid #e1eaf5",
        borderBottom: "1px solid #e1eaf5",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
        {items.map(({ Icon, iconColor, bg, title, sub }, i) => (
          <div key={title} className="flex items-center gap-8 flex-wrap justify-center">
            {i > 0 && (
              <div
                className="hidden sm:block flex-shrink-0"
                style={{ width: 1, height: 32, background: "#e1eaf5" }}
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
                  style={{ fontFamily: "var(--font-heading)", color: "#03045E" }}
                >
                  {title}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
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
