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
        background: "rgba(15,23,42,0.40)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "20px",
          padding: "32px 28px 28px",
          boxSizing: "border-box",
          boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
          overflow: "hidden",
        }}
      >
        {/* Decorative radial */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 192,
            height: 192,
            background: "radial-gradient(circle at top left, rgba(37,99,235,0.06), transparent 70%)",
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
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: 8,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            color: "#94a3b8",
          }}
          aria-label="Fermer"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: isExit ? "#7c3aed" : "#3b82f6",
              marginBottom: 8,
              fontFamily: "var(--font-body)",
            }}
          >
            {isMid ? "Votre projet nous intéresse" : isExit ? "Offre exclusive" : "Avant de partir..."}
          </p>

          <h3
            style={{
              fontSize: "clamp(18px, 4vw, 22px)",
              fontWeight: 700,
              fontFamily: "var(--font-heading)",
              color: "#0f172a",
              marginBottom: 8,
              paddingRight: 32,
              lineHeight: 1.3,
            }}
          >
            {isMid
              ? "Parlons de votre projet."
              : isExit
              ? "Obtenez votre audit de site offert."
              : "Votre site vitrine en 72h vous attend."}
          </h3>

          <p
            style={{
              fontSize: 14,
              color: "#64748b",
              marginBottom: 20,
              lineHeight: 1.5,
              fontFamily: "var(--font-body)",
            }}
          >
            {isMid
              ? "Un échange de 15 minutes suffit pour définir ensemble la meilleure solution pour votre activité."
              : isExit
              ? "Avant de partir — on analyse votre site actuel gratuitement et on vous envoie nos recommandations sous 48h."
              : "Des dizaines de professionnels nous font déjà confiance. Rejoignez-les."}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <CalButton
              className="w-full justify-center py-3.5 text-sm rounded-xl"
              onClick={onCtaClick}
            >
              Prendre rendez-vous
            </CalButton>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                padding: "14px 20px",
                fontSize: 14,
                borderRadius: 12,
                boxSizing: "border-box",
                background: "#25d366",
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
              }}
            >
              <WhatsAppIcon size={18} />
              Nous écrire sur WhatsApp
            </a>
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#94a3b8",
              marginTop: 14,
              fontFamily: "var(--font-body)",
            }}
          >
            {isMid
              ? "Sans engagement · Réponse garantie sous 2h"
              : isExit
              ? "Audit 100% gratuit · Livré sous 48h · Aucun engagement"
              : "Sans engagement · Devis gratuit sous 24h"}
          </p>
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

  // Scroll-based popups (mid + end)
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

  // Exit intent — cursor leaves viewport toward top
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

  // Keyboard escape
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
