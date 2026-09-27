# AN Software Solutions — Company Website

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
| Services (grid, mega-menu, detail pages) | `src/data/services.js` |
| Mission, vision, goals, values, stats, timeline, leadership | `src/data/company.js` |
| Technologies | `src/data/technologies.js` |
| Industries | `src/data/industries.js` |
| Portfolio / case studies | `src/data/portfolio.js` |
| Testimonials | `src/data/testimonials.js` |
| Jobs, perks, hiring steps | `src/data/careers.js` |
| FAQs | `src/data/faqs.js` |
| Privacy policy & terms | `src/data/legal.js` |
| Images (Unsplash ids or `/images/...` paths) | `src/utils/image.js` |
| Colours, fonts, spacing | `src/styles/variables.css` |
| Default SEO tags / JSON-LD | `index.html` |
| Sitemap / robots | `public/sitemap.xml`, `public/robots.txt` |

Also replace `https://www.ansoftwaresolutions.com` with your real domain in `src/config/site.js`,
`index.html`, `public/sitemap.xml` and `public/robots.txt`.

To use your own images, put them in `public/images/` and reference them as `/images/your-file.jpg`.
If a remote image fails to load, a placeholder is shown automatically.

## Forms

Contact, careers and newsletter forms validate in the browser and show a success message.
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
