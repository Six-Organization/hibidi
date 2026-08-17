"use client";

import { useMemo } from "react";

const EMOJIS = ["🎈", "🎂", "🌸", "💛", "🎉", "🧁", "🪷", "✨", "🎀"];

type Bit = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
};

/** Emojis that drift slowly upward in the background. Decorative only. */
export default function FloatingBits({ count = 14 }: { count?: number }) {
  const bits = useMemo<Bit[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const r = ((i * 6151 + 13) % 977) / 977;
      const r2 = ((i * 3187 + 401) % 881) / 881;
      return {
        left: Math.round(r * 100),
        delay: +(r2 * 9).toFixed(2),
        duration: +(10 + r * 9).toFixed(2),
        size: 20 + Math.round(r2 * 22),
        emoji: EMOJIS[i % EMOJIS.length],
      };
    });
  }, [count]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {bits.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-10%] select-none opacity-70 animate-floatUp"
          style={{
            left: `${b.left}%`,
            fontSize: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          {b.emoji}
        </span>
      ))}
    </div>
  );
}
