"use client";

import {
  Globe,
  ShoppingBag,
  Smartphone,
  LayoutDashboard,
  Database,
  Palette,
} from "lucide-react";

const cards = [
  { icon: Globe, label: "Site Vitrine", sub: "Livraison 72h" },
  { icon: ShoppingBag, label: "E-commerce", sub: "Sur devis" },
  { icon: Smartphone, label: "App Mobile", sub: "Sur devis" },
  { icon: LayoutDashboard, label: "Plateforme SaaS", sub: "Sur devis" },
  { icon: Database, label: "CRM Métier", sub: "Sur devis" },
  { icon: Palette, label: "Identité Visuelle", sub: "Offert" },
];

/* Duplicate for seamless loop */
const allCards = [...cards, ...cards];

export default function ScrollingCards() {
  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="scroll-track flex gap-4 w-max">
        {allCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-4 sm:px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl flex-shrink-0"
              style={{
                width: "220px",
                height: "80px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div className="p-2 bg-[#eff6ff] rounded-lg flex-shrink-0">
                <Icon className="w-5 h-5 text-[#2563eb]" />
              </div>
              <div className="min-w-0">
                <p
                  className="font-semibold text-sm text-slate-800 truncate"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.label}
                </p>
                <p
                  className="text-xs text-blue-500"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {card.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
