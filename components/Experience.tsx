"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "./Confetti";
import FloatingBits from "./FloatingBits";

const NAME = "Keziaa";

const PHOTOS = [
  {
    src: "/photos/couple-2.jpg",
    caption: "piggyback ride 🕶️",
    rotate: "-5deg",
  },
  {
    src: "/photos/kezia.jpg",
    caption: "udah kayak ngiklan produk 🎀",
    rotate: "3deg",
  },
  {
    src: "/photos/couple-1.jpg",
    caption: "ketawa terus ya 🤍",
    rotate: "-2deg",
  },
];

export default function Experience() {
  const [opened, setOpened] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    if (!opened) return;
    setBurst(true);
    const t = setTimeout(() => setBurst(false), 5200);
    return () => clearTimeout(t);
  }, [opened]);

  return (
    <main className="dot-grid relative min-h-[100svh] w-full">
      <FloatingBits />
      {burst && <Confetti />}

      {!opened ? (
        <Landing onOpen={() => setOpened(true)} />
      ) : (
        <Surprise onReplay={() => setOpened(false)} />
      )}
    </main>
  );
}

/* ---------------- Landing (halaman utama) ---------------- */

function Landing({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-xl flex-col items-center justify-center px-6 py-16 text-center">
      <span className="animate-bob mb-4 inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rust shadow-soft backdrop-blur">
        🪷 sebuah kejutan kecil
      </span>

      <div className="animate-wiggle mb-6 text-7xl sm:text-8xl" aria-hidden>
        🎁
      </div>

      <h1 className="font-display text-4xl font-extrabold leading-tight text-mocha text-shadow-soft sm:text-5xl">
        Halo, ada titipan
        <br />
        buat <span className="title-gradient animate-shimmer">{NAME}</span>
      </h1>

      <p className="mt-4 max-w-md text-base text-mocha/75 sm:text-lg">
        Psst… hari ini spesial banget. Aku sembunyiin sesuatu di balik tombol
        ini. Berani buka? 👀
      </p>

      <button
        onClick={onOpen}
        className="group relative mt-9 inline-flex items-center justify-center"
        aria-label="Buka kejutan"
      >
        <span className="animate-pulseRing absolute inset-0 rounded-full bg-petal/50" />
        <span className="animate-pulseRing absolute inset-0 rounded-full bg-gold/40 [animation-delay:0.6s]" />
        <span className="relative inline-flex items-center gap-2 rounded-full bg-rust px-9 py-4 text-lg font-extrabold text-cream shadow-soft transition-transform duration-200 group-hover:-translate-y-1 group-active:translate-y-0">
          Buka Kejutan 🎉
        </span>
      </button>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-mocha/40">
        tekan tombolnya ya
      </p>
    </section>
  );
}

/* ---------------- Surprise (kejutan) ---------------- */

function Surprise({ onReplay }: { onReplay: () => void }) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-4xl px-5 py-14 sm:py-20">
      {/* Hero greeting */}
      <div className="animate-popIn text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-rust">
          🎂 18 Agustus • hari kamu
        </p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-mocha text-shadow-soft sm:text-7xl">
          Selamat
          <br />
          Ulang Tahun
        </h1>
        <p className="title-gradient animate-shimmer mt-2 font-display text-6xl font-extrabold sm:text-8xl">
          {NAME}!
        </p>
      </div>

      {/* Cake */}
      <div className="animate-bob mt-8 text-center text-6xl sm:text-7xl" aria-hidden>
        🎂✨
      </div>

      {/* Message card */}
      <div className="animate-popIn mx-auto mt-8 max-w-2xl rounded-3xl border border-white/70 bg-white/75 p-6 text-center shadow-soft backdrop-blur sm:p-9 [animation-delay:0.15s]">
        <p className="font-display text-xl font-bold text-rust sm:text-2xl">
          Buat Keziaa yang paling spesial 🤍
        </p>
        <p className="mt-4 text-base leading-relaxed text-mocha/80 sm:text-lg">
          Semoga di umur yang baru ini kamu selalu sehat, bahagia, dan
          dikelilingi orang-orang yang sayang sama kamu. Semoga selalu tegar dan
          tetap semangat dengan harapan. Makasih ya udah kuat 🌸
        </p>
        <blockquote className="mx-auto mt-6 max-w-md rounded-2xl border border-terracotta/25 bg-blush/50 px-5 py-4">
          <p className="font-display text-base font-semibold italic leading-relaxed text-rust sm:text-lg">
            “Kebebasan di tangan kamu, tetap jaga senyum dan ketawa mu
            yaa, kamu cantik banget pas ketawa.”
          </p>
        </blockquote>
        <p className="mt-6 text-base font-semibold text-mocha sm:text-lg">
          Wish yang paling kamu mau… pasti terwujud. 🎈
        </p>
      </div>

      {/* Photo gallery — polaroid style */}
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
        {PHOTOS.map((p, i) => (
          <figure
            key={p.src}
            className="animate-popIn mx-auto w-full max-w-[15rem] rounded-2xl bg-white p-3 pb-5 shadow-soft sm:max-w-none"
            style={{
              transform: `rotate(${p.rotate})`,
              animationDelay: `${0.25 + i * 0.12}s`,
            }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-blush">
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(max-width: 640px) 80vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center font-display text-base font-semibold text-mocha">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Footer actions */}
      <div className="mt-14 flex flex-col items-center gap-4">
        <p className="text-center font-display text-lg font-bold text-mocha">
          Sekali lagi… <span className="text-rust">Happy Birthday, {NAME}! 🎉</span>
        </p>
        <button
          onClick={onReplay}
          className="inline-flex items-center gap-2 rounded-full border border-terracotta/40 bg-white/70 px-6 py-3 text-sm font-bold text-rust shadow-soft backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          ↺ Ulangi kejutannya
        </button>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-mocha/40">
          dibuat dengan 🤍
        </p>
      </div>
    </section>
  );
}
