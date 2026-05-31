"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname.startsWith("/tunnel")) return null;

  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes waGlowPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.14); }
          50%       { box-shadow: 0 6px 34px rgba(37,211,102,0.82), 0 2px 8px rgba(0,0,0,0.14); }
        }
        .wa-cta-btn { animation: waGlowPulse 2.4s ease-in-out infinite; }
      `}</style>

      <div
        className="fixed z-50 md:hidden"
        aria-label="Nous contacter"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 14px",
          paddingBottom: "max(14px, env(safe-area-inset-bottom, 14px))",
          background: "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 60%, transparent 100%)",
          transform: show ? "translateY(0)" : "translateY(100%)",
          opacity: show ? 1 : 0,
          transition: "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
          pointerEvents: show ? "auto" : "none",
        }}
      >
        <div className="flex gap-3">
          {/* ── Phone button — large avec numéro ── */}
          <a
            href="tel:+33749999425"
            aria-label="Appeler BiDigital au 07 49 99 94 25"
            style={{
              flex: 1,
              height: 54,
              borderRadius: 16,
              background: "linear-gradient(145deg, #1A8AFF 0%, #007AFF 50%, #0055D4 100%)",
              color: "#FFFFFF",
              boxShadow: "0 4px 18px rgba(0,122,255,0.55), 0 2px 6px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              textDecoration: "none",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: "-0.01em",
            }}
          >
            <Phone size={20} strokeWidth={2.5} style={{ flexShrink: 0 }} />
            07 49 99 94 25
          </a>

          {/* ── WhatsApp button — petit icône ── */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter BiDigital sur WhatsApp"
            className="wa-cta-btn"
            style={{
              flexShrink: 0,
              width: 54,
              height: 54,
              borderRadius: 16,
              background: "linear-gradient(135deg, #0A7A6B 0%, #128C7E 22%, #1DB95A 58%, #25D366 80%, #1DBD5A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden
              style={{ flexShrink: 0, position: "relative", zIndex: 1 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
