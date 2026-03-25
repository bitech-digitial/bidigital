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
              fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            {/* ── Desktop : tout sur 1–2 lignes naturelles ── */}
            <span className="hidden sm:inline">
              Votre site web.{" "}
              <span style={gradientSpanStyle}>Conforme, visible,{" "}</span>
              <TypewriterWord />
            </span>

            {/* ── Mobile : 2 lignes distinctes ── */}
            <span className="inline sm:hidden">
              <span className="block">Votre site web.</span>
              <span className="flex items-baseline flex-wrap" style={{ gap: "0.25em" }}>
                <span style={gradientSpanStyle}>Conforme, visible,</span>
                <TypewriterWord />
              </span>
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
              <CalButton className="w-full sm:w-auto text-[15px] py-4 px-8 rounded-[14px]">
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
            <svg
              width="46"
              height="16"
              viewBox="0 0 59 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Google"
              style={{ flexShrink: 0 }}
            >
              <path d="M7.17 8.17v2.4h4.04c-.16.99-1.1 2.9-4.04 2.9C4.73 13.47 2.67 11.38 2.67 8.83S4.73 4.2 7.17 4.2c1.39 0 2.32.59 2.85 1.1l1.93-1.86C10.6 2.12 9.04 1.33 7.17 1.33 3.26 1.33.33 4.26.33 8.17s2.93 6.83 6.83 6.83c3.94 0 6.55-2.77 6.55-6.67 0-.45-.05-.79-.11-1.13H7.17v-.03z" fill="#4285F4"/>
              <path d="M21.08 5.42c-2.56 0-4.65 1.94-4.65 4.62s2.09 4.62 4.65 4.62 4.65-1.94 4.65-4.62-2.09-4.62-4.65-4.62zm0 7.42c-1.4 0-2.61-1.16-2.61-2.8s1.21-2.8 2.61-2.8 2.61 1.16 2.61 2.8-1.21 2.8-2.61 2.8z" fill="#EA4335"/>
              <path d="M31.17 5.42c-2.56 0-4.65 1.94-4.65 4.62s2.09 4.62 4.65 4.62 4.65-1.94 4.65-4.62-2.09-4.62-4.65-4.62zm0 7.42c-1.4 0-2.61-1.16-2.61-2.8s1.21-2.8 2.61-2.8 2.61 1.16 2.61 2.8-1.21 2.8-2.61 2.8z" fill="#FBBC05"/>
              <path d="M43.07 5.69h-.07c-.46-.55-1.33-.99-2.43-.99-2.31 0-4.4 2.02-4.4 4.63 0 2.59 2.09 4.6 4.4 4.6 1.1 0 1.97-.44 2.43-.99h.07v.62c0 1.77-.94 2.71-2.46 2.71-1.24 0-2.01-.9-2.33-1.65l-1.77.74c.51 1.23 1.85 2.74 4.1 2.74 2.38 0 4.39-1.41 4.39-4.83V5.74h-1.93v-.05zm-2.32 7.2c-1.4 0-2.56-1.18-2.56-2.79 0-1.63 1.16-2.82 2.56-2.82s2.46 1.2 2.46 2.82c0 1.61-1.14 2.79-2.46 2.79z" fill="#4285F4"/>
              <path d="M48.26 1.67h2.03v12.5h-2.03z" fill="#34A853"/>
              <path d="M56.24 12.84c-1.02 0-1.75-.47-2.22-1.39l6.11-2.53-.21-.52c-.39-1.04-1.56-2.95-3.95-2.95-2.38 0-4.36 1.87-4.36 4.62 0 2.59 1.96 4.62 4.58 4.62 2.12 0 3.34-1.3 3.85-2.05l-1.58-1.05c-.52.77-1.24 1.25-2.22 1.25zm-.14-5.68c.86 0 1.6.43 1.84 1.06l-4.41 1.83c-.04-1.78 1.39-2.89 2.57-2.89z" fill="#EA4335"/>
            </svg>
            <span style={{ color: "#fbbf24" }}>★★★★★</span>
            <span>Noté 5/5 · Clients satisfaits · Depuis 2022</span>
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
