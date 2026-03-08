"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { CAL_LINK, WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

type PopupType = "mid" | "end" | null;

const STORAGE_KEY_1 = "bidigital_popup_1_closed";
const STORAGE_KEY_2 = "bidigital_popup_2_closed";
const DELAY_MS = 30_000;

function PopupContent({
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
    <div
      className="relative overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Decorative radial */}
      <div
        className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(37,99,235,0.06), transparent 70%)",
        }}
      />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 z-10 transition-colors"
        style={{ color: "#94a3b8" }}
        aria-label="Fermer"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8">
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
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCtaClick}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#2563eb] text-white text-sm font-medium rounded-xl hover:bg-[#1d4ed8] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Calendar className="w-4 h-4" />
            Prendre rendez-vous
          </a>
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
    </div>
  );
}

export default function ConversionPopup() {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const activeRef = useRef<PopupType>(null);
  const popup2EligibleAt = useRef<number | null>(null);

  const handleClose = useCallback((type: "mid" | "end") => {
    sessionStorage.setItem(
      type === "mid" ? STORAGE_KEY_1 : STORAGE_KEY_2,
      "true"
    );
    if (type === "mid") {
      popup2EligibleAt.current = Date.now() + DELAY_MS;
    }
    activeRef.current = null;
    setActivePopup(null);
  }, []);

  const handleCtaClick = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY_1, "true");
    sessionStorage.setItem(STORAGE_KEY_2, "true");
    popup2EligibleAt.current = null;
    activeRef.current = null;
    setActivePopup(null);
  }, []);

  /* Scroll tracking */
  useEffect(() => {
    // If popup1 was already closed before this session, popup2 is eligible immediately
    if (sessionStorage.getItem(STORAGE_KEY_1) === "true") {
      popup2EligibleAt.current = 0;
    }

    const handleScroll = () => {
      const key1Closed = sessionStorage.getItem(STORAGE_KEY_1) === "true";
      const key2Closed = sessionStorage.getItem(STORAGE_KEY_2) === "true";
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
        setActivePopup("end");
      } else if (
        pct >= 50 &&
        pct < 90 &&
        !key1Closed &&
        activeRef.current === null
      ) {
        activeRef.current = "mid";
        setActivePopup("mid");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Escape key */
  useEffect(() => {
    if (!activePopup) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose(activePopup);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activePopup, handleClose]);

  return (
    <AnimatePresence>
      {activePopup && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(15,23,42,0.4)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          onClick={() => handleClose(activePopup)}
        >
          <motion.div
            key={activePopup}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative bg-white border border-[#e2e8f0] rounded-3xl w-full"
            style={{
              maxWidth: "440px",
              boxShadow:
                "0 25px 80px rgba(0,0,0,0.12), 0 8px 32px rgba(37,99,235,0.06)",
            }}
          >
            <PopupContent
              type={activePopup}
              onClose={() => handleClose(activePopup)}
              onCtaClick={handleCtaClick}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
