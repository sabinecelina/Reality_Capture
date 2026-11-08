# Tasks: Modern Web Application Redesign

**Input**: Design documents from `/specs/001-modern-web-redesign/`
**Prerequisites**: plan.md ✅ spec.md ✅ research.md ✅ data-model.md ✅ contracts/ ✅ quickstart.md ✅
**Branch**: `001-modern-web-redesign`
**Generated**: 2026-03-16

**Tech Stack**: Astro 4.x · Tailwind CSS 3.x · TypeScript · Lucide Icons · Playwright · GitHub Pages

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no blocking dependencies)
- **[US1–US5]**: User story this task belongs to
- All file paths are relative to the repository root

---

## Phase 1: Setup

**Purpose**: Initialize the Astro project, install all dependencies, migrate static assets, and configure CI/CD. No user story work begins until this phase is complete.

- [x] T001 Initialize Astro 4 project at repository root with minimal template and strict TypeScript: creates `astro.config.mjs`, `package.json`, `tsconfig.json`
- [x] T002 [P] Install and configure Tailwind CSS: add `@astrojs/tailwind`, create `tailwind.config.mjs` with `darkMode: 'class'`, font and color extensions, and create `src/styles/globals.css` with Tailwind directives
- [x] T003 [P] Install remaining Astro integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `lucide-astro` — update `astro.config.mjs` with all integrations, `site`, `output: 'static'`, `trailingSlash: 'always'`, Shiki theme `agate`
- [x] T004 Copy all existing static assets into `public/`: `cp -r assets/ public/assets/`, copy `CNAME`, `robots.txt` into `public/`
- [x] T005 [P] Create GitHub Actions deploy workflow `.github/workflows/deploy.yml` using `withastro/action@v2` targeting `001-modern-web-redesign` branch, with `pages` and `id-token` write permissions
- [x] T006 [P] Initialize Playwright test framework: install `@playwright/test`, create `playwright.config.ts` with base URL `http://localhost:4321`, create `tests/e2e/` directory

**Checkpoint**: `npm run dev` starts without errors; `public/assets/` contains all existing media files

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core shared infrastructure — layouts, components, and content schemas — that ALL user story pages depend on. No user story can be implemented until this phase is complete.

**⚠️ CRITICAL**: Phases 3–7 cannot begin until this phase is complete.

- [x] T007 Create site configuration constants (AuthorProfile: name, email, github, linkedin, siteUrl, siteTitle, siteDescription) in `src/config.ts`
- [x] T008 Create Astro Content Collections Zod schemas: `blog` collection (title, date, categories, description?, draft?) and `projects` collection (title, teaser, thumbnail, order, description?) in `src/content/config.ts`
- [x] T009 Create `BaseLayout.astro` with: inline dark-mode script in `<head>` (reads `localStorage`, applies `dark` class before paint), viewport meta, `title`/`description`/`image` props, `<title>`, `<meta name="description">`, `<link rel="canonical">`, OG and Twitter Card meta tags, `<html lang="en">` in `src/layouts/BaseLayout.astro`
- [x] T010 [P] Create `ThemeToggle.astro`: button that toggles `dark` class on `<html>` and writes to `localStorage`; respects `prefers-color-scheme` when no stored value; accessible label in `src/components/ThemeToggle.astro`
- [x] T011 [P] Create `Footer.astro` with copyright line ("© 2026 Sabine Schleise") and Datenschutz link (`/datenschutz/`) in `src/components/Footer.astro`
- [x] T012 [P] Create `VideoEmbed.astro` reusable component: renders `<video autoplay muted loop>` with `src` and `type` props, responsive sizing, graceful fallback text in `src/components/VideoEmbed.astro`
- [x] T013 Create `Header.astro` composing: logo/site title linking to `/`, nav links (CV `/cv/`, Blog `/blog/`, Masterthesis `/thesis/`, Projects `/projects/`), social icon links (Lucide `Mail`, `Github`, `Linkedin` from `lucide-astro` sourced from `src/config.ts`), and `ThemeToggle` in `src/components/Header.astro`
- [x] T014 Create `PageLayout.astro` composing `BaseLayout` + `Header` + `<slot />` + `Footer` — accepts `title` and `description` props in `src/layouts/PageLayout.astro`
- [x] T015 Create `BlogPostLayout.astro` extending `PageLayout`: adds publication date badge formatted as "DD Month YYYY" and a ← Back to Blog link above the content slot in `src/layouts/BlogPostLayout.astro`

