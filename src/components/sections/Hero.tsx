"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import CalButton from "@/components/ui/CalButton";
import TypewriterWord from "@/components/ui/TypewriterWord";

export default function Hero() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (blob1Ref.current) blob1Ref.current.style.transform = `translateY(${y * 0.18}px)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translateY(${y * 0.12}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gradientSpanStyle = {
    background: "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #38bdf8 100%)",
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent" as const,
    backgroundClip: "text" as const,
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#08090f", minHeight: "100svh" }}
    >
      {/* ── Animated mesh blobs ── */}
      <div
        ref={blob1Ref}
        className="absolute pointer-events-none mesh-blob"
        style={{
          width: 700,
          height: 700,
          top: "-200px",
          left: "-150px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute pointer-events-none mesh-blob-alt"
        style={{
          width: 600,
          height: 600,
          top: "-100px",
          right: "-120px",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none mesh-blob"
        style={{
          width: 400,
          height: 400,
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animationDelay: "3s",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="text-center">

          {/* H1 — desktop et mobile structurés différemment */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gradient"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 8.5vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            {/* Ligne 1 */}
            <span className="block">Votre site web.</span>

            {/* Ligne 2 — ne casse JAMAIS quelle que soit la taille */}
            <span
              className="block whitespace-nowrap"
              style={gradientSpanStyle}
            >
              Conforme, visible,
            </span>

            {/* Ligne 3 — typewriter */}
            <span className="block">
              <TypewriterWord />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#94a3b8",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            BiDigital conçoit des sites qui convertissent, conformes RGPD,
            optimisés SEO — livrés avec tout inclus.{" "}
            <span style={{ color: "#f8fafc", fontWeight: 500 }}>
              À partir de 19,99€/mois.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          >
            <div className="btn-glow rounded-[14px] w-full sm:w-auto">
              <CalButton className="w-full sm:w-auto" style={{ fontSize: 15, padding: "14px 28px", borderRadius: 14 }}>
                Prendre rendez-vous
              </CalButton>
            </div>

            {/* Bouton WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 font-semibold rounded-[14px] transition-all duration-200 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#f8fafc",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "#25D366", flexShrink: 0 }}
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Nous écrire
            </a>
          </motion.div>

          {/* Trust badge avec logo Google */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "#64748b",
            }}
          >
            {/* "G" Google officiel 4 couleurs */}
            <svg
              width="18" height="18" viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Google"
              style={{ flexShrink: 0 }}
            >
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span style={{ color: "#fbbf24" }}>★★★★★</span>
            <span style={{ color: "#94a3b8", fontWeight: 600 }}>5/5</span>
            <span style={{ color: "#475569" }}>· Clients satisfaits · Depuis 2022</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" style={{ color: "#334155" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
