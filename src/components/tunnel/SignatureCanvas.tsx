// src/components/tunnel/SignatureCanvas.tsx
"use client";
import { useRef, useEffect, useCallback } from "react";

interface SignatureCanvasProps {
  onChange: (dataUrl: string | null) => void;
}

export default function SignatureCanvas({ onChange }: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);

  const getPos = (e: PointerEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const isEmpty = useCallback((canvas: HTMLCanvasElement): boolean => {
    const ctx = canvas.getContext("2d")!;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    return !Array.from(data).some((v, i) => i % 4 === 3 && v > 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.strokeStyle = "#1D2939";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      isDrawing.current = true;
      canvas.setPointerCapture(e.pointerId);
      const { x, y } = getPos(e, canvas);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const onMove = (e: PointerEvent) => {
      if (!isDrawing.current) return;
      e.preventDefault();
      const { x, y } = getPos(e, canvas);
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const onUp = (e: PointerEvent) => {
      if (!isDrawing.current) return;
      isDrawing.current = false;
      const { x, y } = getPos(e, canvas);
      ctx.lineTo(x, y);
      ctx.stroke();
      onChange(isEmpty(canvas) ? null : canvas.toDataURL("image/png"));
    };

    canvas.addEventListener("pointerdown", onDown, { passive: false });
    canvas.addEventListener("pointermove", onMove, { passive: false });
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, [onChange, isEmpty]);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onChange(null);
  }, [onChange]);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        width={480}
        height={160}
        style={{
          width: "100%",
          height: 160,
          border: "1.5px dashed #CBD5E1",
          borderRadius: 12,
          background: "#FAFBFC",
          touchAction: "none",
          cursor: "crosshair",
          display: "block",
        }}
      />
      <button
        type="button"
        onClick={clear}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          padding: "4px 10px",
          fontSize: 11,
          fontWeight: 600,
          color: "#94A3B8",
          background: "rgba(255,255,255,0.92)",
          border: "1px solid #E1EAF5",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Effacer
      </button>
    </div>
  );
}