**Checkpoint**: `npm run dev` renders a page using `PageLayout` with working header, footer, theme toggle, and dark mode persistence

---

## Phase 3: User Story 1 — Compelling Home Page (Priority: P1) 🎯 MVP

**Goal**: A first-time visitor sees the author's name, role, intro text, and the 3DGS video hero above the fold on desktop, and the page is fully usable on mobile.

**Independent Test**: Load `/` at 1280px — author name, role, intro paragraph, the 3DGS video, and at least two nav pathways must be visible without scrolling. Load at 375px — no horizontal overflow.

- [x] T016 [P] [US1] Create `Hero.astro` component: author name heading ("Sabine Schleise"), role subtitle ("Media Computer Scientist · Reality Capture Researcher at SICK AG"), intro paragraph text, and CTA links to `/blog/` and `/projects/` — responsive two-column layout on desktop, stacked on mobile in `src/components/Hero.astro`
- [x] T017 [US1] Build home page `src/pages/index.astro` using `PageLayout`: integrate `Hero`, `VideoEmbed` (with `Sabine_Schleise_3DGS.mp4`), and the "What if we could truly capture reality?" split section (video left, descriptive text right) — Tailwind responsive classes, no horizontal overflow at 320px
- [x] T018 [US1] Verify US1 acceptance: hero name/role/text visible above fold at 1280×800, video autoplays muted on load, layout intact at 320px, all header nav links reachable, dark mode renders all content legibly

**Checkpoint ✅ MVP**: User Story 1 complete and independently testable — deploy preview to validate first impression

---

## Phase 4: User Story 2 — Blog Posts (Priority: P2)

**Goal**: Visitors can browse all 5 posts in reverse-chronological order on the blog index and read each post with syntax-highlighted code, embedded images, and videos rendering correctly on mobile.

**Independent Test**: Open `/blog/` — 5 posts listed newest-first with title, date, category. Open any post — code blocks syntax-highlighted, images and videos fit viewport at 375px.

- [x] T019 [US2] Migrate all 5 blog posts from `_posts/` to `src/content/blog/`: remove `layout:` frontmatter key, replace all `{{ '/assets/...' | prepend: site.baseurl }}` with bare `/assets/...` paths, convert Liquid `{% for %}` loops (frame gallery, metashape-split) to static HTML lists or component props
- [x] T020 [P] [US2] Create `BlogCard.astro` component: clickable post title, human-readable date (e.g. "19 December 2024"), category badge; link routes to `/blog/[slug]/` in `src/components/BlogCard.astro`
- [x] T021 [US2] Build blog index page `src/pages/blog/index.astro`: query `blog` Content Collection sorted by `date` descending, render `BlogCard` for each post using `PageLayout`, page title "Blog"
- [x] T022 [US2] Build dynamic blog post page `src/pages/blog/[...slug].astro`: `getStaticPaths` from `blog` Content Collection, render `entry.render()` body inside `BlogPostLayout`, pass `title` and `description` props
- [x] T023 [US2] Verify US2 acceptance: all 5 posts appear on `/blog/` newest-first, the photogrammetry tutorial post shows syntax-highlighted Python code block, embedded `<img>` and `<video>` elements scale within viewport at 375px, back link returns to `/blog/`

**Checkpoint**: User Story 2 complete — blog fully functional without depending on any other story

