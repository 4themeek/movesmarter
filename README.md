# Move Smarter (movesmarter.fyi)

Lead-capture landing site for LEED-certified, tenant-customizable office
space in downtown Cincinnati. Next.js 15 (App Router), Tailwind CSS, deployed
on Vercel.

## What's here

- `app/page.js` — landing page (hero, sustainability stats, sustainability +
  customization pillars, location, CTA)
- `app/contact/page.js` — lead capture page
- `components/ContactForm.jsx` — the Formspree-powered contact form
- `public/edge.jpg` — hero building photo
- StatCounter loaded in `app/layout.js`

## 1. Set up the contact form (Formspree)

1. Go to [formspree.io](https://formspree.io) and sign up (or log in) with
   **themeek@hush.com**.
2. Create a new form. Name it something like "Move Smarter — Site Leads."
3. In the form's settings, set the notification email to
   **themeek@hush.com**.
4. Copy the form ID from the form's endpoint URL — it looks like
   `https://formspree.io/f/mzznbeqv`, so the ID is `mzznbeqv`.
5. Add it as an environment variable (see step 3 below).

**Adding a second recipient later:** Formspree's own dashboard (under the
form's Settings → Notifications) lets you add more recipient emails directly
— that's the simplest path. Alternatively, this form already sends a hidden
`_cc` field, so setting `NEXT_PUBLIC_LEAD_CC_EMAIL` to a second address will
also work without touching the code.

## 2. Set up StatCounter

1. Log into StatCounter and create a new project for `movesmarter.fyi`.
2. From **My Projects → [project] → Install Code**, grab your **Project ID**
   and **Security Code**.
3. Open `app/layout.js` and replace:
   - `REPLACE_WITH_PROJECT_ID` with your project ID
   - `REPLACE_WITH_SECURITY_CODE` with your security code

## 3. Environment variables

Copy `.env.example` to `.env.local` for local development:

```
cp .env.example .env.local
```

Fill in:

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
NEXT_PUBLIC_LEAD_CC_EMAIL=
```

When you deploy on Vercel, add these same two variables under
**Project Settings → Environment Variables**.

## 4. Deploy

**Via GitHub + Vercel (recommended for your workflow):**

1. Create a new repo on GitHub (e.g. `4themeek/movesmarter`) and upload all
   these files through the GitHub web UI (drag-and-drop or "Add file →
   Upload files").
2. In Vercel, "Add New Project" → import that GitHub repo.
3. Add the environment variables from step 3 above.
4. Point your `www.movesmarter.fyi` domain at the Vercel project under
   **Project Settings → Domains**.

**Local development (optional):**

```
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Content notes

Copy on this site describes the building generically (LEED status, square
footage, ceiling heights, tax abatement, tenant improvement approach) based
on publicly available information. It does not name or claim exclusive
representation of any specific property — update `components/Pillars.jsx`,
`components/Location.jsx`, and `components/DataStrip.jsx` with your actual
listing details, address, and any broker/representation language before
this goes live.
