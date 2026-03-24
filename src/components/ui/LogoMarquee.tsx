"use client";

/* CSS-only marquee — no external libs, grayscale → color on hover */

const techLogos = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" fill="currentColor" width="28" height="28">
        <mask id="m" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" />
        </mask>
        <circle cx="90" cy="90" r="90" fill="black" />
        <circle cx="90" cy="90" r="90" fill="url(#ng)" mask="url(#m)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149.508 157.52L69.142 54H54V125.97H66.1V69.3L139.33 164.44a90.76 90.76 0 0010.178-6.92z"
          fill="white"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#ng2)" />
        <defs>
          <linearGradient id="ng" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ng2" x1="115" y1="54" x2="115" y2="112.981" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28">
        <rect width="24" height="24" rx="4" fill="#3178c6" />
        <path d="M14.39 12.56v1.8c.29.15.63.26 1.01.33.38.07.78.1 1.2.1.41 0 .8-.04 1.17-.12.37-.08.7-.22.98-.42.28-.2.5-.46.67-.78.17-.32.25-.72.25-1.2 0-.35-.05-.65-.16-.91a2.1 2.1 0 00-.44-.69 3.6 3.6 0 00-.69-.52 8.6 8.6 0 00-.89-.43 6.7 6.7 0 01-.6-.28.98.98 0 01-.34-.27.57.57 0 01-.1-.33c0-.1.03-.2.09-.28.06-.09.14-.16.24-.22.1-.06.23-.1.37-.13.14-.03.3-.04.47-.04.13 0 .26.01.4.03.14.02.28.05.42.1.14.05.27.1.4.17.13.07.24.16.34.26v-1.68a4.6 4.6 0 00-.88-.24 5.8 5.8 0 00-1.04-.09c-.4 0-.78.05-1.15.14-.37.1-.7.24-.98.44-.28.2-.5.46-.67.77-.17.31-.25.68-.25 1.1 0 .55.16 1.01.47 1.38.31.37.78.68 1.4.92l.6.24c.2.08.37.16.52.24.15.08.26.18.35.28.08.1.12.23.12.37 0 .11-.03.21-.08.3-.05.1-.13.18-.24.25-.11.07-.24.12-.4.15-.16.04-.34.05-.55.05-.35 0-.7-.07-1.03-.2-.33-.14-.62-.32-.88-.56zm-4.67-3.28H12V7.6H7.6v1.68h1.85v5.07h1.27V9.28z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    svg: (
      <svg viewBox="0 0 24 24" width="32" height="28" fill="none">
        <path
          d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.217C13.29 10.48 14.265 11.5 16.5 11.5c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.217C15.21 7.02 14.235 6 12 6zM7.5 11.5C5.1 11.5 3.6 12.7 3 15.1c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.217C8.79 15.98 9.765 17 12 17c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.217C10.71 12.52 9.735 11.5 7.5 11.5z"
          fill="#38bdf8"
        />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 116 100" fill="currentColor" width="28" height="24">
        <path d="M57.5 0L115 100H0L57.5 0z" fill="white" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#21759b">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.5a8.5 8.5 0 010 17 8.5 8.5 0 010-17zM3.607 10.5l3.19 8.742A8.514 8.514 0 013.5 12c0-.513.038-1.017.107-1.5zm4.686-.5l2.57 6.996L8.25 12.5l-1.5-4.116a8.522 8.522 0 011.543 1.616zm3.707.184l2.25 6.15-.13.336A8.468 8.468 0 0112 16.5a8.468 8.468 0 01-2.12-.27l2.12-6.046zm2.5-.684l2.25 6.15a8.516 8.516 0 01-1.61 1.63L13.5 10zm3.29 1.5c.069.483.107.987.107 1.5a8.514 8.514 0 01-2.303 5.742l3.19-8.742a8.47 8.47 0 011.006 1.5z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28">
        <rect width="24" height="24" rx="4" fill="#635bff" />
        <path
          d="M11.09 8.63c0-.55.46-.77 1.2-.77 1.07 0 2.43.33 3.5.9V5.77A9.27 9.27 0 0012.29 5c-3.1 0-5.16 1.62-5.16 4.32 0 4.22 5.8 3.54 5.8 5.36 0 .65-.57.86-1.36.86-1.17 0-2.67-.48-3.85-1.12v3.02c1.31.56 2.63.79 3.85.79 3.17 0 5.35-1.57 5.35-4.3-.02-4.56-5.83-3.73-5.83-5.3z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="#f9ab00" />
        <rect x="10" y="6" width="4" height="15" rx="1" fill="#e37400" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="#e37400" opacity="0.7" />
      </svg>
    ),
  },
];

/* Duplicate for seamless loop */
const allLogos = [...techLogos, ...techLogos];

export default function LogoMarquee() {
  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className="logo-marquee-track flex gap-10 w-max items-center">
        {allLogos.map((logo, i) => (
          <div
            key={i}
            title={logo.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              filter: "grayscale(1) brightness(0.4)",
              transition: "filter 0.3s ease, opacity 0.3s ease",
              cursor: "default",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "grayscale(0) brightness(1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "grayscale(1) brightness(0.4)";
            }}
          >
            {logo.svg}
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#94a3b8",
                fontFamily: "var(--font-body)",
                whiteSpace: "nowrap",
              }}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
