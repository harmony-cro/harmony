# Harmony

Digital marketing agency website — Next.js (App Router), Tailwind CSS v4, [next-intl](https://next-intl-docs.vercel.app/) for **Croatian (`hr`)** and **English (`en`)**.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Environment

Copy [`.env.example`](.env.example) to `.env.local` and set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` for production.

## Routes

- `/` redirects to `/hr` (default locale)
- `/hr/...` and `/en/...` — localized pages

Phase 2 will align visuals with Stitch/Figma handoff; design tokens live in [`app/globals.css`](app/globals.css).
