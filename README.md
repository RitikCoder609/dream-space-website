# Dream Space — Next.js Website

Real estate marketing website for **Dream Space Infra Developers (OPC) Pvt Ltd**, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm install` and `npm run dev` need an internet connection the first time — Tailwind and the Google Fonts (Fraunces + Manrope) used in `app/layout.tsx` are fetched at build time.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Home page — assembles all sections
  globals.css         Tailwind directives + base styles
components/
  Header.tsx           Sticky nav with mobile menu (client component)
  Hero.tsx             Hero banner with headline, CTAs, stats bar
  SplitSection.tsx    Reusable image+copy block (used for About & Featured Listing)
  Footer.tsx           Address, embedded map, social links
  WhatsAppFloat.tsx  Floating WhatsApp button
  Reveal.tsx           Scroll-triggered fade-up wrapper (client component)
  Icons.tsx            Inline SVG icon set
lib/
  site.ts              Central place for phone, address, social links — edit here
public/images/
  logo.png             Company logo (extracted from your PDF)
  hero-banner.jpg       Hero background (cropped city/skyline photo)
  flat1.jpg / flat2.jpg   Placeholder property photos — replace with real ones
```

## Replacing the placeholder property photos

`flat1.jpg` and `flat2.jpg` in `public/images/` are brand-styled placeholders (navy/gold skyline illustrations), since the real photos weren't provided. Drop in your actual flat photos with the **same filenames** and the layout will pick them up automatically — no code changes needed.

## Editing content

- **Text, headings, features**: edit the props passed to `<SplitSection />` in `app/page.tsx`.
- **Phone number, address, social links**: edit `lib/site.ts` — every component pulls from this one file.
- **Colors**: edit `tailwind.config.ts` under `theme.extend.colors` (navy, gold, ivory, etc.).

## Build for production

```bash
npm run build
npm start
```

## Deploying

This is a standard Next.js app — deploys directly to [Vercel](https://vercel.com) (recommended), or any Node host that supports Next.js.