---

## Phase 5: User Story 3 — Projects Portfolio (Priority: P3)

**Goal**: Visitors can view a visual grid of all 4 projects with thumbnails, titles, and teasers, and navigate to each project's full detail page with content and a back link.

**Independent Test**: Open `/projects/` — 4 project cards with thumbnail, title, teaser, sorted by `order`. Click "Gargoyles" — full project content and ← Back to Projects link present.

- [x] T024 [US3] Migrate all 4 project pages from `_projects/` to `src/content/projects/`: remove `layout:` frontmatter key, fix inline asset paths with bare `/assets/...` URLs
- [x] T025 [P] [US3] Create `ProjectCard.astro`: thumbnail `<img>`, project title, teaser paragraph, "→ Read more" link to `/projects/[slug]/` in `src/components/ProjectCard.astro`
- [x] T026 [US3] Build projects index page `src/pages/projects/index.astro`: query `projects` Content Collection sorted by `order` ascending, render `ProjectCard` grid (2-column on desktop, 1-column on mobile) using `PageLayout`
- [x] T027 [US3] Build dynamic project detail page `src/pages/projects/[...slug].astro`: `getStaticPaths` from `projects` Content Collection, render `entry.render()` body inside `PageLayout`, include ← Back to Projects link at top
- [x] T028 [US3] Verify US3 acceptance: all 4 projects show thumbnail + title + teaser on `/projects/`, each detail page renders full content with images, external links (game URL, video URL) are clickable, back link returns to `/projects/`

**Checkpoint**: User Story 3 complete — projects section fully functional and independently testable

---

## Phase 6: User Story 4 — CV and Academic Pages (Priority: P4)

**Goal**: Visitors can review the full CV with clearly separated Skills, Awards, Publications, Experience, and Education sections plus a PDF download link, and access the master and bachelor thesis pages.

**Independent Test**: Open `/cv/` — all 5 sections visible with clear visual hierarchy, PDF download link present and points to `/assets/CV.pdf`, layout intact at 320px.

- [x] T029 [P] [US4] Build `src/pages/cv.astro` from `CV.md` content using `PageLayout`: structured sections (Skills, Awards, Publications, Experience, Education) with semantic HTML (`<section>`, `<h3>`, etc.), PDF download link (`/assets/CV.pdf`), responsive layout
- [x] T030 [P] [US4] Build `src/pages/thesis.astro` from `thesis.md` content: master thesis abstract, "Highlights" section with `VideoEmbed` components for each video (`training-in-ngp.mp4`, `matthias-avatar.mp4`, `hand-nerf.mp4`), award mention with link, button links to thesis website and paper
- [x] T031 [P] [US4] Build `src/pages/bachelor.astro` from `bachelor.md` content: heading, abstract, introduction, objective, approach, results sections using `PageLayout`
- [x] T032 [US4] Verify US4 acceptance: `/cv/` shows all 5 sections with Erwin-Sick-Award and 2 publication links; PDF download link present; `/thesis/` renders videos; `/bachelor/` renders content; all pages readable at 320px without horizontal scroll

**Checkpoint**: User Story 4 complete — all professional/academic pages independently accessible

---

## Phase 7: User Story 5 — Mobile Navigation (Priority: P5)

**Goal**: On mobile viewports, a hamburger button is visible, tapping it reveals the nav menu with all section links, and tapping a link closes the menu and navigates.

**Independent Test**: At 375px viewport width — hamburger icon visible, tap opens nav overlay with CV/Blog/Masterthesis/Projects links, tap Blog closes menu and loads `/blog/`.

