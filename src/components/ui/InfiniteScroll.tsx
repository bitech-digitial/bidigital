"use client";

import Image from "next/image";

export type ScrollCard = {
  sector: string;
  label: string;
  image: string;
  alt: string;
};

function BrowserCard({ card }: { card: ScrollCard }) {
  return (
    <div
      className="flex-shrink-0 w-[260px] sm:w-[320px] rounded-xl overflow-hidden border border-[#e2e8f0] bg-white"
      style={{
        height: 220,
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center px-3 border-b border-[#e2e8f0]"
        style={{ height: 28, background: "#f1f5f9" }}
      >
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
        </div>
        <div
          className="flex-1 ml-2"
          style={{ height: 14, background: "#e2e8f0", borderRadius: 20 }}
        />
      </div>

      {/* Image with overlay */}
      <div className="relative" style={{ height: 220 - 28 }}>
        <Image
          src={card.image}
          alt={card.alt}
          fill
          style={{ objectFit: "cover" }}
          quality={70}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p
            className="text-sm font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {card.sector}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InfiniteScroll({ items }: { items: ScrollCard[] }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className="flex gap-5 scroll-single"
        style={{ width: "max-content" }}
      >
        {doubled.map((card, i) => (
          <BrowserCard key={`${card.sector}-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}
