# Implementation Plan: Modern Web Application Redesign

**Branch**: `001-modern-web-redesign` | **Date**: 2026-03-16 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-modern-web-redesign/spec.md`

## Summary

Rebuild the personal portfolio of Sabine Schleise (sabineschleise.com) as a modern static web application using Astro 4 + Tailwind CSS, replacing the current Jekyll site. All existing content (5 blog posts, 4 projects, CV, thesis, gallery) is migrated from Markdown and preserved at compatible URLs. New capabilities include light/dark mode with `localStorage` persistence, WCAG 2.1 AA accessibility, and Lighthouse ≥90 performance scores. Deployment target is GitHub Pages (identical to current setup).

## Technical Context

**Language/Version**: TypeScript / JavaScript (Node.js 20 LTS)
**Primary Dependencies**: Astro 4.x, Tailwind CSS 3.x, @astrojs/tailwind, @astrojs/mdx, Lucide icons
**Storage**: File-based only — Markdown content in `src/content/`, static assets in `public/`
**Testing**: Playwright (E2E + visual regression), Lighthouse CI (performance/accessibility gates)
**Target Platform**: Static hosting on GitHub Pages; custom domain `sabineschleise.com` via CNAME
**Project Type**: Static web application / personal portfolio site
**Performance Goals**: Lighthouse Performance ≥90, LCP <2.5s, Accessibility ≥90, Best Practices ≥90, SEO ≥90
**Constraints**: All existing asset paths preserved (no broken references); zero server-side runtime; WCAG 2.1 AA color contrast; production build via GitHub Actions CI/CD
**Scale/Scope**: ~10 pages, 5 blog posts (growing), 4 projects (growing), single author, no user accounts

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Constitution status**: The project constitution (`.specify/memory/constitution.md`) is an unfilled template with no ratified principles — all section fields remain as placeholder text. No governance constraints are active.

**Gate result: PASS** — No constitution violations possible. Governance framework should be set up before tasks are implemented (see quickstart.md recommendation).

**Post-design re-check**: Still PASS. The Astro + Tailwind architecture choices are conservative and justified by content-site best practices. No over-engineering introduced; no speculative features added.

## Project Structure

### Documentation (this feature)

```text
specs/001-modern-web-redesign/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   ├── url-structure.md
│   └── page-contracts.md
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
# Astro static web application replacing the Jekyll site

public/
├── assets/              # All existing assets copied verbatim from current site
│   ├── img/             # Profile image (main.jpg)
│   ├── photography/     # Gallery images
│   ├── media/           # NeRF/3DGS videos
│   ├── oscar/           # Photogrammetry tutorial frames
│   ├── projects/        # Project thumbnails
│   ├── bachelorthesis/  # Bachelor thesis assets
│   ├── 2024-12-19/      # Blog post assets
│   ├── 2024-12-20/      # Blog post assets
│   ├── css/             # (legacy, replaced by Tailwind build)
│   ├── award_sick.jpg
│   ├── CV.pdf
│   └── Sabine_Schleise_3DGS.mp4
├── CNAME                # sabineschleise.com
├── robots.txt
└── sitemap.xml

src/
├── content/
│   ├── blog/            # Migrated from _posts/ — .md files, same frontmatter
│   │   ├── 2024-12-19-easy-introduction-nerf.md
│   │   ├── 2025-03-01-cutting-edge-3dgs.md
│   │   ├── 2025-06-01-difference-gs-nerf.md
│   │   ├── 2025-06-07-my-journey.md
│   │   └── 2025-07-23-gentle-introduction-to-sfm.md
│   ├── projects/        # Migrated from _projects/ — .md files, same frontmatter
│   │   ├── bachelorthesis.md
│   │   ├── digital_landscape.md
│   │   ├── gargoyles.md
│   │   └── photography.md
│   └── config.ts        # Zod schema definitions for Content Collections
├── components/
│   ├── Header.astro     # Navigation + social links + theme toggle
│   ├── Footer.astro     # Copyright + Datenschutz link
│   ├── Hero.astro       # Home page hero section (video + intro text)
│   ├── BlogCard.astro   # Post list item (title + date + category)
│   ├── ProjectCard.astro # Project grid item (thumb + title + teaser)
│   ├── ThemeToggle.astro # Light/dark mode button (JS, localStorage)
│   └── VideoEmbed.astro # Wrapper for autoplay muted loop video elements
├── layouts/
│   ├── BaseLayout.astro      # <html> shell, meta tags, OG, dark-mode class
│   ├── PageLayout.astro      # Header + Footer wrap around slot
│   └── BlogPostLayout.astro  # PageLayout + reading time + date badge
├── pages/
│   ├── index.astro           # Home / hero
│   ├── blog/
│   │   ├── index.astro       # Blog listing (reverse chrono)
│   │   └── [...slug].astro   # Dynamic blog post pages
│   ├── projects/
│   │   ├── index.astro       # Projects grid
│   │   └── [...slug].astro   # Dynamic project detail pages
│   ├── cv.astro              # CV / resume page
│   ├── thesis.astro          # Master thesis highlight page
│   ├── bachelor.astro        # Bachelor thesis page
│   ├── gallery.astro         # Photography gallery (masonry grid)
│   ├── datenschutz.astro     # Privacy policy
│   └── 404.astro             # Custom 404 page
└── styles/
    └── globals.css           # Tailwind directives + CSS custom properties

astro.config.mjs              # Astro config (integrations, output: static, base)
tailwind.config.mjs           # Tailwind config (dark mode: class, content paths)
tsconfig.json
package.json

tests/
├── e2e/                 # Playwright E2E tests (one per user story)
│   ├── home.spec.ts
│   ├── blog.spec.ts
│   ├── projects.spec.ts
│   ├── cv.spec.ts
│   └── navigation.spec.ts
└── visual/              # Playwright visual regression snapshots
    └── *.png
```

**Structure Decision**: Single Astro project at the repository root (replacing Jekyll). Jekyll files (`_posts/`, `_projects/`, `_layouts/`, `_includes/`, `_config.yml`) are removed after migration. All content moves to `src/content/`; all static assets move to `public/assets/`. URL structure is preserved or redirected to avoid broken inbound links.
