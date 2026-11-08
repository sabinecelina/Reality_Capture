# Reality_Capture Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-03-16

## Active Technologies

- TypeScript / JavaScript (Node.js 20 LTS) + Astro 4.x, Tailwind CSS 3.x, @astrojs/tailwind, @astrojs/mdx, Lucide icons (001-modern-web-redesign)

## Project Structure

```text
public/
  assets/        # static media (images, videos, PDFs) — do not rename/move files
src/
  content/
    blog/        # Markdown blog posts (Astro Content Collections)
    projects/    # Markdown project pages (Astro Content Collections)
    config.ts    # Zod schemas
  components/    # Astro components (Header, Footer, Hero, BlogCard, ProjectCard, ThemeToggle)
  layouts/       # BaseLayout.astro, PageLayout.astro, BlogPostLayout.astro
  pages/         # File-based routing (index, blog/*, projects/*, cv, thesis, gallery, 404)
  styles/        # globals.css (Tailwind directives)
tests/
  e2e/           # Playwright E2E tests
```

## Commands

```bash
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # serve production build locally
npx playwright test  # run E2E tests (requires build + preview running)
```

## Code Style

TypeScript / JavaScript (Node.js 20 LTS): Follow standard conventions

## Recent Changes

- 001-modern-web-redesign: Added TypeScript / JavaScript (Node.js 20 LTS) + Astro 4.x, Tailwind CSS 3.x, @astrojs/tailwind, @astrojs/mdx, Lucide icons

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
