# A&N Software Solutions — Company Website

Frontend-only marketing website built with **React 19 + Vite**, React Router and CSS Modules.

## Scripts

```bash
npm install
npm run dev       # local development (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Where to edit content

| What | File |
| --- | --- |
| Company name, email, phone, address, offices, social links | `src/config/site.js` |
| The 7 services (grid, menu, detail pages) | `src/data/services.js` |
| Company facts (match LinkedIn), mission, vision, goals, values | `src/data/company.js` |
| Technologies | `src/data/technologies.js` |
| Industries | `src/data/industries.js` |
| Solutions (example solution types) | `src/data/solutions.js` |
| Job openings shown on the Jobs page | `src/data/jobs.js` |
| Hiring solutions, roles we recruit for, hiring process, employer FAQs | `src/data/hiring.js` |
| FAQs | `src/data/faqs.js` |
| Privacy policy & terms | `src/data/legal.js` |
| Images (Unsplash ids or `/images/...` paths) | `src/utils/image.js` |
| Colours, fonts, spacing | `src/styles/variables.css` |
| Page titles, descriptions & share images (all pages) | `src/config/pageMeta.js` |
| Structured data (JSON-LD) & default head tags | `index.html` |
| Logo, favicons, app icons, social share images | `public/logo.jpg` → run the generator below |
| Domain, contact details | `src/config/site.js` |

The site domain is `https://ansoftwaresolutions.in` (set in `src/config/site.js` and the JSON-LD in
`index.html`). Point `www.ansoftwaresolutions.in` to the same site with a redirect to the bare domain.

To use your own images, put them in `public/images/` and reference them as `/images/your-file.jpg`.
If a remote image fails to load, a placeholder is shown automatically.

## Logo & SEO images

Every brand image is generated from the single source logo `public/logo.jpg`:

```bash
pip install pillow
python scripts/generate_brand_assets.py
```

This writes:

- `public/brand/` — header logo (`logo-mark.webp`), `logo-512.png`, app icons, maskable icon, apple-touch icon
- `public/favicon.ico`
- `public/og/*.jpg` — a 1200×630 social share image for every page and every service

Re-run it whenever you change the logo, a page headline or a service.

## SEO

`npm run build` runs `vite build` and then `scripts/prerender.mjs`, which uses `src/config/pageMeta.js` to:

- write one HTML file per route (`about.html`, `services/automation.html`, …) with that page's own
  title, description, canonical URL and Open Graph / Twitter tags, so Google and link previews on
  LinkedIn, WhatsApp and X show the right page details
- write `404.html` (noindex) so unknown URLs return a real 404
- generate `sitemap.xml` (with today's date) and `robots.txt`

To add a page: add its route in `src/App.jsx` and its entry in `src/config/pageMeta.js`.
Old URLs (`/portfolio`, `/careers`) redirect permanently via `public/_redirects` and `vercel.json`.

After going live: verify the domain in Google Search Console (DNS TXT record is easiest), submit
`https://ansoftwaresolutions.in/sitemap.xml`, and create a Google Business Profile for the office.

## Forms

Contact, hiring requirement, job application and newsletter forms validate in the browser and show a success message.
They do **not** send data anywhere yet — connect a backend or a form service
(Formspree, EmailJS, etc.) in `src/utils/submitForm.js`. Always re-validate on the server.

## Project structure

```
src/
  components/   common UI, layout (navbar, footer), cards, forms
  sections/     page sections (home/, shared/)
  pages/        one file per route (lazy-loaded)
  data/         all site content
  config/       company settings
  hooks/        useForm, useInView, useCountUp, ...
  utils/        validators, image helpers, form submit stub
  styles/       design tokens, base styles, utilities
```

## Deployment & security

- `public/_headers` + `public/_redirects` — Netlify / Cloudflare Pages (CSP, HSTS, SPA fallback)
- `vercel.json` — the same for Vercel
- If you add analytics or other third-party scripts, update the Content-Security-Policy.
