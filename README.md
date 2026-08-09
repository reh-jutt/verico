# Verico

Marketing website for **Verico** — a QA testing agency for international teams
shipping at AI speed. Built with Next.js 15 (App Router), TypeScript (strict),
Tailwind CSS, and Resend for the contact form.

## Pages

A multi-page site (App Router), each route composed from section components:

| Route | Page | Key sections |
| --- | --- | --- |
| `/` | Home | Hero + terminal, managed-QA pitch, services preview, process, why Verico, CTA |
| `/about` | About | Intro, our story, who we work with, mission & vision, values, why Verico, CTA |
| `/services` | Services | Six detailed services, managed-QA pitch, process, engagement (hourly/monthly/project), FAQ, CTA |
| `/contact` | Contact | Working contact form + direct-contact fallbacks |

Services covered: Manual QA, API, Bug Reporting & Retesting, Automation, Performance, and Security testing.

The Navbar and Footer live in the root layout and are shared across every page;
the navbar highlights the active route.

## Tech stack

- **Next.js 15** — App Router, React Server Components by default
- **TypeScript** — `strict: true`, no `any`
- **Tailwind CSS** — all design tokens in [`tailwind.config.ts`](./tailwind.config.ts); no raw hex in components
- **next/font** — Space Grotesk, IBM Plex Sans, IBM Plex Mono loaded via CSS variables
- **Resend** — contact form delivery via a typed API route
- **ESLint + Prettier** — configured with the Tailwind class-sorting plugin

## Architecture

- **`app/`** — one folder per route (`about/`, `services/`, `contact/`), the root layout (shared Navbar + Footer, metadata), `sitemap.ts`, `robots.ts`, and the `api/contact` route. Each page exports its own `Metadata`.
- **`components/`** — `layout/` (Navbar, NavLinks, MobileMenu, Footer), `sections/` (presentational only), `ui/` primitives, and `icons/`.
- **`lib/content.ts`** — the single source of truth for all copy. No component hardcodes text.
- **`lib/constants.ts`** — site config, nav links, and contact details.
- **`hooks/useContactForm.ts`** — all contact-form state and submit logic (keeps the section presentational).
- **`types/index.ts`** — shared interfaces (`ServiceItem`, `ProcessStep`, `WhyItem`, `ContactFormData`, …).

Design discipline: **gold (`#E8A94C`) is the only bright accent** anywhere in the UI,
and keyboard focus states use the gold token throughout.

## Local development

Requires **Node.js 18.18+**.

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file and fill in values
cp .env.example .env.local

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Useful scripts

```bash
npm run dev          # start the dev server
npm run build        # production build (fails on type or lint errors)
npm run start        # serve the production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run format       # Prettier write
```

## Environment variables

Copy [`.env.example`](./.env.example) to `.env.local` and set:

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes (for the form) | API key from [resend.com/api-keys](https://resend.com/api-keys). |
| `CONTACT_EMAIL` | Yes (for the form) | Inbox that contact submissions are delivered to. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Optional | Digits only (country code + number) for the `wa.me` link. |

Notes:

- The app **builds without** these set; the contact API returns a typed error at
  request time if `RESEND_API_KEY` / `CONTACT_EMAIL` are missing.
- The API route sends from `onboarding@resend.dev` (Resend's test sender, no domain
  verification needed). For production, verify your domain in Resend and change
  `FROM_ADDRESS` in [`app/api/contact/route.ts`](./app/api/contact/route.ts) to an
  address on that domain (e.g. `hello@verico.dev`).

### Placeholders to replace before launch

The contact details in [`lib/constants.ts`](./lib/constants.ts) are placeholders for
a new agency: `hello@verico.dev`, the WhatsApp number, and the LinkedIn URL. Also update
`SITE_CONFIG.url` to your real domain (used by metadata, `sitemap.ts`, and `robots.ts`).

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), click **Add New → Project** and
   import the repository. Vercel auto-detects Next.js — no build settings changes needed.
3. Under **Settings → Environment Variables**, add `RESEND_API_KEY`, `CONTACT_EMAIL`, and
   `NEXT_PUBLIC_WHATSAPP_NUMBER` for the Production (and Preview) environments.
4. Click **Deploy**. Subsequent pushes to the default branch deploy automatically.
5. After adding a custom domain, update `SITE_CONFIG.url` in `lib/constants.ts` and verify
   the sending domain in Resend.

## Content honesty

This is a new agency, so the site intentionally contains **no fabricated client logos,
testimonials, or reviews**. All copy lives in `lib/content.ts` and is easy to update.
