"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Search,
  Paintbrush,
  Star,
  ChevronDown,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Flame,
  Rocket,
  TrendingUp,
  ThumbsUp,
  CheckCircle2,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Data ──────────────────────────────────────────────────────────────────────

const values = [
  {
    num: "01",
    icon: Users,
    title: "Client first",
    desc: "Pour chaque projet, nous nous demandons d'abord si cela sert les intérêts de nos clients et répond aux attentes de leurs propres clients. Notre succès dépend du vôtre. Votre satisfaction est notre priorité, et nous travaillons jusqu'à ce que vous soyez entièrement satisfait.",
  },
  {
    num: "02",
    icon: Star,
    title: "La qualité passe avant la quantité",
    desc: "Chez BiDigital, nous ne sommes pas de simples prestataires, nous sommes des partenaires de croissance. Nous visons l'excellence et choisissons de travailler uniquement avec des clients pour lesquels nous pouvons avoir un véritable impact.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Apprendre, s'adapter et changer",
    desc: "Nous visons la perfection, mais nous restons humains. Chaque erreur est une opportunité d'apprentissage. Chez BiDigital, nous valorisons la collaboration et le partage d'idées pour générer rapidement des solutions efficaces.",
  },
  {
    num: "04",
    icon: Flame,
    title: "Travailler avec passion et conviction",
    desc: "Nous voulons être des partenaires qui apportent de la valeur à chaque interaction. Nous faisons ce métier avec passion, raison pour laquelle nous le faisons bien. Nous acceptons le dialogue et défendons ce que nous croyons sur la base de notre expérience.",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Accélérateur de projets",
    desc: "Trop souvent, les projets échouent non par manque de bonnes idées, mais à cause de processus trop lourds. Chez BiDigital, nous agissons comme des accélérateurs pour vos projets digitaux — de manière itérative, rapide et sans stress.",
  },
];

const expertises = [
  {
    icon: Globe,
    title: "Création de site internet",
    desc: "Un site conçu sur-mesure, optimisé SEO et conforme RGPD dès la mise en ligne. Vitrine ou e-commerce, nous créons des sites qui convertissent.",
    href: "/creation-site-internet",
  },
  {
    icon: Search,
    title: "Référencement naturel (SEO)",
    desc: "Attirez plus de clients qualifiés. Nous améliorons votre positionnement Google grâce à une stratégie SEO technique, sémantique et durable.",
    href: "/referencement-naturel-seo",
  },
  {
    icon: Paintbrush,
    title: "Webdesign sur-mesure",
    desc: "Des interfaces modernes et pensées pour l'expérience utilisateur. Un design qui reflète votre image de marque et pousse vos visiteurs à l'action.",
    href: "/webdesign",
  },
];

const stats = [
  {
    icon: CheckCircle2,
    value: "100%",
    label: "d'avis positifs",
    desc: "Nos clients se déclarent satisfaits, avec une note parfaite sur Google.",
  },
  {
    icon: ThumbsUp,
    value: "80%",
    label: "par recommandation",
    desc: "La majorité de nos nouveaux clients viennent via recommandation directe.",
  },
  {
    icon: TrendingUp,
    value: "+150%",
    label: "de trafic en moyenne",
    desc: "Nos clients constatent une augmentation significative de leur trafic organique.",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "satisfaction client",
    desc: "Note moyenne sur l'ensemble de nos missions et projets livrés.",
  },
];

