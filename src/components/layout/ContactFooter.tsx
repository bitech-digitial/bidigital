"use client";

import { Instagram, Linkedin } from "lucide-react";

const DEV_LINKS = [
  { label: "Création de site internet",    href: "/#services" },
  { label: "Création de site e-commerce",  href: "/#services" },
  { label: "Création de site vitrine",     href: "/#services" },
  { label: "Refonte de site web",          href: "/#services" },
  { label: "Maintenance de site internet", href: "/#services" },
  { label: "Hébergement web",              href: "/#services" },
];

const EXPERTISE_LINKS = [
  { label: "Agence PrestaShop", href: "/#expertises" },
  { label: "Agence WordPress",  href: "/#expertises" },
  { label: "Agence Shopify",    href: "/#expertises" },
  { label: "Agence Symfony",    href: "/#expertises" },
  { label: "Agence Webflow",    href: "/#expertises" },
];

const AGENCE_LINKS = [
  { label: "Réalisations", href: "/#exemples" },
  { label: "Agence",       href: "/#" },
  { label: "Blog",         href: "/#" },
  { label: "Contact",      href: "/contact" },
];

const MARKETING_LINKS = [
  { label: "Agence SEO",              href: "/#services" },
  { label: "Agence SEA",              href: "/#services" },
  { label: "Agence Social Media",     href: "/#services" },
  { label: "Agence Web",              href: "/#services" },
  { label: "Agence Content Marketing",href: "/#services" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  color: "rgba(255,255,255,0.5)",
  textDecoration: "none",
  lineHeight: "2.1",
  display: "block",
  transition: "color 0.2s",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "#FFFFFF",
  marginBottom: 14,
};

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <>
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#90E0EF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
        >
          {label}
        </a>
      ))}
    </>
  );
}

export default function ContactFooter() {
  return (
    <footer
      style={{
        background: "#0B132B",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: 60, paddingBottom: 0 }}
      >
        {/* ── 4-column grid ── */}
        <div
          className="contact-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Column 1 — Brand */}
          <div>
            {/* Logo text */}
            <a
              href="/"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-heading)",
                fontSize: 22,
                fontWeight: 800,
                background: "linear-gradient(135deg, #FFFFFF, #90E0EF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: 20,
                textDecoration: "none",
              }}
            >
              BiDigital
            </a>

            {/* Google reviews badge */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: "10px 14px",
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#FBBF24", fontSize: 13 }}>★</span>
                ))}
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)", color: "#FFFFFF",
                    fontSize: 14, fontWeight: 700,
                  }}
                >
                  4,9
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 12, marginLeft: 5,
                  }}
                >
                  57 avis Google
                </span>
              </div>
            </div>

            {/* Address + contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
              {[
                "BiDigital",
                "Chaville, Île-de-France 92370",
                "07 59 74 83 83",
                "contact@bidigital.fr",
              ].map((line) => (
                <p
                  key={line}
                  style={{
                    fontFamily: "var(--font-body)", fontSize: 13,
                    color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin,  href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Icon size={16} style={{ color: "rgba(255,255,255,0.65)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Développement */}
          <div>
            <p style={sectionTitle}>Développement</p>
            <FooterLinks links={DEV_LINKS} />
          </div>

          {/* Column 3 — Expertises + BiDigital */}
          <div>
            <p style={sectionTitle}>Expertises</p>
            <FooterLinks links={EXPERTISE_LINKS} />
            <div style={{ marginTop: 24 }}>
              <p style={sectionTitle}>BiDigital</p>
              <FooterLinks links={AGENCE_LINKS} />
            </div>
          </div>

          {/* Column 4 — Marketing Digital */}
          <div>
            <p style={sectionTitle}>Marketing Digital</p>
            <FooterLinks links={MARKETING_LINKS} />
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "20px 0 28px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "rgba(255,255,255,0.28)",
              lineHeight: 1.8,
            }}
          >
            Copyright © 2018 – 2026 BiDigital — tous droits réservés{" · "}
            {[
              { label: "Mentions légales",           href: "/mentions-legales" },
              { label: "Politique de confidentialité",href: "/politique-de-confidentialite" },
              { label: "CGV",                         href: "#" },
              { label: "Politique IA",                href: "#" },
              { label: "Politique de sécurité",       href: "#" },
            ].map(({ label, href }, i) => (
              <span key={label}>
                {i > 0 && " · "}
                <a
                  href={href}
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#90E0EF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
