"use client";

import { useEffect, useState } from "react";

type LineData = {
  text: string;
  color: string;
  weight: number;
  large?: boolean;
  delay?: number;
};

const LINES: LineData[] = [
  { text: "Création de votre site en cours...", color: "#6366f1", weight: 400 },
  { text: "Design premium sur-mesure ✓", color: "#4ade80", weight: 500 },
  { text: "SEO optimisé — 1ère page Google ✓", color: "#4ade80", weight: 500 },
  { text: "RGPD & mentions légales inclus ✓", color: "#4ade80", weight: 500 },
  { text: "Hébergement & domaine inclus ✓", color: "#4ade80", weight: 500 },
  { text: "Copywriting optimisé inclus ✓", color: "#4ade80", weight: 500 },
  { text: "Satisfait ou remboursé. Zéro risque. ✓", color: "#4ade80", weight: 500 },
  { text: "Votre site est prêt.", color: "#f0f0ff", weight: 700, large: true, delay: 2000 },
  { text: "", color: "transparent", weight: 400 },
];

const MAX_VISIBLE = 6;
const CHAR_SPEED = 45;
const LINE_DELAY = 600;
const RESET_DELAY = 1500;

type StyleSnapshot = Pick<LineData, "color" | "weight" | "large">;

export default function BrowserTyping({ mobileMode = false }: { mobileMode?: boolean }) {
  const [completedLines, setCompletedLines] = useState<LineData[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [currentStyle, setCurrentStyle] = useState<StyleSnapshot>({
    color: LINES[0].color,
    weight: LINES[0].weight,
    large: LINES[0].large,
  });

  useEffect(() => {
    if (mobileMode) return;

    let lineIdx = 0;
    let charIdx = 0;
    let completed: LineData[] = [];
    let timer: ReturnType<typeof setTimeout>;

    function step() {
      if (lineIdx >= LINES.length) return;

      const line = LINES[lineIdx];

      if (line.text === "") {
        setCurrentText("");
        timer = setTimeout(() => {
          completed = [];
          lineIdx = 0;
          charIdx = 0;
          setCompletedLines([]);
          setCurrentText("");
          setCurrentStyle({
            color: LINES[0].color,
            weight: LINES[0].weight,
            large: LINES[0].large,
          });
          step();
        }, RESET_DELAY);
        return;
      }

      if (charIdx < line.text.length) {
        setCurrentText(line.text.slice(0, charIdx + 1));
        setCurrentStyle({ color: line.color, weight: line.weight, large: line.large });
        charIdx++;
        timer = setTimeout(step, CHAR_SPEED);
      } else {
        const postDelay = line.delay ?? LINE_DELAY;
        timer = setTimeout(() => {
          completed = [...completed, line].slice(-MAX_VISIBLE);
          setCompletedLines([...completed]);
          setCurrentText("");
          lineIdx++;
          charIdx = 0;
          if (lineIdx < LINES.length) {
            setCurrentStyle({
              color: LINES[lineIdx].color,
              weight: LINES[lineIdx].weight,
              large: LINES[lineIdx].large,
            });
          }
          step();
        }, postDelay);
      }
    }

    step();
    return () => clearTimeout(timer);
  }, [mobileMode]);

  if (mobileMode) {
    return (
      <div style={{ padding: "20px 16px" }}>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 700,
            color: "#f0f0ff",
            fontFamily: "var(--font-heading)",
            marginBottom: 6,
            lineHeight: 1.3,
          }}
        >
          De la conception à la mise en ligne
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: "#71717a",
            lineHeight: 1.6,
            marginBottom: 6,
            fontFamily: "var(--font-body)",
          }}
        >
          nous créons des sites qui convertissent.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 11,
            color: "#6366f1",
            fontWeight: 600,
            fontFamily: "var(--font-body)",
          }}
        >
          100% conforme RGPD ✓
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {completedLines.map((line, i) => (
        <p
          key={`${i}-${line.text.slice(0, 8)}`}
          style={{
            margin: 0,
            color: line.color,
            fontFamily: line.large ? "var(--font-heading)" : "var(--font-body)",
            fontWeight: line.weight,
            fontSize: line.large ? "15px" : "12px",
            lineHeight: 1.5,
          }}
        >
          {line.text}
        </p>
      ))}
      {currentText && (
        <p
          style={{
            margin: 0,
            color: currentStyle.color,
            fontFamily: currentStyle.large ? "var(--font-heading)" : "var(--font-body)",
            fontWeight: currentStyle.weight,
            fontSize: currentStyle.large ? "15px" : "12px",
            lineHeight: 1.5,
          }}
        >
          {currentText}
          <span className="cursor-blink">|</span>
        </p>
      )}
    </div>
  );
}
