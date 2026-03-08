"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import BrowserTyping from "@/components/ui/BrowserTyping";
import CalButton from "@/components/ui/CalButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ── Blobs ── */}
      <div
        className="absolute z-0 blob-float pointer-events-none"
        style={{
          width: "560px",
          height: "560px",
          top: "-160px",
          left: "-160px",
          background: "rgba(37,99,235,0.09)",
          borderRadius: "50%",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute z-0 blob-float-alt pointer-events-none"
        style={{
          width: "480px",
          height: "480px",
          top: "-60px",
          right: "-80px",
          background: "rgba(96,165,250,0.10)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute z-0 blob-float pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(219,234,254,0.12)",
          borderRadius: "50%",
          filter: "blur(70px)",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8">

          {/* ── LEFT — text ── */}
          <div className="text-center lg:text-left">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#16a34a" }} />
              Agence web — France · Belgique · Suisse · Luxembourg
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5 text-[#0f172a]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Votre site web,
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #2563eb, #60a5fa)",
                }}
              >
                livré en 72h.
              </span>
            </motion.h1>

            {/* Subtitle — hidden on mobile */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block text-base sm:text-lg text-[#475569] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light"
              style={{ fontFamily: "var(--font-body)" }}
            >
              De la conception à la mise en ligne, nous créons des sites qui
              convertissent vos visiteurs en clients.{" "}
              <span className="text-[#0f172a] font-medium">
                Sur devis personnalisé.
              </span>
            </motion.p>

            {/* Mobile browser window — mobile only */}
            <motion.div
              className="block lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                width: "100%",
                maxWidth: "100%",
                margin: "20px 0",
                borderRadius: 14,
                boxShadow: "0 12px 40px rgba(37,99,235,0.10)",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
              }}
            >
              {/* Chrome bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "0 16px",
                  height: 44,
                  background: "#ffffff",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                </div>
                <div
                  style={{
                    background: "#f1f5f9",
                    borderRadius: 20,
                    padding: "5px 14px",
                    fontSize: 11,
                    color: "#64748b",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  monsite.bidigital.fr
                </div>
              </div>
              {/* Static content */}
              <BrowserTyping mobileMode={true} />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <CalButton className="w-full sm:w-auto text-base px-7 py-4">
                Prendre rendez-vous
              </CalButton>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 text-white font-semibold rounded-xl transition-all duration-200 hover:opacity-90 text-base"
                style={{
                  backgroundColor: "#25d366",
                  fontFamily: "var(--font-body)",
                }}
              >
                <WhatsAppIcon size={20} />
                Nous écrire
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT — browser mockup dynamique ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Radial glow */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.07), transparent 70%)",
              }}
            />

            {/* Browser window */}
            <div
              className="relative overflow-hidden card-float"
              style={{
                width: 420,
                borderRadius: 20,
                border: "1px solid #e2e8f0",
                background:
                  "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
                boxShadow:
                  "0 20px 60px rgba(37,99,235,0.10), 0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              {/* Chrome bar */}
              <div
                className="flex items-center gap-3 px-4"
                style={{
                  height: 44,
                  background: "#ffffff",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {/* 3 dots */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: "#ff5f57",
                    }}
                  />
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: "#febc2e",
                    }}
                  />
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: "#28c840",
                    }}
                  />
                </div>

                {/* URL bar */}
                <div
                  style={{
                    background: "#f1f5f9",
                    borderRadius: 20,
                    padding: "6px 16px",
                    width: 220,
                    fontSize: 12,
                    color: "#64748b",
                    fontFamily: "var(--font-body)",
                    textAlign: "center",
                  }}
                >
                  monsite.bidigital.fr
                </div>
              </div>

              {/* Content area */}
              <div
                className="relative overflow-hidden p-6"
                style={{ height: 280 }}
              >
                <BrowserTyping />
              </div>
            </div>
          </div>
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
          <ArrowDown className="w-5 h-5 text-[#94a3b8]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
