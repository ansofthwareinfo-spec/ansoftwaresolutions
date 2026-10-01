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
| Default SEO tags / JSON-LD | `index.html` |
| Logo, favicons, app icons, social share images | `public/logo.jpg` → run the generator below |
| Sitemap / robots | `public/sitemap.xml`, `public/robots.txt` |

Also replace `https://www.ansoftwaresolutions.com` with your real domain in `src/config/site.js`,
`index.html`, `public/sitemap.xml` and `public/robots.txt`.

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

Re-run it whenever you change the logo, a page headline or a service. Each page passes its
image to `<Seo image="/og/<page>.jpg" />`.

> Social networks (LinkedIn, WhatsApp, X) do not run JavaScript, so link previews always use the
> defaults in `index.html` (the home image). For per-page previews, add prerendering later
> (e.g. `vite-plugin-prerender`) — Google does read the per-page tags.

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
