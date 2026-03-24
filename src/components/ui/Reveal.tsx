"use client";

import { useInView } from "@/hooks/useInView";
import { ElementType, ReactNode, CSSProperties } from "react";

type Anim = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-in";

interface Props {
  children: ReactNode;
  animation?: Anim;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

const animMap: Record<Anim, string> = {
  "fade-up": "animate-fade-up",
  "fade-left": "animate-fade-left",
  "fade-right": "animate-fade-right",
  "scale-in": "animate-scale-in",
  "fade-in": "animate-fade-in",
};

export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: Props) {
  const { ref, inView } = useInView();

  const classes = [
    !inView ? "anim-hidden" : animMap[animation],
    delay ? `delay-${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
