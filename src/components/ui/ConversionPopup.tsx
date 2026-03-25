"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import CalButton from "@/components/ui/CalButton";

const KEY_1 = "bidigital_popup_1_closed";
const KEY_2 = "bidigital_popup_2_closed";
const KEY_EXIT = "bidigital_popup_exit_closed";
const DELAY_MS = 30_000;

function PopupCard({
  type,
  onClose,
  onCtaClick,
}: {
  type: "mid" | "end" | "exit";
  onClose: () => void;
  onCtaClick: () => void;
}) {
  const isMid = type === "mid";
  const isExit = type === "exit";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        boxSizing: "border-box",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          margin: "0 auto",
          background: "#0f1018",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "32px 28px 28px",
          boxSizing: "border-box",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 220,
            height: 220,
            background: "radial-gradient(circle at top left, rgba(99,102,241,0.12), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            color: "#94a3b8",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          aria-label="Fermer"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1, gap: 18 }}>

          {/* Icône */}
          <div style={{
            width: 60, height: 60, borderRadius: 18, fontSize: 28,
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
            border: "1px solid rgba(99,102,241,0.2)",
            boxShadow: "0 0 28px rgba(99,102,241,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            🚀
          </div>

          {/* Titre + accroche */}
          <div>
            <h3 style={{
              fontSize: 20, fontWeight: 900, lineHeight: 1.2,
              fontFamily: "var(--font-heading)", color: "#f8fafc",
              paddingRight: 28, marginBottom: 6,
            }}>
              Votre site, livré.
            </h3>
            <p style={{ fontSize: 12, color: "#64748b", fontFamily: "var(--font-body)" }}>
              Conforme · SEO · 19,99€/mois
            </p>
          </div>

          {/* 3 bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%" }}>
            {[
              { icon: "✅", label: "100% conforme RGPD" },
              { icon: "📈", label: "SEO Google inclus" },
              { icon: "🔒", label: "Sans engagement" },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 11, textAlign: "left",
                padding: "9px 13px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 11,
              }}>
                <span style={{ fontSize: 15, lineHeight: 1, flexShrink: 0 }}>{icon}</span>
                <span style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 500, fontFamily: "var(--font-body)" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA principal */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <CalButton className="w-full justify-center py-4 text-base rounded-xl font-bold" onClick={onCtaClick}>
              Prendre rendez-vous →
            </CalButton>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                gap: 5, fontSize: 12, color: "#475569", textDecoration: "none",
                fontFamily: "var(--font-body)", transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
            >
              <WhatsAppIcon size={13} />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ConversionPopup() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const popup2EligibleAt = useRef<number | null>(null);
  const activeRef = useRef<"mid" | "end" | "exit" | null>(null);

  const closeAll = useCallback((keys: string[]) => {
    setShowPopup1(false);
    setShowPopup2(false);
    setShowExitPopup(false);
    keys.forEach((k) => sessionStorage.setItem(k, "true"));
    activeRef.current = null;
  }, []);

  const handleClose1 = useCallback(() => closeAll([KEY_1, KEY_2]), [closeAll]);
  const handleClose2 = useCallback(() => closeAll([KEY_1, KEY_2]), [closeAll]);
  const handleCloseExit = useCallback(() => closeAll([KEY_EXIT]), [closeAll]);

  const handleCtaClick = useCallback(() => {
    closeAll([KEY_1, KEY_2, KEY_EXIT]);
    popup2EligibleAt.current = null;
  }, [closeAll]);

  useEffect(() => {
    if (sessionStorage.getItem(KEY_1) === "true") {
      popup2EligibleAt.current = 0;
    }

    const handleScroll = () => {
      const key1Closed = sessionStorage.getItem(KEY_1) === "true";
      const key2Closed = sessionStorage.getItem(KEY_2) === "true";
      const total = document.body.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = (window.scrollY / total) * 100;

      if (
        pct >= 90 &&
        !key2Closed &&
        activeRef.current !== "end" &&
        activeRef.current !== "exit" &&
        popup2EligibleAt.current !== null &&
        Date.now() >= popup2EligibleAt.current
      ) {
        activeRef.current = "end";
        setShowPopup2(true);
      } else if (pct >= 50 && pct < 90 && !key1Closed && activeRef.current === null) {
        activeRef.current = "mid";
        setShowPopup1(true);
        popup2EligibleAt.current = Date.now() + DELAY_MS;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 8 &&
        activeRef.current === null &&
        sessionStorage.getItem(KEY_EXIT) !== "true"
      ) {
        activeRef.current = "exit";
        setShowExitPopup(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (showExitPopup) handleCloseExit();
      else if (showPopup2) handleClose2();
      else if (showPopup1) handleClose1();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showPopup1, showPopup2, showExitPopup, handleClose1, handleClose2, handleCloseExit]);

  return (
    <AnimatePresence>
      {showPopup1 && (
        <PopupCard key="popup1" type="mid" onClose={handleClose1} onCtaClick={handleCtaClick} />
      )}
      {showPopup2 && (
        <PopupCard key="popup2" type="end" onClose={handleClose2} onCtaClick={handleCtaClick} />
      )}
      {showExitPopup && (
        <PopupCard key="exit" type="exit" onClose={handleCloseExit} onCtaClick={handleCtaClick} />
      )}
    </AnimatePresence>
  );
}
