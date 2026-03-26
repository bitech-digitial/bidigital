import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BiDigital — Agence Web | Site Conforme, SEO & Maintenance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#03045E",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            top: -200,
            left: -200,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(144,224,239,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            bottom: -200,
            right: -100,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0,119,182,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: 100,
              background: "rgba(144,224,239,0.12)",
              border: "1px solid rgba(144,224,239,0.3)",
              color: "#90E0EF",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Agence Web · France
          </div>

          {/* Logo */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #FFFFFF 0%, #90E0EF 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            BiDigital
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.65)",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 800,
            }}
          >
            Site vitrine professionnel · 100% conforme RGPD · SEO inclus
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
            {["✓ Devis gratuit sous 24h", "✓ 690€ TTC", "✓ 19,99€/mois sans engagement"].map(
              (text) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    padding: "10px 20px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#CAF0F8",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {text}
                </div>
              )
            )}
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "rgba(255,255,255,0.35)",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          www.bidigital.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
