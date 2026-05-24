"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import FloatingShapesLayer from "@/components/ui/FloatingShapesLayer";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import CalButton from "@/components/ui/CalButton";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-32 px-4 overflow-hidden"
      style={{ background: "#F0F9FF" }}
    >
      {/* Animated mesh blobs */}
      <div
        className="absolute pointer-events-none mesh-blob"
        style={{
          width: 600,
          height: 400,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse, rgba(202,240,248,0.7) 0%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      />
      <div
        className="absolute pointer-events-none mesh-blob-alt"
        style={{
          width: 300,
          height: 300,
          bottom: "10%",
          right: "10%",
          background:
            "radial-gradient(ellipse, rgba(144,224,239,0.5) 0%, transparent 70%)",
          filter: "blur(50px)",
          borderRadius: "50%",
          opacity: 0.6,
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <FloatingShapesLayer variant="light" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-6"
            style={{
              background: "rgba(0,122,255,0.08)",
              border: "1px solid rgba(0,122,255,0.2)",
              color: "#007AFF",
              fontFamily: "var(--font-body)",
            }}
          >
            Prêt à vous lancer ?
          </span>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#1D2939",
              letterSpacing: "-0.03em",
            }}
          >
            Votre projet mérite{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #007AFF, #0044CC)",
              }}
            >
              le meilleur.
            </span>
            <br />
            Parlons-en.
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "#475467",
            }}
          >
            Chaque projet est unique. Nous prenons le temps de comprendre vos
            besoins pour vous proposer la solution la plus adaptée.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full">
            <div className="btn-glow rounded-xl w-full md:w-auto">
              <CalButton className="w-full md:w-auto" style={{ fontSize: 16, padding: "14px 28px" }}>
                Prendre rendez-vous
              </CalButton>
            </div>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 font-bold rounded-xl transition-all duration-200 text-base"
              style={{
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.25)",
                color: "#16a34a",
                fontFamily: "var(--font-heading)",
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
