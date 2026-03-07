import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
                <span
                  className="text-white text-sm font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  B
                </span>
              </div>
              <span
                className="font-extrabold text-lg tracking-tight text-transparent bg-clip-text"
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundImage: "linear-gradient(135deg, #0f172a, #2563eb)",
                }}
              >
                BiDigital
              </span>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed max-w-xs font-light" style={{ fontFamily: "var(--font-body)" }}>
              Ton site web professionnel en 72h. Conçu pour les pros qui ont mieux à faire.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@bidigital.fr"
                className="flex items-center gap-2 text-[#64748b] hover:text-[#0f172a] text-sm transition-colors justify-center md:justify-start"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Mail className="w-4 h-4 text-[#2563eb]" />
                contact@bidigital.fr
              </a>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#64748b] hover:text-[#0f172a] text-sm transition-colors justify-center md:justify-start"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3
              className="text-[#94a3b8] font-semibold text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Exemples", href: "#exemples" },
                { label: "Processus", href: "#processus" },
                { label: "Tarif", href: "#offre" },
                { label: "FAQ", href: "#faq" },
                { label: "Démarrer mon projet", href: "#offre" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3
              className="text-[#94a3b8] font-semibold text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Légal
            </h3>
            <div className="flex flex-col gap-3">
              {[
                "Mentions légales",
                "Conditions Générales de Vente",
                "Politique de confidentialité",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#64748b] hover:text-[#0f172a] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm" style={{ fontFamily: "var(--font-body)" }}>
            © 2026 BiDigital · Fait avec soin, livré en 72h.
          </p>
          <p className="text-[#94a3b8] text-xs" style={{ fontFamily: "var(--font-body)" }}>France · Belgique · Suisse · Canada</p>
        </div>
      </div>
    </footer>
  );
}
