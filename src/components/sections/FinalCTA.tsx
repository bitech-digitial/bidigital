"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import CalButton from "@/components/ui/CalButton";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-4 overflow-hidden"
      style={{ background: "#f8faff" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#ffffff",
            border: "1px solid rgba(25,30,79,0.10)",
            borderRadius: 24,
            padding: "clamp(40px, 6vw, 72px) clamp(28px, 5vw, 72px)",
            textAlign: "center",
            boxShadow: "0 4px 32px rgba(25,30,79,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Halo décoratif */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-60px",
              right: "-60px",
              width: 300,
              height: 300,
              background: "radial-gradient(circle, rgba(0,85,255,0.07) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{
              background: "#ffffff",
              color: "#0055FF",
              fontFamily: "var(--font-badge)",
              border: "1px solid rgba(25,30,79,0.10)",
              boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)",
            }}
          >
            Prêt à vous lancer ?
          </span>

          <h2
            className="font-bold mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(26px, 4vw, 52px)",
              color: "#191e4f",
              lineHeight: 1.2,
            }}
          >
            Votre projet mérite{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{
                background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                le meilleur.
              </span>
              <span style={{
                display: "block", height: 3,
                background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                borderRadius: 2,
                position: "absolute", bottom: -2, left: 0, right: 0,
              }} />
            </span>
            <br />Parlons-en.
          </h2>

          <p
            className="text-lg mb-10 max-w-lg mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              color: "#474667",
              lineHeight: 1.7,
            }}
          >
            Chaque projet est unique. Nous prenons le temps de comprendre vos besoins pour vous proposer la solution la plus adaptée.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <a
              href="/maquette"
              className="w-full md:w-auto"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, fontWeight: 600, fontFamily: "var(--font-heading)",
                padding: "13px 30px", borderRadius: 50, textDecoration: "none",
                background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                color: "#fff", border: "none",
                boxShadow: "0 4px 20px rgba(0,85,255,0.25)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Obtenir ma maquette gratuite
            </a>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full md:w-auto"
              style={{
                fontSize: 15,
                fontWeight: 600,
                padding: "13px 30px",
                borderRadius: 50,
                background: "#ffffff",
                border: "1px solid rgba(25,30,79,0.10)",
                boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)",
                color: "#191e4f",
                fontFamily: "var(--font-heading)",
                textDecoration: "none",
                transition: "box-shadow 0.2s, transform 0.2s",
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }} aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Nous écrire sur WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
