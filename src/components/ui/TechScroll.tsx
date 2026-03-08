"use client";

import { ReactNode } from "react";

type Tech = {
  name: string;
  svg: ReactNode;
};

const TECHS: Tech[] = [
  {
    name: "Next.js",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect width="20" height="20" rx="3" fill="#000000" />
        <path d="M4.5 14.5V5.5H7L11.5 12.5V5.5H13.5V14.5H11L6.5 7.5V14.5H4.5Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="2" fill="#61dafb" />
        <ellipse cx="10" cy="10" rx="9" ry="3.5" stroke="#61dafb" strokeWidth="1.2" />
        <ellipse cx="10" cy="10" rx="9" ry="3.5" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 10 10)" />
        <ellipse cx="10" cy="10" rx="9" ry="3.5" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 10 10)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <rect width="20" height="20" rx="3" fill="#3178c6" />
        <text x="2.5" y="14.5" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">TS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 4C7.7 4 6.3 5.1 5.7 7.3c.9-1.1 1.9-1.5 3-1.1.65.16 1.12.63 1.63 1.16C11.2 8.3 12.2 9.3 14.3 9.3c2.3 0 3.7-1.1 4.3-3.3-.9 1.1-1.9 1.5-3 1.1-.65-.16-1.12-.63-1.63-1.16C13 4.98 12 4 10 4z"
          fill="#06b6d4"
        />
        <path
          d="M5.7 10.7C3.4 10.7 2 11.8 1.4 14c.9-1.1 1.9-1.5 3-1.1.65.16 1.12.63 1.63 1.16C6.9 15 7.9 16 10 16c2.3 0 3.7-1.1 4.3-3.3-.9 1.1-1.9 1.5-3 1.1-.65-.16-1.12-.63-1.63-1.16C8.8 11.68 7.8 10.7 5.7 10.7z"
          fill="#06b6d4"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="9" fill="#339933" />
        <text x="3" y="14" fontSize="8" fontWeight="700" fill="white" fontFamily="sans-serif">Node</text>
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect width="20" height="20" rx="3" fill="#96bf48" />
        <path d="M6 8h8l-1.3 7H7.3L6 8z" fill="white" opacity="0.9" />
        <path d="M8.5 8V6.3C8.5 5.6 9 5 9.7 5h.6c.7 0 1.2.6 1.2 1.3V8" stroke="white" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="9" fill="#21759b" />
        <text x="4.5" y="14.5" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">W</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect width="20" height="20" rx="3" fill="#f5f5f5" />
        <rect x="5" y="2" width="5" height="5" rx="2.5" fill="#f24e1e" />
        <rect x="10" y="2" width="5" height="5" rx="2.5" fill="#ff7262" />
        <rect x="5" y="7.5" width="5" height="5" rx="2.5" fill="#a259ff" />
        <circle cx="12.5" cy="10" r="2.5" fill="#1abcfe" />
        <rect x="5" y="13" width="5" height="5" rx="2.5" fill="#0acf83" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" fill="#181717" />
        <path
          d="M10 3.5C6.96 3.5 4.5 5.96 4.5 9c0 2.42 1.57 4.47 3.75 5.2.27.05.37-.12.37-.26v-.94c-1.52.33-1.84-.73-1.84-.73-.25-.63-.61-.8-.61-.8-.5-.34.04-.33.04-.33.55.04.84.56.84.56.49.84 1.28.6 1.59.46.05-.35.19-.6.35-.73-1.21-.14-2.49-.61-2.49-2.7 0-.6.21-1.09.56-1.47-.06-.14-.24-.7.05-1.45 0 0 .46-.15 1.5.56A5.2 5.2 0 0110 6.35c.46 0 .93.06 1.36.18 1.04-.71 1.5-.56 1.5-.56.3.75.11 1.31.05 1.45.35.38.56.87.56 1.47 0 2.1-1.28 2.56-2.5 2.7.2.17.37.51.37 1.02v1.52c0 .15.1.32.38.26A5.505 5.505 0 0015.5 9c0-3.04-2.46-5.5-5.5-5.5z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 2L18.5 17H1.5L10 2Z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <rect width="20" height="20" rx="4" fill="#635bff" />
        <text x="5.5" y="15" fontSize="13" fontWeight="700" fill="white" fontFamily="sans-serif">S</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 1.5C10 1.5 6.5 7 6.5 12C6.5 14.8 8 17 10 18C12 17 13.5 14.8 13.5 12C13.5 7 10 1.5 10 1.5Z"
          fill="#47a248"
        />
        <rect x="9.3" y="14" width="1.4" height="5" rx="0.7" fill="#47a248" />
      </svg>
    ),
  },
];

// Double for infinite loop
const DOUBLED = [...TECHS, ...TECHS];

function TechPill({ name, svg }: Tech) {
  return (
    <span
      className="inline-flex items-center gap-2 border border-[#e2e8f0] rounded-full bg-white hover:border-[#bfdbfe] hover:shadow-[0_2px_12px_rgba(37,99,235,0.08)] transition-all duration-200"
      style={{
        padding: "8px 16px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        whiteSpace: "nowrap",
        marginRight: 12,
        flexShrink: 0,
      }}
    >
      <span style={{ width: 20, height: 20, flexShrink: 0, display: "flex", alignItems: "center" }}>
        {svg}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#334155",
          fontFamily: "var(--font-body)",
        }}
      >
        {name}
      </span>
    </span>
  );
}

export default function TechScroll() {
  return (
    <div
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="scroll-single"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
        }}
      >
        {DOUBLED.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} name={tech.name} svg={tech.svg} />
        ))}
      </div>
    </div>
  );
}
