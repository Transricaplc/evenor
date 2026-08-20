# Evenor Holdings (Pty) Ltd — Corporate Website

Marketing and enquiry site for Evenor Holdings, a South African multi-sector industrial and
technology group operating across Logistics, ICT Infrastructure, Management Consulting,
Petrochemicals and Mining Solutions in Sub-Saharan Africa.

Live: https://evenor.org

## Stack

- Vite 5 + React 18 + TypeScript (SWC)
- Tailwind CSS 3 with brand design tokens (navy / gold / `gold-ink` for AA contrast on light surfaces)
- shadcn/ui on Radix primitives, Framer Motion, Lucide icons
- Leaflet + OpenStreetMap (CARTO dark tiles) for the operations map — lazy loaded
- Lovable Cloud (Supabase) for the contact/enquiry pipeline

## Local development

```sh
bun install
bun run dev      # http://localhost:8080
bun run test     # vitest
bun run build    # production build (also regenerates public/sitemap.xml)
```

Bun is the supported package manager for this repository.

## Project structure

```
src/
  assets/images.ts     AVIF/WebP responsive image registry (640/1280/1920w)
  components/          Section and shared UI components
  data/                sectors.ts, projects.ts — the content source of truth
  lib/contactSchema.ts Zod schema + row mapper for the enquiry form
  pages/               Route components (all lazy loaded in App.tsx)
scripts/
  generate-sitemap.mjs Builds public/sitemap.xml from data/*.ts at build time
```

## Content updates

Sectors and projects are authored in `src/data/*.ts`. Adding a slug there automatically adds
the route content, the homepage deep-dive tab, and the sitemap entry on the next build.

## Environment

Backend configuration is injected by the hosting platform (`VITE_SUPABASE_URL`,
`VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`). These are publishable,
client-safe values; the `contacts` table is insert-only under Row Level Security with
server-side validation and no public read access. Never add service-role or third-party
secrets to this file — those belong in backend secrets.
