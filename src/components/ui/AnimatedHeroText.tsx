"use client";

export default function AnimatedHeroText() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {/* Gradient defs (invisible) */}
      <svg height="0" width="0" viewBox="0 0 700 230" style={{ position: "absolute" }}>
        <defs>
          {/* "Agence Web" — bleu nuit uni */}
          <linearGradient gradientUnits="userSpaceOnUse" x1="0" y1="95" x2="0" y2="10" id="aht-b">
            <stop stopColor="#1D2939" />
            <stop stopColor="#1D2939" offset="1" />
          </linearGradient>
          {/* "BiDigital" — dégradé bleu marque */}
          <linearGradient gradientUnits="userSpaceOnUse" x1="0" y1="230" x2="700" y2="100" id="aht-c">
            <stop stopColor="#007AFF" />
            <stop stopColor="#0044CC" offset="0.5" />
            <stop stopColor="#0096C7" offset="1" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        viewBox="0 0 700 230"
        style={{ width: "min(700px, 100%)", height: "auto" }}
        role="img"
        aria-label="Agence Web BiDigital"
      >
        <text
          x="350"
          y="95"
          textAnchor="middle"
          fontSize="85"
          fontWeight="900"
          letterSpacing="-3"
          fill="none"
          stroke="url(#aht-b)"
          strokeWidth="1.5"
          className="aht-font aht-draw"
        >
          Agence Web
        </text>
        <text
          x="350"
          y="212"
          textAnchor="middle"
          fontSize="100"
          fontWeight="900"
          letterSpacing="-4"
          fill="none"
          stroke="url(#aht-c)"
          strokeWidth="1.5"
          className="aht-font aht-draw"
        >
          BiDigital
        </text>
      </svg>
    </div>
  );
}
