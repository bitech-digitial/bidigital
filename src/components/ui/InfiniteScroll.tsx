"use client";

import ProjectMockup from "@/components/ui/ProjectMockup";

export type ScrollCard = {
  sector: string;
  label: string;
  image: string;
  alt: string;
  url?: string;
};

const shimmerDelays = ["0s", "0.5s", "1s", "1.5s", "0.8s", "1.3s"];

export default function InfiniteScroll({ items }: { items: ScrollCard[] }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative"
      style={{
        overflowX: "hidden",
        overflowY: "visible",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className="flex gap-8 scroll-single"
        style={{ width: "max-content", padding: "12px 0 16px" }}
      >
        {doubled.map((card, i) => (
          <ProjectMockup
            key={`${card.sector}-${i}`}
            image={card.image}
            alt={card.alt}
            label={card.sector}
            url={card.url ?? "bidigital.fr"}
            shimmerDelay={shimmerDelays[i % shimmerDelays.length]}
          />
        ))}
      </div>
    </div>
  );
}
