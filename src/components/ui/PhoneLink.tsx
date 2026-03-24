"use client";

interface Props {
  className?: string;
}

export default function PhoneLink({ className }: Props) {
  const parts = ["07", "59", "74", "83", "83"];
  const display = parts.join(" ");
  const href = `tel:+33${parts.join("").slice(1)}`;
  return (
    <a href={href} className={className}>
      {display}
    </a>
  );
}