const faqs = [
  {
    q: "Comment choisir la bonne agence web ?",
    a: "Choisir la bonne agence web est primordial pour la réussite de vos projets digitaux. Pour sélectionner votre partenaire, examinez ses réalisations, sa réputation, évaluez sa communication et comparez les tarifs pratiqués. Le feeling est également un critère de choix, car vous allez collaborer plusieurs semaines, voire plusieurs mois. N'hésitez pas à entrer en contact avec l'agence pour évaluer la qualité des échanges. Enfin, définissez vos besoins et objectifs pour faciliter votre choix.",
  },
  {
    q: "Pourquoi faire appel à une agence web ?",
    a: "Faire appel à une agence web est un investissement essentiel dès la création de tout projet de site internet ou identité de marque. Bien sûr, il existe des solutions DIY, mais souvent avec un résultat qualitatif contre-productif. Si vous voulez développer votre entreprise, vous devez investir dans votre image de marque. La façon dont vos clients vous perçoivent est primordiale face à la concurrence. Seule une agence web vous apportera la visibilité et la reconnaissance dont vous avez besoin.",
  },
  {
    q: "Quels avantages à créer son site avec BiDigital ?",
    a: "Aujourd'hui, plus que jamais, toute entreprise devrait avoir un site internet. Dans une population connectée à plus de 85 %, les consommateurs réalisent des recherches en ligne avant de conclure un achat. Votre site web est votre meilleur commercial — accessible 24h/24, 7j/7. Chez BiDigital, nous vous accompagnons de A à Z : création, SEO, hébergement et maintenance pour que votre site génère des leads qualifiés et contribue à votre croissance.",
  },
  {
    q: "Comment sont déterminés les prix d'une agence web ?",
    a: "Les prix varient selon plusieurs critères : expérience, expertise, réputation, mais aussi la complexité et l'étendue des fonctionnalités requises pour votre projet. Il est crucial de ne pas sacrifier la qualité pour des raisons budgétaires. Un site bien conçu et performant est un investissement qui génère des résultats positifs à long terme. Chez BiDigital, nous établissons des devis personnalisés et transparents, adaptés à votre budget et à vos objectifs réels.",
  },
  {
    q: "BiDigital travaille-t-elle avec les petites entreprises et artisans ?",
    a: "Absolument. BiDigital s'est spécialisée dans l'accompagnement des TPE, artisans et PME qui souhaitent développer leur présence en ligne sans se perdre dans la complexité du digital. Nous proposons des offres adaptées aux petites structures, avec un interlocuteur unique, une communication directe et des résultats mesurables. Contactez-nous pour discuter de votre projet, quel que soit votre stade de développement.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AgenceContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — split 2 cols texte + photo
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        {/* Halo radial doux */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700, height: 700,
            top: "50%", left: "55%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(0,85,255,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Colonne gauche : texte */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1"
            >
              <span
                className="inline-block mb-5 text-xs font-bold tracking-widest uppercase"
                style={{ color: "#0055FF", fontFamily: "var(--font-body)" }}
              >
                Agence web · BiDigital
              </span>

              <h1
                className="font-extrabold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  letterSpacing: "-0.03em",
                  color: "#191e4f",
                }}
              >
                À vos côtés pour réussir
                <br />
                votre{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    stratégie digitale
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h1>

              <p
                className="text-lg mb-10"
                style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 500, lineHeight: 1.7 }}
              >
                Agence web spécialisée, BiDigital accompagne les TPE, artisans et PME dans la création
                de leur présence en ligne. Une équipe à taille humaine, qui vous conseille et vous
                accompagne dans la durée.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <div className="btn-glow rounded-full inline-flex">
                  <CalButton style={{ fontSize: 15, padding: "13px 28px", borderRadius: 50 }}>
                    Démarrer mon projet
                  </CalButton>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#f8faff",
                    color: "#191e4f",
                    border: "1px solid rgba(25,30,79,0.08)",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                    borderRadius: 50,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,85,255,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(25,30,79,0.08)"; }}
                >
                  Nous contacter <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Colonne droite : photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="order-2"
            >
              <div
                className="relative rounded-3xl overflow-hidden w-full"
                style={{ aspectRatio: "4/5", maxHeight: 560 }}
              >
                <img
                  src="/images/agence-hero.webp"
                  alt="Équipe agence web BiDigital — collaboration et stratégie digitale"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  fetchPriority="high" decoding="async" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ADN DE L'AGENCE — mega card blanche
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ background: "#f8faff" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
          style={{
            background: "#FFFFFF",
            borderRadius: 32,
            padding: "clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px)",
            boxShadow: "0 8px 60px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
            border: "1px solid rgba(25,30,79,0.08)",
          }}
        >
          {/* — Travaillez avec une agence — 2 cols — */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 pb-16" style={{ borderBottom: "1px solid #f0f2f5" }}>
            {/* Gauche : titre */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65 }}
            >
              <h2
                className="font-extrabold leading-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.025em",
                  color: "#191e4f",
                  lineHeight: 1.15,
                }}
              >
                Travaillez avec une agence
                <br />
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    qui vise l&apos;excellence
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p
                className="mt-5 text-base italic"
                style={{ fontFamily: "var(--font-body)", color: "#474667", lineHeight: 1.7 }}
              >
                Notre créativité est votre meilleur atout.
              </p>
            </motion.div>

            {/* Droite : Mission + Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              {[
                {
                  label: "Notre mission",
                  text: "En combinant créativité et stratégie de marque, nous aidons nos clients à libérer tout leur potentiel afin qu'ils puissent atteindre leurs objectifs. Quel que soit votre investissement, nous nous engageons à fond.",
                },
                {
                  label: "Notre vision",
                  text: "Établir une relation solide et durable avec notre clientèle, de manière à devenir leur partenaire de confiance dans la réussite de leurs projets digitaux.",
                },
              ].map((block, i) => (
                <div key={i}>
                  <p
                    className="font-bold text-sm mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "#0055FF", textTransform: "uppercase", letterSpacing: "0.1em" }}
                  >
                    {block.label}
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "#474667", lineHeight: 1.75 }}
                  >
                    {block.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* — Les valeurs — centré — */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", color: "#0055FF" }}
              >
                Ce qui nous guide
              </p>
              <h2
                className="font-extrabold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  color: "#191e4f",
                  letterSpacing: "-0.02em",
                }}
              >
                Les valeurs de BiDigital
              </h2>
            </motion.div>

            <div className="flex flex-col divide-y" style={{ borderColor: "#f0f2f5" }}>
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="py-8 relative"
                  >
                    {/* Numéro géant en arrière-plan */}
                    <span
                      className="absolute top-6 right-0 font-extrabold select-none pointer-events-none"
                      style={{
                        fontSize: "7rem",
                        lineHeight: 1,
                        color: "rgba(0,85,255,0.04)",
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "-0.04em",
                      }}
                      aria-hidden
                    >
                      {val.num}
                    </span>
                    <div className="flex items-start gap-5">
                      {/* Icône + numéro */}
                      <div>
                        <span
                          className="text-sm font-bold block mb-2"
                          style={{ fontFamily: "var(--font-heading)", color: "#0055FF" }}
                        >
                          {val.num}
                        </span>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: "#e2f7ff" }}
                        >
                          <Icon size={18} style={{ color: "#0055FF" }} />
                        </div>
                      </div>
                      <div>
                        <h3
                          className="font-bold text-lg mb-2"
                          style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                        >
                          {val.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-body)", color: "#474667", lineHeight: 1.75 }}
                        >
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOS EXPERTISES — 3 cartes
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-body)", color: "#0055FF" }}
              >
                Ce que nous faisons
              </p>
              <h2
                className="font-extrabold leading-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "#191e4f",
                  letterSpacing: "-0.025em",
                }}
              >
                Nos expertises
                <br />
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    d&apos;agence digitale
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#474667" }}
            >
              Nous combinons un ensemble d&apos;expertises complémentaires pour vous permettre de
              communiquer efficacement auprès de vos clients et de générer des résultats mesurables.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {expertises.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.a
                  key={exp.title}
                  href={exp.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col p-7 rounded-2xl group"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "none",
                    border: "1px solid rgba(25,30,79,0.08)",
                    textDecoration: "none",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#e2f7ff" }}
                  >
                    <Icon size={22} style={{ color: "#0055FF" }} />
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                  >
                    {exp.desc}
                  </p>
                  <span
                    className="flex items-center gap-1 mt-5 text-xs font-bold"
                    style={{ color: "#0055FF", fontFamily: "var(--font-heading)" }}
                  >
                    En savoir plus <ArrowRight size={12} />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          CTA 1 — dark card
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl text-center"
            style={{
              background: "#16182e",
              padding: "clamp(48px, 7vw, 72px) clamp(24px, 6vw, 64px)",
            }}
          >
            <div className="absolute pointer-events-none" style={{ width: 500, height: 500, top: "50%", left: "25%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)" }} />
            <div className="absolute pointer-events-none" style={{ width: 350, height: 350, bottom: "-20%", right: "5%", background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 65%)" }} />
            <div className="relative z-10">
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", letterSpacing: "-0.025em" }}
              >
                Vous avez un projet web ?
              </h2>
              <p
                className="text-base mb-8 mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", maxWidth: 420 }}
              >
                Prenez rendez-vous ou envoyez-nous votre projet. Nous revenons vers vous sous 24h avec
                une proposition adaptée à vos objectifs.
              </p>
              <p
                className="text-sm font-semibold mb-6"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.35)" }}
              >
                +50 entreprises ont développé leur activité avec nous. Pourquoi pas vous ?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <CalButton style={{ fontSize: 15, padding: "13px 28px", borderRadius: 50 }}>
                  Démarrer mon projet
                </CalButton>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.80)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    padding: "13px 28px",
                    borderRadius: 50,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ — 2 colonnes (titre gauche, accordéons droite)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Gauche : titre */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 self-start"
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-body)", color: "#0055FF" }}
              >
                FAQ
              </p>
              <h2
                className="font-extrabold leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#191e4f",
                  letterSpacing: "-0.02em",
                }}
              >
                Tout savoir sur
                <br />
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    notre agence web
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Une question sur nos services, nos tarifs ou notre façon de travailler ?
                Retrouvez les réponses aux questions les plus fréquentes ci-dessous.
              </p>
            </motion.div>

            {/* Droite : accordéons */}
            <div className="lg:col-span-2 space-y-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: openFaq === i ? "rgba(0,85,255,0.04)" : "#FFFFFF",
                    border: openFaq === i ? "1px solid rgba(0,85,255,0.2)" : "1px solid rgba(25,30,79,0.08)",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span
                      className="font-bold text-base leading-snug"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: openFaq === i ? "#0055FF" : "#191e4f",
                        transition: "color 0.2s",
                      }}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        size={18}
                        style={{ color: openFaq === i ? "#0055FF" : "#474667" }}
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div
                          className="px-6 pb-6 text-sm leading-relaxed border-t pt-4"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "#474667",
                            borderColor: "rgba(0,85,255,0.1)",
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA 2 — "Propulsez votre visibilité"
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 pb-20 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl text-center"
            style={{
              background: "#16182e",
              padding: "clamp(48px, 7vw, 72px) clamp(24px, 6vw, 64px)",
            }}
          >
            <div className="absolute pointer-events-none" style={{ width: 560, height: 560, top: "50%", left: "20%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)" }} />
            <div className="absolute pointer-events-none" style={{ width: 380, height: 380, bottom: "-15%", right: "8%", background: "radial-gradient(ellipse, rgba(0,210,255,0.12) 0%, transparent 65%)" }} />
            <div className="relative z-10">
              <span className="text-3xl block mb-4" aria-hidden>🚀</span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", letterSpacing: "-0.025em" }}
              >
                Propulsez votre visibilité
                <br />dès maintenant
              </h2>
              <p
                className="text-base mb-8 mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", maxWidth: 420 }}
              >
                Faites une demande de devis ou prenez RDV en un clic. Nous revenons vers vous sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <CalButton style={{ fontSize: 15, padding: "13px 28px", borderRadius: 50 }}>
                  Démarrer mon projet
                </CalButton>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.80)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    padding: "13px 28px",
                    borderRadius: 50,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
