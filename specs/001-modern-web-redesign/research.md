# Research: Modern Web Application Redesign

**Phase**: 0 — Outline & Research
**Branch**: `001-modern-web-redesign`
**Date**: 2026-03-16
**Status**: Complete — all NEEDS CLARIFICATION resolved

---

## R-001: Static Site Framework Selection

**Question**: Which modern static site framework best serves the requirements of this content-heavy portfolio (Jekyll replacement, Markdown blog, projects, gallery, dark mode)?

**Decision**: **Astro 4.x**

**Rationale**:
- Astro is purpose-built for content sites. It ships zero JavaScript by default (content renders as pure HTML/CSS), achieving maximum performance without configuration.
- Native **Content Collections** API provides type-safe Markdown/MDX reading with Zod schema validation — a direct, structured replacement for Jekyll's `_posts/` and `_projects/` collections.
- Astro supports `.md` and `.mdx` files natively, making content migration from Jekyll a near-mechanical rename and frontmatter alignment operation.
- Astro's routing is file-based (`src/pages/`) and supports dynamic routes (`[...slug].astro`) — straightforward to replicate Jekyll's URL structure.
- Lighthouse scores of 95–100 are routinely achievable out of the box due to Astro's static output model.
- The framework has broad ecosystem support: official Tailwind CSS integration (`@astrojs/tailwind`), MDX support (`@astrojs/mdx`), sitemap generation (`@astrojs/sitemap`), and RSS.
- Development experience is excellent for a solo author maintaining both content and code.

**Alternatives Considered**:
| Framework | Reason Rejected |
|-----------|----------------|
| Next.js (React) | Excellent framework but over-engineered for a fully static portfolio with no API routes or server components needed. Larger bundle, more complexity. |
| Hugo | Faster builds than Astro but Go templates are less approachable for a developer more familiar with JavaScript/TypeScript. Dark mode, component composition, and custom interactivity require significantly more boilerplate. |
| Eleventy (11ty) | Very close to Jekyll in philosophy; good migration path but weaker out-of-the-box Tailwind/component story and less modern UI ecosystem. |
| SvelteKit | Excellent performance and DX, but slight over-fit for a primarily static site. Svelte components for this use case add toolchain complexity without clear payoff. |
| Gatsby | Mature React SSG but its GraphQL data layer is unnecessarily complex for a small content site. Maintenance burden is high relative to site scale. |

---

## R-002: Styling Approach

**Question**: Which CSS strategy best supports a modern, custom-designed portfolio with dark/light mode and responsive layouts?

**Decision**: **Tailwind CSS 3.x with CSS custom properties for design tokens**

**Rationale**:
- Tailwind's utility-first model produces highly maintainable, co-located styles with zero dead CSS in production (PurgeCSS is built in).
- Class-based dark mode (`darkMode: 'class'` in `tailwind.config.mjs`) works seamlessly with Astro and the `ThemeToggle` component pattern.
- Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) make any responsive layout trivial to express and audit.
- CSS custom properties (CSS variables) are used for design tokens (brand colors, spacing) that need to change between light and dark themes — Tailwind's `theme.extend` can consume these.
- The existing site already uses Inter/Quicksand fonts and a blue-indigo color palette; these are easy to configure in Tailwind's `theme` block.

**Alternatives Considered**:
| Approach | Reason Rejected |
|----------|----------------|
| Vanilla CSS (current) | Maintain as-is with better organization — feasible but loses the responsive utilities and dark mode infrastructure that Tailwind makes trivial |
| CSS Modules | Scoped styles per component, but requires more manual responsive utility work and dark mode via data attributes or context |
| styled-components / emotion | React-specific CSS-in-JS; incompatible with Astro's zero-JS-by-default model |
| Open Props | Excellent CSS variable library but less ecosystem/tooling support for code review and collaboration |

---

## R-003: Icon Library

**Question**: The current site uses Font Awesome 4 (self-hosted via vendor/). Should we upgrade or replace?

**Decision**: **Upgrade to Lucide Icons (inline SVG via `lucide-astro`)**

**Rationale**:
- Font Awesome 4 is ~150KB of CSS + font files that load for the entire icon set regardless of which icons are used. Only 3 icons are currently used: envelope, github, linkedin.
- Lucide is a maintained, tree-shakeable SVG icon library. Each icon is imported individually; the production bundle contains only the icons actually used.
- `lucide-astro` provides native Astro component wrappers — zero JS, rendered as inline SVG at build time.
- Visual quality: Lucide's modern stroke-based design is consistent with contemporary portfolio aesthetics.

