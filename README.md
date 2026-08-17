# Happy Birthday, Keziaa 🎂🪷

Website ucapan ulang tahun yang lucu buat Keziaa. Halaman utama tampil dulu,
lalu tombol **"Buka Kejutan"** membuka reveal ucapan + confetti + 3 foto.

## Stack
- Next.js 14 (App Router) · React 18
- Tailwind CSS v3 (HSL colors, iOS-15 safe — no `color-mix`/`@property`/`oklch`)
- Zero runtime UI deps (confetti & animasi pakai CSS)

## Jalanin lokal
```bash
npm install
npm run dev      # http://localhost:3007
```

## Cek kualitas
```bash
npm run typecheck
npm run build
```

## Deploy ke Vercel
Push ke Git lalu import di Vercel — zero config. Framework preset: **Next.js**.
