"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import CalButton from "@/components/ui/CalButton";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{ background: "#16182e" }}
    >
      {/* Halo radial obligatoire sur section sombre */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          width: 700,
          height: 700,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{
              background: "rgba(0,85,255,0.2)",
              color: "#00D2FF",
              fontFamily: "var(--font-badge)",
            }}
          >
            Prêt à vous lancer ?
          </span>

          <h2
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4.4vw, 63px)",
              color: "#ffffff",
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
            className="text-lg mb-12 max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
            }}
          >
            Chaque projet est unique. Nous prenons le temps de comprendre vos besoins pour vous proposer la solution la plus adaptée.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <CalButton
              className="w-full md:w-auto"
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

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full md:w-auto"
              style={{
                fontSize: 16,
                fontWeight: 400,
                padding: "14px 32px",
                borderRadius: 50,
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#ffffff",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              <WhatsAppIcon size={20} />
              Nous écrire sur WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
