"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "bidigital_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "#FFFFFF",
            borderTop: "1px solid #e1eaf5",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
            padding: "20px 32px",
          }}
        >
          <div
            style={{
              maxWidth: 1152,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Texte */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#03045E",
                  marginBottom: 4,
                }}
              >
                Nous utilisons des cookies
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "#4a6080",
                  lineHeight: 1.6,
                  maxWidth: 640,
                }}
              >
                Nous utilisons des cookies essentiels au fonctionnement du site. Aucune donnée n&apos;est vendue à des tiers.{" "}
                <a
                  href="/politique-de-confidentialite"
                  style={{ color: "#0077B6", textDecoration: "underline" }}
                >
                  En savoir plus
                </a>
              </p>
            </div>

            {/* Boutons */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                onClick={refuse}
                style={{
                  background: "transparent",
                  border: "1px solid #e1eaf5",
                  color: "#4a6080",
                  borderRadius: 8,
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  transition: "all 0.2s",
                  minWidth: 100,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,119,182,0.3)";
                  e.currentTarget.style.color = "#03045E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e1eaf5";
                  e.currentTarget.style.color = "#4a6080";
                }}
              >
                Refuser
              </button>
              <button
                onClick={accept}
                style={{
                  background: "#0077B6",
                  border: "none",
                  color: "white",
                  borderRadius: 8,
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 15px rgba(0,119,182,0.3)",
                  transition: "all 0.2s",
                  minWidth: 100,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#023E8A";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,119,182,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0077B6";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,119,182,0.3)";
                }}
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
