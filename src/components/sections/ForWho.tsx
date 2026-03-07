"use client";

import { motion, type Variants } from "framer-motion";
import {
  Wrench,
  UtensilsCrossed,
  Camera,
  Dumbbell,
  Home,
  Leaf,
  Car,
  Hotel,
  Heart,
  Users,
} from "lucide-react";

const professions = [
  { label: "Artisans & Bâtiment", Icon: Wrench },
  { label: "Restaurants & Snacks", Icon: UtensilsCrossed },
  { label: "Photographes & Créatifs", Icon: Camera },
  { label: "Coachs & Yoga", Icon: Dumbbell },
  { label: "Agents immobiliers", Icon: Home },
  { label: "Thérapeutes & Bien-être", Icon: Leaf },
  { label: "Garages & Auto", Icon: Car },
  { label: "Gîtes & Hôtels", Icon: Hotel },
  { label: "Wedding Planners", Icon: Heart },
  { label: "Clubs & Associations", Icon: Users },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ForWho() {
  return (
    <section className="py-24 px-4 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Pour qui
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tu gères ton activité.
            <br />
            On gère ta présence en ligne.
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Tu n'as pas à comprendre le web. Tu n'as pas à apprendre un logiciel.
            Tu as juste à nous dire qui tu es.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {professions.map(({ label, Icon }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="group flex flex-col items-center gap-3 p-6 bg-white border border-[#e2e8f0] rounded-2xl transition-all duration-300 hover:border-[#bfdbfe] hover:bg-[#eff6ff] cursor-default"
            >
              <div className="p-3 rounded-xl bg-[#eff6ff] group-hover:bg-white transition-colors">
                <Icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <span className="text-[#475569] text-sm font-medium text-center leading-tight" style={{ fontFamily: "var(--font-body)" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[#475569] mt-12 text-base"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Si tu as une activité, tu as besoin d'un site.{" "}
          <span className="text-[#0f172a] font-medium">On s'en occupe.</span>
        </motion.p>
      </div>
    </section>
  );
}
