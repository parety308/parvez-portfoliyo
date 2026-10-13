# Md Parvez Hasan: Developer Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript, Tailwind CSS v4 and Framer Motion.

## Sections
Hero (with resume button and social links), About, Education, Skills, searchable Projects, individual project pages (`/projects/[slug]`), Contact (mailto/tel/WhatsApp plus an EmailJS form) and Footer.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

## Scripts
| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | Biome lint and format check |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Content
All text lives in `src/data/portfolioData.json`.

- Project screenshots: `public/projects/project-1.jpg`, `project-2.jpg`, `project-3.jpg`
- Resume: `public/resume/Parvez_Web-Developer.pdf` (the hero button switches from "Request Resume" to "Download Resume" at build time)
- Links still marked `[...]` in the JSON (for example the Twitter/X URL) are hidden automatically.

## Environment variables
See `.env.example`. Variables prefixed `NEXT_PUBLIC_` are exposed to the browser, so never put private secrets in them.

## Deployment
Deploy on Vercel: import the repository and add the environment variables from `.env.example` in the project settings. Files in `public/` must be committed, and adding the resume later requires a redeploy.