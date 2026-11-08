# Data Model: Modern Web Application Redesign

**Phase**: 1 — Design
**Branch**: `001-modern-web-redesign`
**Date**: 2026-03-16

All entities are file-based (Markdown frontmatter + static assets). No database. Type definitions map to Astro Content Collections Zod schemas (`src/content/config.ts`).

---

## Entity: BlogPost

**Source**: `src/content/blog/*.md`
**URL**: `/blog/[slug]/`
**Purpose**: A technical article authored by Sabine on topics in Reality Capture, computer vision, 3D Gaussian Splatting, NeRF, photogrammetry, etc.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | ✅ | Display title of the post |
| `date` | `Date` | ✅ | Publication date; used for reverse-chrono ordering |
| `categories` | `string[]` | ✅ | Topic categories (e.g., `["general"]`); used for grouping on blog index |
| `description` | `string` | ❌ | Short teaser for meta tags and blog index preview; auto-derived from first paragraph if absent |
| `draft` | `boolean` | ❌ | If `true`, post is excluded from production build (default: `false`) |

### Slug / ID

Derived from filename: `YYYY-MM-DD-post-title.md` → slug `YYYY-MM-DD-post-title` → URL `/blog/YYYY-MM-DD-post-title/`.

### Relationships

- Referenced by: `BlogCard` component (title, date, categories, slug)
- Referenced by: `BlogPostLayout.astro` (full body rendering)
- References: Assets in `public/assets/` via absolute paths (e.g., `/assets/2024-12-19/image.jpg`)

### Existing Instances

| Filename | Title |
|----------|-------|
| `2024-12-19-easy-introduction-nerf.md` | An easy introduction to NeRF |
| `2025-03-01-cutting-edge-3dgs.md` | Cutting-edge 3D Gaussian Splatting |
| `2025-06-01-difference-gs-nerf.md` | Difference between GS and NeRF |
| `2025-06-07-my-journey.md` | My journey in Reality Capture |
| `2025-07-23-gentle-introduction-to-sfm.md` | A beginner-friendly photogrammetry tutorial (German) |

### Validation Rules

- `date` must be a valid ISO date
- `title` must be non-empty
- `categories` must be a non-empty array with at least one entry

---

## Entity: Project

**Source**: `src/content/projects/*.md`
**URL**: `/projects/[slug]/`
**Purpose**: A portfolio item showcasing a specific technical project (photogrammetry, 3D reconstruction, creative technology, etc.)

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | ✅ | Display name of the project |
| `teaser` | `string` | ✅ | One-sentence summary shown on the projects listing page |
| `thumbnail` | `string` | ✅ | Absolute path to thumbnail image (e.g., `/assets/projects/gargoyles.png`) |
| `order` | `number` | ✅ | Integer display order on the Projects page (ascending) |
| `description` | `string` | ❌ | Longer description for `<meta name="description">` on project detail page |

### Slug / ID

Derived from filename: `gargoyles.md` → slug `gargoyles` → URL `/projects/gargoyles/`.

### Relationships

- Referenced by: `ProjectCard` component (thumbnail, title, teaser, slug)
- Referenced by: project detail page via `[...slug].astro`
- References: Assets in `public/assets/projects/` (thumbnails) and inline images in body

### Existing Instances

| Filename | Title | Order |
|----------|-------|-------|
| `gargoyles.md` | Coding Da Vinci (Gargoyles Tower Defense) | 1 |
| `digital_landscape.md` | Forest Reimagined | 2 |
| `bachelorthesis.md` | Bachelor Thesis: Camera Calibration | 3 |
| `photography.md` | Photography Gallery | 99 |

### Validation Rules

- `order` must be a positive integer
- `thumbnail` must be a non-empty string matching pattern `/assets/...`
- `teaser` must be ≤ 200 characters (for layout consistency)

---

## Entity: Page (static)

**Source**: `src/pages/*.astro`
**Purpose**: Static, non-collection pages with fixed content.

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero + intro; 3DGS video; call-to-action links |
| CV | `/cv/` | Skills, awards, publications, experience, education |
| Thesis | `/thesis/` | Master thesis highlight; embedded videos; abstract |
| Bachelor | `/bachelor/` | Bachelor thesis detail page |
| Gallery | `/gallery/` | Photography masonry grid from `public/assets/photography/` |
| Datenschutz | `/datenschutz/` | German privacy policy |
| 404 | `/404.html` | Custom not-found page |

---

## Entity: NavigationItem

**Source**: Defined statically in `Header.astro` (no content collection needed)
**Purpose**: A labeled hyperlink in the global header navigation.

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Display text (e.g., "Blog", "Projects", "CV") |
| `href` | `string` | Absolute path (e.g., `/blog/`) |

### Instances

| Label | href |
|-------|------|
| CV | `/cv/` |
| Blog | `/blog/` |
| Masterthesis | `/thesis/` |
| Projects | `/projects/` |

---

## Entity: AuthorProfile

**Source**: Defined as a constant in `src/config.ts` (or Astro `site` equivalent); derived from the current `_config.yml`.
**Purpose**: Author contact details consumed by `Header.astro` (social links) and SEO meta tags.

| Field | Value |
|-------|-------|
| `fullname` | Sabine Schleise |
| `email` | sabine.schleise@icloud.com |
| `github` | sabinecelina |
| `linkedin` | Sabine Schleise |
| `siteTitle` | Reality Capture |
| `siteDescription` | Homepage Sabine Schleise |
| `siteUrl` | https://www.sabineschleise.com |

---

## Entity: Asset (static files)

**Source**: `public/assets/**`
**Purpose**: All static media files (images, videos, PDFs) referenced by pages, posts, and projects.
**Handled by**: Astro's static file pass-through — files in `public/` are copied verbatim to `dist/` at build time, preserving all paths.

### Asset directories

| Path | Contents |
|------|----------|
| `/assets/img/main.jpg` | Author profile photo |
| `/assets/photography/` | Gallery images (17+ files, jpg/JPG/png) |
| `/assets/projects/` | Project thumbnails (PNG) |
| `/assets/media/` | NeRF/3DGS videos (mp4, gif) |
| `/assets/oscar/` | Photogrammetry tutorial frame extracts |
| `/assets/bachelorthesis/` | Bachelor thesis diagrams/images |
| `/assets/2024-12-19/` | Blog post images |
| `/assets/2024-12-20/` | Blog post images |
| `/assets/Sabine_Schleise_3DGS.mp4` | Home page hero video |
| `/assets/award_sick.jpg` | Award photograph |
| `/assets/CV.pdf` | Downloadable CV |

---

## State Transitions

The site has no interactive state beyond two cases:

### Theme State

```
Initial load
  └─ localStorage has 'dark'  → class='dark' applied before paint
  └─ localStorage has 'light' → class='' (no dark class)
  └─ localStorage empty + system dark → class='dark' applied
  └─ localStorage empty + system light → class='' applied

User toggles ThemeToggle
  └─ class='dark' removed → localStorage set to 'light'
  └─ class='dark' added   → localStorage set to 'dark'
```

### Mobile Navigation State

```
Header rendered
  └─ hamburger hidden on md+ breakpoint (Tailwind md:hidden)
  └─ nav menu hidden on mobile by default

User taps hamburger icon
  └─ nav menu becomes visible (toggle aria-expanded + show/hide class)

User taps nav link
  └─ nav menu hides + page navigates
```
