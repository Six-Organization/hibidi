"use client";

import { useMemo } from "react";

const COLORS = [
  "hsl(14, 62%, 52%)",
  "hsl(340, 78%, 72%)",
  "hsl(38, 82%, 60%)",
  "hsl(150, 45%, 60%)",
  "hsl(200, 60%, 65%)",
];

type Piece = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  rounded: boolean;
  drift: number;
};

/**
 * Lightweight confetti — pure CSS transforms, no canvas, no deps.
 * Pieces start above the viewport and fall down once.
 */
export default function Confetti({ count = 90 }: { count?: number }) {
  const pieces = useMemo<Piece[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const seed = (i * 9301 + 49297) % 233280;
      const r = seed / 233280;
      const r2 = ((i * 4523 + 771) % 997) / 997;
      const r3 = ((i * 733 + 91) % 599) / 599;
      return {
        left: Math.round(r * 100),
        delay: +(r2 * 0.9).toFixed(2),
        duration: +(2.6 + r3 * 2.4).toFixed(2),
        size: 7 + Math.round(r2 * 8),
        color: COLORS[i % COLORS.length],
        rounded: i % 3 === 0,
        drift: Math.round((r - 0.5) * 60),
      };
    });
  }, [count]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-[-8%] block"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.rounded ? p.size : p.size * 0.5}px`,
            backgroundColor: p.color,
            borderRadius: p.rounded ? "9999px" : "2px",
            transform: `translateX(${p.drift}px)`,
            animation: `confettiFall ${p.duration}s cubic-bezier(0.4,0,0.6,1) ${p.delay}s forwards`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(112vh) rotate(540deg);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}
