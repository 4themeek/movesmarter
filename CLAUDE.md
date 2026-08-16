# CLAUDE.md — movesmarter.fyi

Lead-capture landing site for commercial office space, differentiated on
LEED sustainability and up-front tenant improvement (TI) customization.
Built for domain `www.movesmarter.fyi`. Content is modeled on a real
building (The Edge Cincinnati, 310 Culvert St) but written generically —
no exclusive representation claims are made in the copy.

## Stack

- Next.js 15 (App Router), plain JavaScript (no TypeScript)
- Tailwind CSS
- Formspree for the contact form (no backend/database)
- StatCounter for analytics
- Deploy target: Vercel, GitHub repo pushed via GitHub web UI (owner prefers
  web UI over git CLI)

## Structure

- `app/page.js` — homepage: Intro (poster) → Hero (building photo) →
  DataStrip (stats) → Pillars (sustainability/customization) → Location →
  CTA → Footer
- `app/contact/page.js` — lead form page
- `components/Intro.jsx` — full-viewport poster shown on page load
  ("Your office is fine. Until you see what your office could be."),
  scrolls to `#explore` (the Hero section) on click
- `components/Hero.jsx` — building photo hero with an architectural "spec
  rail" annotation (floors / SF / ceiling height / LEED)
- `components/ContactForm.jsx` — client component posting to Formspree via
  `NEXT_PUBLIC_FORMSPREE_ID`; supports an optional `_cc` second recipient
  via `NEXT_PUBLIC_LEAD_CC_EMAIL`
- `public/edge.jpg` — building hero photo
- `public/office-is-fine.png` — intro poster image

## Design tokens (Tailwind config)

- `graphite` #1C2321, `concrete` #EDEBE6, `glass` #45636E, `leed` #5B8C5A,
  `paper` #FAFAF8, `steel` #8B9490, `rust` #B5502F
- Display font: Space Grotesk · Body: Inter · Data/mono: JetBrains Mono

## Outstanding / TODO

- [ ] Create Formspree form (account: themeek@hush.com), set
  `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` and in Vercel env vars
- [ ] Create StatCounter project, replace `REPLACE_WITH_PROJECT_ID` and
  `REPLACE_WITH_SECURITY_CODE` in `app/layout.js`
- [ ] Confirm final copy/specs against the actual listing before launch —
  current numbers (100,000 SF, 18,000 SF floors, 11–15' ceilings, ~50%
  energy use, $1/SF electric, 12-yr tax abatement) are sourced from public
  info on the reference building and should be verified
- [ ] Push to a new GitHub repo (suggest `4themeek/movesmarter`), import
  into Vercel, point `www.movesmarter.fyi` at it
- [ ] Optional: add a second Formspree recipient either via the Formspree
  dashboard or `NEXT_PUBLIC_LEAD_CC_EMAIL`

## Commands

```
npm install
npm run dev      # local dev at localhost:3000
npm run build    # production build check
```
