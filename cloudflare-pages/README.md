# Company of Profits — Cloudflare Pages Deployment

## What is this folder?

The `/cloudflare-pages/` folder contains the **production-ready static website** for Company of Profits. It is the deployable release artifact — everything needed to deploy to Cloudflare Pages without installing Node.js, running a build, or opening Bolt.new.

## How to deploy

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages**
3. Choose **Upload assets** (direct upload)
4. Upload the entire contents of this `/cloudflare-pages/` folder
5. Click **Deploy**

The site is live immediately after deployment.

## What's inside

- `index.html` — entry point (loads the React app)
- `assets/` — compiled JavaScript, CSS, and logo SVGs
- `_redirects` — Cloudflare Pages SPA fallback (all routes serve index.html for client-side routing)
- `sitemap.xml` — XML sitemap with hreflang alternates for EN/ES
- `robots.txt` — search engine directives

## Environment variables

The following environment variables are used by the application at runtime and must be configured in the build environment (not in Cloudflare Pages — they are baked into the build):

- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase anon public key

These are already set in the build environment. The Supabase instance stores Blueprint application submissions.

## Configuration placeholders

The following values need to be configured before launch (see `src/config/site.ts` in the source project):

- Blueprint price
- Production domain
- Official contact email/phone/address
- Privacy Policy and Terms URLs
- HubSpot portal ID and form ID
- WordPress API endpoint
- Analytics measurement ID
- Social profile URLs
- Founder portrait (for About page)

## Routes

The site is bilingual (English/Spanish) with the following routes:

### English
- `/en/` — Home
- `/en/blueprint` — Prophetic Business Blueprint
- `/en/methodology` — Methodology
- `/en/programs` — Programs overview
- `/en/programs/profit-maximization`
- `/en/programs/operational-optimization`
- `/en/programs/freedom-architecture`
- `/en/programs/kingdom-wealth-and-impact`
- `/en/programs/prophetic-business-mentorship`
- `/en/why-company-of-profits`
- `/en/about`
- `/en/insights`
- `/en/faq`
- `/en/apply` — Blueprint application form

### Spanish
- `/es/` — Inicio
- `/es/radiografia` — Radiografía Empresarial Profética
- `/es/metodologia` — Metodología
- `/es/programas` — Programas
- `/es/programas/rentabilidad-maximizada`
- `/es/programas/optimizacion-operativa`
- `/es/programas/arquitectura-de-independencia`
- `/es/programas/riqueza-de-reino-e-impacto`
- `/es/programas/mentoria-empresarial-profetica`
- `/es/por-que-company-of-profits`
- `/es/nosotros`
- `/es/insights`
- `/es/preguntas-frecuentes`
- `/es/aplicar` — Formulario de aplicación

## Rebuilding from source

If you need to rebuild from source:

```bash
npm install
npm run build
```

Then copy the contents of `dist/` into `/cloudflare-pages/`.

## Tech stack

- React 18 + TypeScript
- Vite 5 (build tool)
- React Router 6 (client-side routing)
- Tailwind CSS 3 (styling)
- Supabase (application data storage)
- Manrope + Inter (typography)

---

This folder is the deployable release for Cloudflare Pages. The contents of `/cloudflare-pages/` are ready for deployment.
