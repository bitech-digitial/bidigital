"use client";

import { Mail } from "lucide-react";
import { WHATSAPP_LINK, CAL_FULL_URL } from "@/lib/constants";

const WhatsAppSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const BiDigitalLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ borderRadius: 8, flexShrink: 0 }}
  >
    <rect width="100" height="100" rx="22" fill="#0f0f1a" />
    <rect x="28" y="26" width="6" height="48" rx="3" fill="url(#fg1)" />
    <path
      d="M34 26 L52 26 Q64 26 64 38 Q64 50 52 50 L34 50"
      stroke="url(#fg1)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M34 50 L54 50 Q68 50 68 62 Q68 74 54 74 L34 74"
      stroke="url(#fg2)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="fg1" x1="28" y1="26" x2="68" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <linearGradient id="fg2" x1="28" y1="50" x2="68" y2="74" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#processus" },
  { label: "FAQ", href: "#faq" },
  { label: "Prendre rendez-vous", href: CAL_FULL_URL, external: true },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060609",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Line 1 — Logo + tagline + contacts */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <BiDigitalLogo />
            <span
              className="font-extrabold text-base tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #f8fafc, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BiDigital
            </span>
          </a>

          {/* Tagline */}
          <p
            className="hidden sm:block text-sm"
            style={{ fontFamily: "var(--font-body)", color: "#475569" }}
          >
            Votre site, conforme et visible.
          </p>

          {/* Contacts */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@bidigital.fr"
              className="flex items-center gap-1.5 text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", color: "#475569" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">contact@bidigital.fr</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)", color: "#475569" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4ade80")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              aria-label="WhatsApp"
            >
              <span style={{ color: "#4ade80" }}>
                <WhatsAppSvg />
              </span>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-4">
              {i > 0 && (
                <span
                  className="hidden sm:inline"
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  ·
                </span>
              )}
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm transition-colors"
                style={{ fontFamily: "var(--font-body)", color: "#475569" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* Legal bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "#334155" }}
          >
            © 2026 BiDigital — Votre site, conforme et visible.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {[
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
              { label: "RGPD", href: "/politique-de-confidentialite" },
            ].map((item, i) => (
              <span key={item.label} className="flex items-center gap-4">
                {i > 0 && (
                  <span style={{ color: "rgba(255,255,255,0.06)" }}>·</span>
                )}
                <a
                  href={item.href}
                  className="text-xs transition-colors"
                  style={{ fontFamily: "var(--font-body)", color: "#334155" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
                >
                  {item.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
