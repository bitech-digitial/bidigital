"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import CalButton from "@/components/ui/CalButton";

const KEY_1 = "bidigital_popup_1_closed";
const KEY_2 = "bidigital_popup_2_closed";
const DELAY_MS = 30_000;

function PopupCard({
  type,
  onClose,
  onCtaClick,
}: {
  type: "mid" | "end";
  onClose: () => void;
  onCtaClick: () => void;
}) {
  const isMid = type === "mid";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(15,23,42,0.35)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 49,
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 50,
          width: "calc(100% - 32px)",
          maxWidth: 440,
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: 24,
          boxShadow: "0 25px 80px rgba(0,0,0,0.12), 0 8px 32px rgba(37,99,235,0.06)",
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
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            color: "#94a3b8",
            zIndex: 10,
          }}
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, padding: "32px 32px 28px" }}>
          <p
            className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {isMid ? "Votre projet nous intéresse" : "Avant de partir..."}
          </p>

          <h3
            className="font-bold text-xl text-[#0f172a] mb-2 leading-snug"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {isMid
              ? "Parlons de votre projet."
              : "Votre site vitrine en 72h vous attend."}
          </h3>

          <p
            className="text-sm text-[#64748b] leading-relaxed mb-5 font-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {isMid
              ? "Un échange de 15 minutes suffit pour définir ensemble la meilleure solution pour votre activité."
              : "Des dizaines de professionnels nous font déjà confiance. Rejoignez-les."}
          </p>

          <div className="flex flex-col gap-3">
            <CalButton className="w-full justify-center py-3.5" onClick={onCtaClick}>
              Prendre rendez-vous
            </CalButton>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25d366", fontFamily: "var(--font-body)" }}
            >
              <WhatsAppIcon size={18} />
              Nous écrire sur WhatsApp
            </a>
          </div>

          <p
            className="text-xs text-[#94a3b8] text-center mt-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {isMid
              ? "Sans engagement · Réponse garantie sous 2h"
              : "Sans engagement · Devis gratuit sous 24h"}
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default function ConversionPopup() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const popup2EligibleAt = useRef<number | null>(null);
  const activeRef = useRef<"mid" | "end" | null>(null);

  const handleClose1 = useCallback(() => {
    setShowPopup1(false);
    sessionStorage.setItem(KEY_1, "true");
    sessionStorage.setItem(KEY_2, "true");
    activeRef.current = null;
  }, []);

  const handleClose2 = useCallback(() => {
    setShowPopup2(false);
    sessionStorage.setItem(KEY_1, "true");
    sessionStorage.setItem(KEY_2, "true");
    activeRef.current = null;
  }, []);

  const handleCtaClick = () => {
    setShowPopup1(false);
    setShowPopup2(false);
    sessionStorage.setItem(KEY_1, "true");
    sessionStorage.setItem(KEY_2, "true");
    popup2EligibleAt.current = null;
    activeRef.current = null;
  };

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
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (showPopup2) handleClose2();
      else if (showPopup1) handleClose1();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showPopup1, showPopup2, handleClose1, handleClose2]);

  return (
    <AnimatePresence>
      {showPopup1 && (
        <motion.div
          key="popup1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ position: "fixed", inset: 0, zIndex: 49 }}
        >
          <PopupCard type="mid" onClose={handleClose1} onCtaClick={handleCtaClick} />
        </motion.div>
      )}
      {showPopup2 && (
        <motion.div
          key="popup2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ position: "fixed", inset: 0, zIndex: 49 }}
        >
          <PopupCard type="end" onClose={handleClose2} onCtaClick={handleCtaClick} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
