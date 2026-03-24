"use client";

import { motion } from "framer-motion";
import { ArrowDown, Shield } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import BrowserTyping from "@/components/ui/BrowserTyping";
import CalButton from "@/components/ui/CalButton";
import TechScroll from "@/components/ui/TechScroll";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#050814", minHeight: "100svh" }}>

      {/* ── Animated mesh blobs ── */}
      <div
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
        className="absolute pointer-events-none blob-float"
        style={{
          width: 400,
          height: 400,
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8">

          {/* ── LEFT — text ── */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-6"
              style={{
                background: "rgba(99,102,241,0.1)",
                borderColor: "rgba(99,102,241,0.3)",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 500,
                color: "#a5b4fc",
                letterSpacing: "0.05em",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-[#4ade80] status-dot flex-shrink-0"
              />
              Agence web — France · Belgique · Suisse · Luxembourg
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(38px, 7vw, 76px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#f0f0ff",
                marginBottom: "1.25rem",
              }}
            >
              Votre site web.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #38bdf8 100%)",
                }}
              >
                Conforme, visible,
                <br />
                performant.
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
                color: "#a1a1aa",
                lineHeight: 1.7,
                maxWidth: "520px",
                marginBottom: "2rem",
              }}
              className="mx-auto lg:mx-0"
            >
              De la conception à la mise en ligne, nous créons des sites qui convertissent vos visiteurs en clients —{" "}
              <span style={{ color: "#e0e0ff", fontWeight: 500 }}>
                100% conformes RGPD, SEO inclus.
              </span>
            </motion.p>

            {/* Conformité badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6"
              style={{
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.2)",
                fontSize: 12,
                color: "#4ade80",
                fontFamily: "var(--font-body)",
              }}
            >
              <Shield size={12} />
              RGPD · Mentions légales · Cookies — inclus dès le jour 1
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <div className="btn-glow rounded-[14px] w-full sm:w-auto">
                <CalButton className="w-full sm:w-auto text-[15px] py-4 px-6 rounded-[14px]">
                  Démarrer mon projet
                </CalButton>
              </div>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 font-semibold rounded-[14px] transition-all duration-200 text-[15px]"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.3)",
                  color: "#4ade80",
                  fontFamily: "var(--font-body)",
                }}
              >
                <WhatsAppIcon size={18} />
                Nous écrire
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT — browser mockup — desktop only ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Radial glow behind browser */}
            <div
              className="absolute inset-0 -z-10 glow-pulse-shadow"
              style={{
                background: "radial-gradient(ellipse at center, rgba(99,102,241,0.2), transparent 70%)",
              }}
            />

            {/* Browser window */}
            <div
              className="relative overflow-hidden card-float"
              style={{
                width: 430,
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(135deg, #0d0e20 0%, #111235 100%)",
                boxShadow:
                  "0 30px 80px rgba(99,102,241,0.2), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Chrome bar */}
              <div
                className="flex items-center gap-3 px-4"
                style={{
                  height: 44,
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* 3 dots */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                </div>

                {/* URL bar */}
                <div
                  className="url-bar-shimmer"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    padding: "5px 14px",
                    width: 220,
                    fontSize: 11,
                    color: "#6366f1",
                    fontFamily: "var(--font-body)",
                    textAlign: "center",
                    border: "1px solid rgba(99,102,241,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#4ade80", fontSize: 9 }}>🔒</span>
                  monsite.bidigital.fr
                </div>
              </div>

              {/* Content area */}
              <div className="relative overflow-hidden p-6" style={{ height: 280 }}>
                <BrowserTyping />
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech scroll ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#52525b",
              marginBottom: 14,
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <div className="section-divider" style={{ width: 40, height: 1 }} />
            Technologies maîtrisées
            <div className="section-divider" style={{ width: 40, height: 1 }} />
          </div>
          <TechScroll />
        </motion.div>
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
          <ArrowDown className="w-5 h-5" style={{ color: "#52525b" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
