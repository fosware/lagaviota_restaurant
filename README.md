# La Gaviota Mexican Restaurant Website

Commercial website rebuild for La Gaviota Mexican Restaurant in Denver, CO.

## Stack

- Next.js 16.2.9
- TypeScript
- Tailwind CSS
- shadcn/ui-style local components
- App Router with static SEO routes

## Run locally

```bash
npm install
npm run dev
```

Build and type-check:

```bash
npm run typecheck
npm run build
```

## Pages

- `/`
- `/menu`
- `/catering`
- `/family-packs`
- `/gallery`
- `/about`
- `/contact`
- `/order`

## Included

- Local restaurant SEO metadata
- Schema.org `Restaurant`
- Open Graph metadata
- `sitemap.xml`
- `robots.txt`
- Responsive header with mobile drawer
- Mobile drawer mounted through a body portal so it behaves as a true overlay
- Sticky mobile CTA: Call, Menu, Catering
- Google Maps embed without API key
- Full English/Spanish UI copy with persistent language toggle
- In-site pickup order form that opens a prepared email and asks users to call to confirm
- Catering inquiry content focused on phone planning
- SVG favicon plus generated ICO
- Restaurant-facing copy written for guests, not internal implementation notes

## Before publication

- Confirm current menu and prices.
- Confirm all listed dishes are still available.
- Confirm hours: Monday-Sunday, 9:00 am-7:00 pm.
- Confirm the email is actively monitored.
- Confirm whether Rosa Romero should appear publicly.
- Confirm permission to reuse images from the existing site.
- Confirm whether soccer, salsa bar, micheladas and beer-to-go are still current.
- Confirm party package formats, prices, deposits and minimum notice.
- Confirm whether there are official social profiles or delivery platforms.
- Decide whether `/order` should remain email-based, become phone-only, or connect to a real backend/POS.
- Confirm the restaurant wants to receive pickup order emails at the listed Gmail address.
- If a delivery/POS platform becomes reliable, decide whether to keep `/order` or link out.

## Image note

The source photos were pulled from the current La Gaviota website for local rebuild work and optimized into WebP/AVIF. The current site footer states that content and images are owned by the business and licensors, so permission should be confirmed before launch.
