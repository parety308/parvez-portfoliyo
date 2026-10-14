<div align="center">

# `< PARVEZ />`

### Md Parvez Hasan · Full Stack Developer & Software Engineer

*A fast, accessible, fully data-driven developer portfolio. Edit one JSON file and the whole site updates.*

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-lint_&_format-60A5FA?style=for-the-badge&logo=biome&logoColor=white)

[**Live Site**](https://your-portfolio-url.vercel.app) · [**Report a Bug**](../../issues) · [**Contact Me**](mailto:md.parvez.hasan.dev@gmail.com)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Preview](#preview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Customize It: Everything Lives in One JSON File](#customize-it-everything-lives-in-one-json-file)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contact Form Setup (EmailJS)](#contact-form-setup-emailjs)
- [Deployment](#deployment)
- [Performance, SEO & Accessibility](#performance-seo--accessibility)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

This is my personal portfolio, built with the **Next.js App Router**. It's designed so that **content and code are fully separate**: every piece of text, every link and every project comes from a single file, `src/data/portfolioData.json`. Anything still marked as a placeholder (like `"[Your Twitter/X profile URL]"`) is **hidden automatically**, so the site never shows broken links.

> **Want to reuse it?** Fork the repo, replace the JSON, drop in your images and resume, and you have your own portfolio.

---

## Preview

<!-- Replace these with real screenshots: put files in /public/screenshots and update the paths -->

| Home | Projects |
| :---: | :---: |
| ![Home preview](public/screenshots/home.png) | ![Projects preview](public/screenshots/projects.png) |

| Project Details | Skills |
| :---: | :---: |
| ![Project page preview](public/screenshots/project-details.png) | ![Skills preview](public/screenshots/skills.png) |

---

## Features

### Content & Pages
- **Single-page layout** with Hero, About, Projects, Education, Skills and Contact sections, plus Footer.
- **Dynamic project pages** at `/projects/[slug]`, statically generated for every project in the JSON.
- **Searchable and filterable projects**: live text search plus a technology dropdown, with a "Show All / Show Less" toggle.
- **Smart resume button**: shows **Download Resume** if the PDF exists in `public/`, otherwise falls back to **Request Resume** (a prefilled `mailto:` link). The check runs at build time.
- **Automatic placeholder hiding**: any value starting with `[` in the JSON (socials, certificate links, live links) is removed from the UI.
- **Project images resolved automatically**: the app looks for `jpg`, `jpeg`, `png`, `webp` or `avif` and shows a "Screenshot coming soon" card when none is found.

### Interaction & Design
- Dark, glassmorphism-inspired theme with a teal → cyan → blue gradient accent.
- Smooth scroll-triggered animations with **Framer Motion**.
- **Scroll progress bar** at the top of the page.
- **Active-section highlighting** in the navbar as you scroll, with a sliding indicator.
- Responsive navbar with an accessible mobile menu (closes on `Escape`).
- Custom 404 page and custom favicon.

### Contact
- Direct **email**, **phone** and **WhatsApp** cards, built from your JSON.
- **EmailJS contact form** with validation, loading, success and error states. It degrades gracefully if EmailJS isn't configured.

### Quality
- **SEO ready**: dynamic metadata, Open Graph and Twitter cards, `robots.txt` and an auto-generated `sitemap.xml`.
- **Accessible**: skip-to-content link, visible focus rings, semantic landmarks, ARIA labels and `prefers-reduced-motion` support.
- **Strict TypeScript** and **Biome** for linting and formatting.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 16 (App Router, Cache Components, Turbopack) |
| **UI** | React 19, Tailwind CSS v4 |
| **Animation** | Framer Motion |
| **Icons** | Lucide React, React Icons |
| **Language** | TypeScript (strict mode) |
| **Forms / Email** | EmailJS (`@emailjs/browser`) |
| **Tooling** | Biome (lint + format) |
| **Hosting** | Vercel |

---

## Quick Start

**Prerequisites:** Node.js **20.9 or newer** and npm.

```bash
# 1. Clone the repository
git clone https://github.com/parety308/<your-repo-name>.git
cd <your-repo-name>

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local      # then fill in the values

# 4. Start the dev server
npm run dev                     # http://localhost:3000
```

Build and run the production version locally:

```bash
npm run build
npm run start
```

---

## Environment Variables

Create `.env.local` in the project root. All of these are optional, but each one unlocks a feature.

| Variable | Used for | Required |
| --- | --- | :---: |
| `NEXT_PUBLIC_SITE_URL` | Absolute URLs in `sitemap.xml` and `robots.txt` (e.g. `https://yourname.vercel.app`) | Recommended |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service | For contact form |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template | For contact form |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | For contact form |

```env
NEXT_PUBLIC_SITE_URL=https://yourname.vercel.app
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

> **Security note:** variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put private secrets in them. EmailJS public keys are designed to be public.

If the EmailJS variables are missing, the form shows a friendly message asking visitors to email you directly instead of failing silently. If `NEXT_PUBLIC_SITE_URL` is missing, the sitemap is simply skipped.

---

## Customize It: Everything Lives in One JSON File

Open **`src/data/portfolioData.json`**. It controls the entire site:

| Section | What it controls |
| --- | --- |
| `personalInfo` | Name, title, tagline, contact details, avatar, resume path, social links |
| `aboutContent` | Journey, focus, "work I enjoy", hobbies, currently learning |
| `skills` | Five categories: `languages`, `frontend`, `backend`, `database`, `tools` |
| `education` | Degrees, institutions, years |
| `certifications` | Name, issuer, certificate link |
| `languages` | Spoken languages and levels |
| `projects` | Every project card **and** its detail page |

### Add a new project

Add an object to the `projects` array. A new page appears at `/projects/<id>` automatically.

```jsonc
{
  "id": "my-new-project",            // becomes the URL: /projects/my-new-project
  "name": "My New Project",
  "subtitle": "One-line tagline",
  "image": "project-5",              // matches public/projects/project-5.(jpg|png|webp|avif)
  "shortDescription": "Shown on the card (3 lines max).",
  "overview": "Longer description shown on the detail page.",
  "techStack": ["Next.js", "TypeScript", "PostgreSQL"],
  "liveLink": "https://example.com",
  "liveApiLink": "https://api.example.com",         // optional
  "githubLink": "https://github.com/you/frontend",
  "backendGithubLink": "https://github.com/you/backend", // optional
  "challenges": ["What was hard #1", "What was hard #2"],
  "improvements": ["Future idea #1"]                // use [] to hide the section
}
```

### Assets

| Asset | Location |
| --- | --- |
| Project screenshots | `public/projects/<image-key>.jpg` (also `.jpeg`, `.png`, `.webp`, `.avif`) |
| Resume | `public/resume/Resume_Of_MD_Parvez_Hasan.pdf` (must match `personalInfo.resumeUrl`) |
| Profile photo | Remote URL in `personalInfo.avatar` (host must be allowed in `next.config.ts`) |
| Favicon | `src/app/icon.svg` |

### Placeholder rule

Any string value that **starts with `[`** is treated as "not filled in yet" and hidden:

```json
"twitter": "[Your Twitter/X profile URL]"   // icon is not rendered
```

Replace it with a real URL and the icon appears on the next build.

### Add or change a skill

Edit the arrays under `skills` in the JSON. The *Core Stack* icon strip in `src/components/sections/Skills.tsx` is a small array you can edit directly.

---

## Project Structure

```text
.
├── public/
│   ├── projects/              # Project screenshots (project-1.jpg ...)
│   └── resume/                # Resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, fonts, global metadata
│   │   ├── page.tsx           # Home page (assembles all sections)
│   │   ├── globals.css        # Tailwind import, theme tokens, animations
│   │   ├── icon.svg           # Favicon
│   │   ├── not-found.tsx      # Custom 404
│   │   ├── robots.ts          # robots.txt
│   │   ├── sitemap.ts         # sitemap.xml
│   │   └── projects/[slug]/
│   │       └── page.tsx       # Dynamic project detail page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Education.tsx
│   │       ├── Skills.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   └── portfolioData.json # ★ Single source of truth for all content
│   ├── lib/
│   │   ├── portfolio.ts       # Typed data access + isPlaceholder()
│   │   ├── projectImages.ts   # Resolves project image files
│   │   ├── resume.ts          # Checks the resume file exists
│   │   └── socials.ts         # Builds the social links list
│   └── types/
│       └── portfolio.ts       # TypeScript types for the JSON
├── biome.json
├── next.config.ts
├── tsconfig.json
└── package.json
```

### How the data flows

```text
portfolioData.json ──► lib/portfolio.ts (typed) ──► sections & pages
                                   │
                                   ├─► lib/projectImages.ts  (finds image files on disk)
                                   ├─► lib/resume.ts         (checks resume exists)
                                   └─► lib/socials.ts        (drops placeholder links)
```

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Biome lint and format checks |
| `npm run format` | Auto-format the codebase with Biome |

---

## Contact Form Setup (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an **Email Service** (Gmail, Outlook, etc.) and copy the **Service ID**.
3. Create an **Email Template** that uses these variables:

   | Variable | Meaning |
   | --- | --- |
   | `{{name}}` | Sender's name |
   | `{{email}}` | Sender's email (set it as *Reply-To*) |
   | `{{message}}` | The message body |

4. Copy the **Template ID** and your **Public Key** from *Account → General*.
5. Put all three values in `.env.local`, then restart `npm run dev`.

---

## Deployment

### Deploy on Vercel (recommended)

1. Push the repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add the variables from the [Environment Variables](#environment-variables) section in **Project Settings → Environment Variables**.
4. Click **Deploy**.

**Things to remember**
- Files in `public/` (images, resume) must be **committed**. Make sure `.gitignore` doesn't exclude them.
- The resume button state is decided **at build time**. If you add the PDF later, **redeploy**.
- Update `NEXT_PUBLIC_SITE_URL` to your final domain so the sitemap is correct.

---

## Performance, SEO & Accessibility

| Area | What's implemented |
| --- | --- |
| **Performance** | Static generation for all project pages, `next/image` with responsive `sizes`, Cache Components with an instant-shell Suspense boundary on project pages |
| **SEO** | Per-page titles via template, Open Graph and Twitter cards, keywords, `robots.txt`, dynamic `sitemap.xml` |
| **Accessibility** | Skip link, semantic landmarks, `aria-current` on active nav, labelled form fields with `aria-invalid` and error text, `aria-live` status messages, keyboard focus styles, reduced-motion support |
| **Code quality** | Strict TypeScript, typed JSON data, Biome with Next.js and React rule sets |

---

## Roadmap

- [ ] Add a blog or notes section
- [ ] Light / dark theme toggle
- [ ] Per-project Open Graph images
- [ ] Case-study sections with architecture diagrams
- [ ] Automated tests (components and end-to-end)
- [ ] Analytics (privacy-friendly)

Have an idea? [Open an issue](../../issues).

---

## License

This project is open source under the **MIT License**. You're free to use the code as a base for your own portfolio. Please replace all personal content (name, photos, projects, resume) with your own.

---

<div align="center">

### Let's build something great together

[![Email](https://img.shields.io/badge/Email-md.parvez.hasan.dev@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:md.parvez.hasan.dev@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-parety308-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/parety308)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mdparvezhasan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdparvezhasan)

**Designed & built by Md Parvez Hasan** · CSE, CUET 🇧🇩

</div>