**Alternatives Considered**:
| Library | Reason Rejected |
|---------|----------------|
| Font Awesome 6 (SVG + JS) | Improved over v4 but still heavier than necessary for 3 icons; requires JS for accessibility features |
| Font Awesome 6 (CDN CSS) | External CDN dependency; render-blocking CSS |
| Heroicons | Also excellent; Lucide chosen for its slightly larger icon set and active Astro integration |

---

## R-004: Dark / Light Mode Implementation

**Question**: What is the best pattern for implementing dark/light mode with user preference persistence?

**Decision**: **CSS class-based dark mode (`class` strategy) + `localStorage` + inline `<script>` for flash prevention**

**Rationale**:
- Tailwind's `darkMode: 'class'` applies dark styles when the `<html>` element has a `dark` class. This gives full CSS control with no runtime JavaScript for rendering.
- A small inline `<script>` in `<head>` reads `localStorage.getItem('theme')` and applies the `dark` class before the first paint — preventing flash of incorrect theme (FOIT equivalent for color schemes). This script is ~4 lines and has no dependencies.
- The `ThemeToggle.astro` component handles user interaction: reads current state, toggles the class, and writes to `localStorage`.
- Respects initial system preference via `window.matchMedia('(prefers-color-scheme: dark)')` when no localStorage value is set.

**Implementation pattern**:
```html
<!-- In BaseLayout.astro <head>, before any CSS -->
<script is:inline>
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
</script>
```

---

## R-005: Jekyll → Astro Content Migration

**Question**: What is the migration strategy for existing Jekyll content (posts, projects, pages) to Astro Content Collections?

**Decision**: **Direct file copy with frontmatter schema alignment**

**Rationale**:
- Jekyll `_posts/` files use YAML frontmatter with keys: `layout`, `title`, `date`, `categories`. Astro Content Collections need `title`, `date`, and optionally `categories`; the `layout` key is ignored (Astro uses `BlogPostLayout.astro` via `getStaticPaths`). Migration: copy files to `src/content/blog/`, remove `layout` key.
- Jekyll `_projects/` files use: `layout`, `title`, `thumbnail`, `teaser`, `order`. Astro Content Collections: keep `title`, `thumbnail`, `teaser`, `order`; remove `layout`. Migration: copy to `src/content/projects/`.
- Jekyll Liquid template tags (`{{ site.baseurl }}`, `{% for ... %}`, `{% if ... %}`) used inside Markdown body content (e.g., gallery loops, image paths) must be converted:
  - Image paths: Replace `{{ '/assets/...' | prepend: site.baseurl }}` with `/assets/...` (bare absolute paths work in Astro).
  - Liquid loops (gallery, frame gallery, metashape split): Move to the corresponding `.astro` page/component, reading `import.meta.glob` for dynamic image lists.
- Inline `<style>` blocks within Markdown files: Extract to component `<style>` or Tailwind classes.
- HTML embedded in Markdown: Supported natively in Astro MDX.

**URL structure mapping**:
| Current Jekyll URL | Astro file | Notes |
|-------------------|-----------|-------|
| `/` | `pages/index.astro` | |
| `/blog/` | `pages/blog/index.astro` | |
| `/general/YYYY/MM/DD/slug/` | `pages/blog/[...slug].astro` | Use `trailingSlash: 'always'` and slug from filename date |
| `/projects/` | `pages/projects/index.astro` | |
| `/projects/gargoyles/` | `pages/projects/[slug].astro` | |
| `/cv/` | `pages/cv.astro` | |
| `/thesis/` | `pages/thesis.astro` (rename from thesis.md) | |
| `/bachelor/` | `pages/bachelor.astro` | |
| `/gallery/` | `pages/gallery.astro` | |
| `/datenschutz/` | `pages/datenschutz.astro` | |
| `404.html` | `pages/404.astro` | |

