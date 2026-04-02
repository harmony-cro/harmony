---
name: Harmony Project Overview
description: Tech stack, structure, and key conventions for the Harmony digital marketing agency website
type: project
---

Digital marketing agency website at `/home/colden/projects/business/harmony`.

## Stack
- Next.js 16.2.1 (App Router) — has breaking changes vs training data; read docs in `node_modules/next/dist/docs/` before writing code
- React 19.2.4
- Tailwind CSS v4 (via `@tailwindcss/postcss`) — breaking changes vs v3
- next-intl ^4.8.3 — i18n with Croatian (`hr`) and English (`en`)
- TypeScript

## Structure
- `app/[locale]/` — all pages are under locale segment
  - `page.tsx` — home
  - `about/page.tsx`, `services/page.tsx`, `contact/page.tsx`
  - `layout.tsx`, `not-found.tsx`
- `components/` — Header, Footer, MainNav, MobileMenu, LocaleSwitcher, ContactForm, about/, home/, services/
- `messages/en.json`, `messages/hr.json` — translation files
- `i18n/`, `lib/` — intl config and utilities
- `sources/` — content sources
- Docker + docker-compose for deployment

## Key Warnings (from AGENTS.md)
- Next.js 16 has breaking API/convention changes — do NOT rely on training knowledge; read the bundled docs
- Tailwind v4 differs significantly from v3
