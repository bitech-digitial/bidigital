"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CAL_LINK, WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-32 px-4 overflow-hidden bg-[#f8fafc]"
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Blob centré */}
      <div
        className="absolute z-0"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(37,99,235,0.06)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Votre projet mérite{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #2563eb, #60a5fa)",
              }}
            >
              le meilleur.
            </span>
            <br />
            Parlons-en.
          </h2>
          <p
            className="text-[#475569] text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Chaque projet est unique. Nous prenons le temps de comprendre vos
            besoins pour vous proposer la solution la plus adaptée.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full">
            <motion.a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 text-base"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
            </motion.a>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-green-500/20 text-base"
              style={{
                backgroundColor: "#25d366",
                fontFamily: "var(--font-heading)",
              }}
            >
              <WhatsAppIcon size={20} />
              Nous écrire sur WhatsApp
            </motion.a>
          </div>

          <p
            className="text-[#94a3b8] text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Sans engagement · Réponse sous 2h · Échange confidentiel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
