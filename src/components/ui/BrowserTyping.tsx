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
  { text: "Création de votre site en cours...", color: "#2563eb", weight: 400 },
  { text: "Design premium sur-mesure ✓", color: "#16a34a", weight: 500 },
  { text: "Visible sur Google dès le lancement ✓", color: "#16a34a", weight: 500 },
  { text: "Zéro jargon. On s'occupe de tout. ✓", color: "#16a34a", weight: 500 },
  { text: "Un site qui attire de vrais clients ✓", color: "#16a34a", weight: 500 },
  { text: "Hébergement rapide & domaine inclus ✓", color: "#16a34a", weight: 500 },
  { text: "Satisfait ou remboursé. Zéro risque. ✓", color: "#16a34a", weight: 500 },
  { text: "Votre site en ligne rapidement ✓", color: "#16a34a", weight: 500 },
  { text: "Votre site est prêt.", color: "#0f172a", weight: 700, large: true, delay: 2000 },
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

      // Empty line = pause then reset
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
      <div style={{ padding: "24px 20px" }}>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            color: "#0f172a",
            fontFamily: "var(--font-heading)",
            marginBottom: 8,
            lineHeight: 1.3,
          }}
        >
          De la conception à la mise en ligne
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "#475569",
            lineHeight: 1.6,
            marginBottom: 8,
            fontFamily: "var(--font-body)",
          }}
        >
          nous créons des sites qui convertissent vos visiteurs en clients.
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: "#2563eb",
            fontWeight: 600,
            fontFamily: "var(--font-body)",
          }}
        >
          Sur devis personnalisé.
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
            fontSize: line.large ? "15px" : "13px",
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
            fontSize: currentStyle.large ? "15px" : "13px",
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
