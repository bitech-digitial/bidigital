"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import CalButton from "@/components/ui/CalButton";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Halo décoratif centré */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          width: 700,
          height: 700,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,85,255,0.08) 0%, rgba(0,210,255,0.04) 50%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Contenu */}
      <div
        className="relative z-10 mx-auto px-4"
        style={{ maxWidth: 1430, paddingTop: "80px", paddingBottom: "80px", width: "100%" }}
      >
        <div className="text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-7"
          >
            <a
              href="/maquette"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#ffffff",
                color: "#0055FF",
                borderRadius: 50,
                padding: "7px 18px",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                border: "1px solid rgba(25,30,79,0.10)",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(25,30,79,0.14), 0 1px 2px rgba(25,30,79,0.06)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ✦ Votre maquette 100% gratuite en 72h
              <span style={{ fontSize: 15, fontWeight: 700, lineHeight: 1 }}>›</span>
            </a>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 5.5vw, 78px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: "#191e4f",
            }}
          >
            <span className="block" style={{ position: "relative", display: "inline-block" }}>
              <span
                style={{
                  background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Agence web
              </span>
              <span
                style={{
                  display: "block",
                  height: 4,
                  background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  borderRadius: 2,
                  position: "absolute",
                  bottom: 2,
                  left: 0,
                  right: 0,
                }}
              />
            </span>
            <span className="block">BiDigital</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 1.8vw, 18px)",
              color: "#474667",
              lineHeight: 1.7,
              maxWidth: 580,
              margin: "0 auto 1.5rem",
            }}
          >
            Gagnez en visibilité, inspirez confiance et attirez plus de clients grâce à un site web professionnel optimisé pour Google.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <CalButton
              className="w-full sm:w-auto"
              style={{
                fontSize: 16,
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: 50,
                background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                border: "none",
                boxShadow: "none",
              }}
            >
              Prendre rendez-vous
            </CalButton>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto focus:outline-none"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#ffffff",
                color: "#191e4f",
                borderRadius: 50,
                padding: "14px 32px",
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                border: "1px solid rgba(25,30,79,0.10)",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(25,30,79,0.14), 0 1px 2px rgba(25,30,79,0.06)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                style={{ color: "#25D366", flexShrink: 0 }} aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Nous écrire
            </a>
          </motion.div>

          {/* Badge confiance */}
          <motion.div
            style={{ marginBottom: "4rem" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#ffffff",
                borderRadius: 50,
                padding: "6px 16px",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "#474667",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Google" style={{ flexShrink: 0 }}>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span style={{ color: "#f59e0b" }}>★★★★★</span>
              <span style={{ color: "#191e4f", fontWeight: 600 }}>5/5</span>
              <span style={{ color: "#474667" }}>· Clients satisfaits</span>
            </span>
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
          <ArrowDown className="w-5 h-5" style={{ color: "rgba(0,85,255,0.35)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