**Note on blog post URLs**: Current Jekyll blog URLs follow the pattern `/general/YYYY/MM/DD/post-title/` (observed from `_site/general/` directory structure). Astro will generate `/blog/YYYY-MM-DD-post-title/` by default from Content Collections. A configuration choice must be made: either replicate the legacy URL structure exactly (using a custom `getStaticPaths` that reconstructs the date-based path) or accept simple `/blog/slug/` URLs (cleaner, better SEO) and add HTTP 301 redirects from old URLs. **Recommendation**: Use `/blog/[slug]/` (simpler) and add a `_redirects` file or meta-refresh 404 for legacy URLs. This is documented in contracts/url-structure.md.

---

## R-006: Photography Gallery Implementation

**Question**: The gallery page currently uses a Jekyll Liquid loop over `site.static_files`. How is this replicated in Astro?

**Decision**: **`import.meta.glob` with Astro image optimization pipeline**

**Rationale**:
- Astro's `import.meta.glob('/public/assets/photography/*.{jpg,JPG,jpeg,png}')` provides a build-time glob of all photography assets — direct equivalent of Jekyll's `site.static_files` loop.
- All images are already in `public/assets/photography/`; they are served as-is (no processing needed since they are already sized for display).
- The masonry grid layout currently implemented with CSS `column-count` is kept and enhanced with Tailwind's `columns-3` utilities.
- For future scalability: `@astrojs/image` or native Astro `<Image>` can be used to generate WebP variants and reduce gallery load time; marked as an enhancement opportunity but not required now.

---

## R-007: GitHub Pages Deployment with Astro

**Question**: How is the Astro site deployed to GitHub Pages with a custom domain?

**Decision**: **GitHub Actions workflow using `withastro/action` + GitHub Pages**

**Rationale**:
- The current site uses GitHub Pages (evidenced by `CNAME` file in repo root with `sabineschleise.com`).
- The official `withastro/action` GitHub Action handles `npm ci`, `astro build`, and deploying to `gh-pages` branch in one step.
- The `CNAME` file is placed in `public/` so Astro copies it to the `dist/` output at build time.
- `astro.config.mjs` sets `site: 'https://sabineschleise.com'` and `output: 'static'`.
- No `base` path needed since the site is deployed to the apex domain.

**Workflow file**: `.github/workflows/deploy.yml`

---

## R-008: SEO & Open Graph Metadata

**Question**: What metadata strategy is needed for FR-013 (search discoverability and social sharing)?

**Decision**: **Per-page Open Graph + Twitter Card meta tags in `BaseLayout.astro`, with structured data support**

**Rationale**:
- `BaseLayout.astro` accepts `title`, `description`, and optional `image` props, generating:
  - `<title>`, `<meta name="description">`
  - `<meta property="og:title">`, `og:description`, `og:image`, `og:type`
  - `<meta name="twitter:card">`, `twitter:title`, `twitter:description`
- Blog posts use the Astro Content Collections frontmatter `title` and `description` as the source of truth.
- `@astrojs/sitemap` integration auto-generates `sitemap.xml` at build time.
- Canonical URLs are set via `<link rel="canonical">` using `Astro.url`.

---

## R-009: Testing Strategy

**Question**: What test coverage is appropriate for a static portfolio site?

**Decision**: **Playwright E2E tests for user story acceptance scenarios + Lighthouse CI for quality gates**

**Rationale**:
- Unit tests are of limited value for a static site without business logic. The meaningful tests are behavioral (does the page load, does navigation work, do all posts render) and quality-oriented (Lighthouse scores).
- Playwright provides: navigation tests, content rendering checks, mobile viewport simulation, and visual regression snapshots.
- Lighthouse CI (`lhci`) runs against the production build (`astro build` + `astro preview`) to gate Lighthouse scores on each PR.
- One Playwright test file per user story (aligned with spec User Stories 1–5).

---

## Summary of Decisions

| ID | Topic | Decision |
|----|-------|----------|
| R-001 | Framework | Astro 4.x |
| R-002 | Styling | Tailwind CSS 3.x + CSS custom properties |
| R-003 | Icons | Lucide Icons (lucide-astro) |
| R-004 | Dark mode | Class-based + localStorage + inline script |
| R-005 | Migration | Direct copy with frontmatter alignment; `/blog/[slug]/` URLs |
| R-006 | Gallery | `import.meta.glob` + CSS columns (Tailwind) |
| R-007 | Deployment | GitHub Actions (`withastro/action`) → GitHub Pages |
| R-008 | SEO/OG | Per-page meta in BaseLayout.astro + `@astrojs/sitemap` |
| R-009 | Testing | Playwright E2E + Lighthouse CI |