- [x] T033 [US5] Enhance `Header.astro` with mobile hamburger button: visible below `md` breakpoint (Tailwind `md:hidden`), hidden on desktop; button has `aria-expanded`, `aria-controls` attributes; nav menu toggles via a `data-open` class in `src/components/Header.astro`
- [x] T034 [US5] Add client-side `<script>` to `Header.astro`: toggle `data-open` on hamburger click (updating `aria-expanded`), close menu when any nav link is tapped; ensure navigation is still keyboard-accessible when JS is disabled (`<noscript>` fallback: menu always visible)
- [x] T035 [US5] Verify US5 acceptance: at 375px hamburger button visible, tapping opens full-width nav overlay, all 4 section links present, tapping a link closes menu and navigates, keyboard navigation and screen reader accessible

**Checkpoint**: User Story 5 complete — full mobile navigation functional on all pages

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Remaining pages (gallery, privacy, 404), legacy URL redirects, Playwright E2E tests, Lighthouse CI gates, accessibility audit, and final build validation.

- [x] T036 [P] Build `src/pages/gallery.astro`: use `import.meta.glob('/public/assets/photography/**/*.{jpg,JPG,jpeg,png}')` to enumerate images, render masonry grid with Tailwind `columns-3 md:columns-2 sm:columns-1`, using `PageLayout`
- [x] T037 [P] Build `src/pages/datenschutz.astro` from `datenschutz.md` content using `PageLayout`, page title "Datenschutz"
- [x] T038 [P] Build `src/pages/404.astro` with friendly "Page not found" message, brief explanation, and prominent ← Go Home button linking to `/`, using `PageLayout`
- [x] T039 [P] Create 5 legacy redirect stub pages for old `/general/YYYY/MM/DD/slug/` blog post URLs: static `.astro` files at each path containing `<meta http-equiv="refresh">` and `<link rel="canonical">` pointing to corresponding `/blog/[slug]/` URL (see `contracts/url-structure.md`) in `src/pages/general/`
- [x] T040 [P] Write Playwright E2E test for US1 (home): hero elements visible at 1280/375px, video element present with `autoplay` attribute, nav links reachable in `tests/e2e/home.spec.ts`
- [x] T041 [P] Write Playwright E2E test for US2 (blog): 5 posts listed on `/blog/`, posts sorted newest-first, a post renders `<pre><code>` block with syntax class, image/video elements fit within viewport width at 375px in `tests/e2e/blog.spec.ts`
- [x] T042 [P] Write Playwright E2E test for US3 (projects): 4 project cards on `/projects/`, each with `<img>` thumbnail; clicking gargoyles loads detail page with content; back link navigates to `/projects/` in `tests/e2e/projects.spec.ts`
- [x] T043 [P] Write Playwright E2E test for US4 (CV): `/cv/` contains "SKILLS", "AWARDS", "EXPERIENCE", "EDUCATION" headings; PDF download anchor present; `/thesis/` contains `<video>` elements in `tests/e2e/cv.spec.ts`
- [x] T044 [P] Write Playwright E2E test for US5 (mobile nav): at 375px hamburger button visible; click reveals nav menu; nav overlay includes all 4 section links; clicking a link closes menu in `tests/e2e/navigation.spec.ts`
- [x] T045 Configure Lighthouse CI: create `.lighthouserc.mjs` with assertion thresholds (performance ≥0.9, accessibility ≥0.9, best-practices ≥0.9, seo ≥0.9); add `lhci autorun` step to `.github/workflows/deploy.yml`
- [x] T046 Run WCAG 2.1 AA accessibility audit using `@axe-core/playwright` on all page types (home, blog, projects, CV); fix any color contrast violations in `src/styles/globals.css` and component styles
- [x] T047 Run `npm run build` and validate: all pages compile without errors, `dist/sitemap-index.xml` generated, no broken `/assets/` references in output HTML, deploy preview loads on GitHub Pages

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phase 2 (Foundational)**: Requires Phase 1 ✅ — **BLOCKS Phases 3–7**
- **Phases 3–7 (User Stories)**: All require Phase 2 ✅ — can proceed in priority order or in parallel
- **Phase 8 (Polish)**: Requires Phases 3–7 or desired stories ✅

### User Story Dependencies

