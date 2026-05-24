// src/app/tunnel/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace signature — BiDigital",
  robots: { index: false, follow: false },
};

export default function TunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
