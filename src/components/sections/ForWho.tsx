"use client";

import { motion } from "framer-motion";
import {
  Wrench, UtensilsCrossed, Camera, Dumbbell, Home,
  Leaf, Car, Hotel, Heart, Users, Scissors, ShoppingBag,
  Stethoscope, Scale, GraduationCap, Truck, Music, Palette,
  BookOpen, Baby, Flower2, Plane, Briefcase, Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const professions: { label: string; Icon: LucideIcon }[] = [
  { label: "Artisans & Bâtiment", Icon: Wrench },
  { label: "Restaurants & Cafés", Icon: UtensilsCrossed },
  { label: "Photographes & Vidéastes", Icon: Camera },
  { label: "Coachs & Yoga", Icon: Dumbbell },
  { label: "Agents Immobiliers", Icon: Home },
  { label: "Thérapeutes & Bien-être", Icon: Leaf },
  { label: "Garages & Auto", Icon: Car },
  { label: "Gîtes & Hôtels", Icon: Hotel },
  { label: "Wedding Planners", Icon: Heart },
  { label: "Clubs & Associations", Icon: Users },
];

const ticker1: { label: string; Icon: LucideIcon }[] = [
  { label: "Artisans", Icon: Wrench },
  { label: "Restaurants", Icon: UtensilsCrossed },
  { label: "Photographes", Icon: Camera },
  { label: "Coachs", Icon: Dumbbell },
  { label: "Immobilier", Icon: Home },
  { label: "Bien-être", Icon: Leaf },
  { label: "Garages", Icon: Car },
  { label: "Hôtels & Gîtes", Icon: Hotel },
  { label: "Wedding Planners", Icon: Heart },
  { label: "Associations", Icon: Users },
  { label: "Coiffeurs", Icon: Scissors },
  { label: "Commerces", Icon: ShoppingBag },
];

const ticker2: { label: string; Icon: LucideIcon }[] = [
  { label: "Professions médicales", Icon: Stethoscope },
  { label: "Avocats", Icon: Scale },
  { label: "Formateurs", Icon: GraduationCap },
  { label: "Transporteurs", Icon: Truck },
  { label: "Artistes", Icon: Music },
  { label: "Designers", Icon: Palette },
  { label: "Consultants", Icon: BookOpen },
  { label: "Assistantes mat.", Icon: Baby },
  { label: "Fleuristes", Icon: Flower2 },
  { label: "Agences voyage", Icon: Plane },
  { label: "Startups & PME", Icon: Briefcase },
  { label: "E-commerce", Icon: Globe },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

function TickerTag({ item }: { item: { label: string; Icon: LucideIcon } }) {
  return (
    <div
      className="inline-flex items-center gap-2 flex-shrink-0 rounded-full px-4 py-2"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "var(--font-body)",
      }}
    >
      <item.Icon style={{ width: 14, height: 14, color: "#818cf8", flexShrink: 0 }} />
      <span
        className="font-medium text-sm whitespace-nowrap"
        style={{ color: "#a1a1aa" }}
      >
        {item.label}
      </span>
    </div>
  );
}

export default function ForWho() {
  const doubled1 = [...ticker1, ...ticker1];
  const doubled2 = [...ticker2, ...ticker2];

  return (
    <section className="py-20 px-4" style={{ background: "#06071a" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            Pour qui
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Vous gérez votre activité.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              Nous gérons votre présence digitale.
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
          >
            Quelle que soit votre activité, nous avons la solution digitale qu&apos;il vous faut.
          </p>
        </motion.div>

        {/* Grid 10 items */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {professions.map(({ label, Icon }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-col items-center p-4 text-center cursor-default transition-all duration-200 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(99,102,241,0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(99,102,241,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.02)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
              }}
            >
              <div
                className="rounded-xl p-2.5 mx-auto mb-3"
                style={{ background: "rgba(99,102,241,0.1)" }}
              >
                <Icon style={{ width: 22, height: 22, color: "#818cf8" }} />
              </div>
              <span
                className="font-medium text-sm"
                style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Ticker rows */}
        <div className="mt-10 flex flex-col gap-3 overflow-hidden">
          <div
            className="relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex gap-3 ticker-track-1" style={{ width: "max-content" }}>
              {doubled1.map((item, i) => (
                <TickerTag key={`t1-${i}`} item={item} />
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex gap-3 ticker-track-2" style={{ width: "max-content" }}>
              {doubled2.map((item, i) => (
                <TickerTag key={`t2-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