| Story | Depends On | Can Parallelize With |
|-------|-----------|---------------------|
| US1 Home (P1) | Phase 2 | US2, US3, US4, US5 |
| US2 Blog (P2) | Phase 2 | US1, US3, US4, US5 |
| US3 Projects (P3) | Phase 2 | US1, US2, US4, US5 |
| US4 CV/Thesis (P4) | Phase 2 | US1, US2, US3, US5 |
| US5 Mobile Nav (P5) | Phase 2 (Header.astro exists) | US1, US2, US3, US4 |

### Within Each User Story

- Migration tasks (T019, T024) before content collection queries
- Components (BlogCard, ProjectCard) can be created in parallel with migrations
- Index pages before detail pages (detail pages use same `getStaticPaths` pattern)
- Story complete before running acceptance verification task

---

## Parallel Examples

### Phase 2 Foundational — parallel start

```
Start together (different files, no deps):
  T010 — src/components/ThemeToggle.astro
  T011 — src/components/Footer.astro
  T012 — src/components/VideoEmbed.astro

Then (after T010 available):
  T013 — src/components/Header.astro  (uses ThemeToggle)

Then (after T013):
  T014 — src/layouts/PageLayout.astro  (uses Header + Footer)
  T015 — src/layouts/BlogPostLayout.astro  (extends PageLayout)
```

### Phase 4 (US2 Blog) — parallel start

```
Start together:
  T019 — migrate 5 blog posts (src/content/blog/)
  T020 — BlogCard.astro component (src/components/)

Then (after both T019 + T020):
  T021 — blog/index.astro

Then (after T021):
  T022 — blog/[...slug].astro
```

### Phase 6 (US4 CV) — fully parallel

```
Start all three simultaneously (separate files):
  T029 — src/pages/cv.astro
  T030 — src/pages/thesis.astro
  T031 — src/pages/bachelor.astro
```

### Phase 8 Polish — parallel batch

```
Start together (all independent):
  T036 — gallery.astro
  T037 — datenschutz.astro
  T038 — 404.astro
  T039 — legacy redirect stubs
  T040–T044 — all 5 Playwright test files
  T045 — Lighthouse CI config
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T006)
2. Complete Phase 2: Foundational (T007–T015)
3. Complete Phase 3: User Story 1 (T016–T018)
4. **STOP AND VALIDATE**: Is the home page compelling? Does the hero work on mobile?
5. Deploy preview to GitHub Pages for feedback

### Incremental Delivery

| Increment | Phases | What's Deliverable |
|-----------|--------|--------------------|
| MVP | 1 + 2 + 3 | Full home page with hero video, nav, dark mode |
| v0.2 | + 4 | Blog with all 5 posts, syntax highlighting |
| v0.3 | + 5 | Projects portfolio with 4 project detail pages |
| v0.4 | + 6 | CV + Thesis + Bachelor pages |
| v0.5 | + 7 | Full mobile navigation |
| v1.0 | + 8 | Gallery, 404, legacy redirects, tests, Lighthouse gates |

### Parallel Team Strategy (if multiple contributors)

Once Phase 2 is complete:
- **Person A**: US1 (home) → US5 (mobile nav polish)
- **Person B**: US2 (blog) → US4 (CV/thesis)
- **Person C**: US3 (projects) → Phase 8 (gallery, tests)

---

## Notes

- All `[P]` tasks operate on different files — safe to run in parallel
- `[US1]`–`[US5]` labels map each task to its spec user story for traceability
- Verify each story passes its **Independent Test** before marking its phase complete
- Commit after each logical task group (at minimum after each verification task)
- The `data-model.md` Zod schemas (T008) are the single source of truth for all content frontmatter fields
- Asset paths under `/assets/` are **immutable** (contracts/url-structure.md) — never rename or move files in `public/assets/`
- T009 dark mode inline script must be `is:inline` in Astro to prevent build-time stripping
