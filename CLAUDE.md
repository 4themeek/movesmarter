# CLAUDE.md — smartermove.fyi

Lead-capture landing site for commercial office space, differentiated on
LEED sustainability and up-front tenant improvement (TI) customization.
Built for domain `www.smartermove.fyi`. Content is modeled on a real
building (The Edge Cincinnati, 310 Culvert St) but written generically —
no exclusive representation claims are made in the copy.

Note: the GitHub repo (`4themeek/movesmarter`) and Vercel project
(`movesmarter`) keep the old `movesmarter` name — only user-facing text and
URLs were updated to `smartermove.fyi` (2026-08-26), not the repo/project
identifiers.

## Stack

- Next.js 15 (App Router), plain JavaScript (no TypeScript)
- Tailwind CSS
- Formspree for the contact form (no backend/database)
- StatCounter for analytics
- Deploy target: Vercel, GitHub repo pushed via GitHub web UI (owner prefers
  web UI over git CLI)

## Structure

- `app/page.js` — homepage: Hero (Ken Burns photo slider) → DataStrip
  (stats) → Pillars (sustainability/customization) → Location → CTA →
  Footer. There was previously an `Intro` full-viewport poster shown before
  Hero on page load; it's been removed (2026-08-26) so Hero is the first
  thing visitors see.
- `app/contact/page.js` — lead form page
- `components/Hero.jsx` — building photo hero with an architectural "spec
  rail" annotation (floors / SF / ceiling height / LEED); background is
  `components/HeroSlider.jsx`, a client component that cycles 6 photos with
  a Ken Burns scale+pan and crossfade (see that file for the animation
  mechanics)
- `components/ContactForm.jsx` — client component posting to Formspree via
  `NEXT_PUBLIC_FORMSPREE_ID`; supports an optional `_cc` second recipient
  via `NEXT_PUBLIC_LEAD_CC_EMAIL`
- `public/edge.jpg` — used only as the OpenGraph/social-share image now
  (`app/layout.js`)
- `public/hero/*.jpg` — the 6 HeroSlider photos, compressed to <400KB each
- `components/Logo.jsx` — the logo (background keyed transparent from the
  source PNG) on a small light card, used in place of text in `Nav.jsx` and
  the contact page header; `Footer.jsx` still uses plain text ("SMARTER
  MOVE"), not the image

## Design tokens (Tailwind config)

- `graphite` #1C2321, `concrete` #EDEBE6, `glass` #45636E, `leed` #5B8C5A,
  `paper` #FAFAF8, `steel` #8B9490, `rust` #B5502F
- Display font: Space Grotesk · Body: Inter · Data/mono: JetBrains Mono

## Outstanding / TODO

- [x] Formspree form created and wired up (`NEXT_PUBLIC_FORMSPREE_ID`,
  form ID `xrpgzbdq`) — set locally in `.env.local` and needs to also be set
  in Vercel's env vars for production
- [x] StatCounter project wired up (2026-08-16, project ID 13351736)
- [x] Pushed to `4themeek/movesmarter` on GitHub, imported into Vercel
  (Framework Preset must stay "Next.js" — see the deploy note below)
- [ ] Confirm final copy/specs against the actual listing before launch —
  current numbers (100,000 SF, 18,000 SF floors, 11–15' ceilings, ~50%
  energy use, $1/SF electric) are sourced from public info on the reference
  building and should be verified (the "12-year tax abatement" claim was
  removed sitewide 2026-08-16 pending verification)
- [ ] Point `www.smartermove.fyi` at the Vercel project under Project
  Settings → Domains
- [ ] Optional: add a second Formspree recipient either via the Formspree
  dashboard or `NEXT_PUBLIC_LEAD_CC_EMAIL`

## Commands

```
npm install
npm run dev      # local dev at localhost:3000
npm run build    # production build check
```
