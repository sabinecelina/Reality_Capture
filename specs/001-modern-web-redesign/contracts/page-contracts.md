# Contract: Page Contracts

**Phase**: 1 — Design
**Branch**: `001-modern-web-redesign`
**Date**: 2026-03-16

Each page contract defines the required rendered output of a page — the interface between the implementation and the acceptance tests (spec User Stories). These contracts are technology-agnostic and measurable.

---

## Page Contract: Home (`/`)

**Corresponding User Story**: US-1 (Compelling First Impression)

### Required visible elements (on initial load, no scrolling, ≥1280px width)

| Element | Requirement |
|---------|------------|
| Author name | Visible: "Sabine Schleise" |
| Professional role | Visible: researcher in Reality Capture / media computer scientist |
| Short intro description | At least one paragraph of intro text visible |
| Hero visual | A video or image is visible and rendered (video autoplays muted) |
| Navigation | Links to Blog, Projects, CV, Thesis are reachable via header |
| Social links | Email, GitHub, LinkedIn icons are visible and link correctly |

### Required elements (any scroll depth)

| Element | Requirement |
|---------|------------|
| Theme toggle | A visible button enabling dark/light mode switch |
| "What if we could truly capture reality?" section | Present somewhere on the page |
| Footer | Copyright text and Datenschutz link |

### Behavior

| Behavior | Expected |
|----------|----------|
| Hero video autoplay | Starts playing on page load (muted, loop) without user interaction |
| Hero video fallback | If autoplay is blocked, a static poster image or graceful video placeholder is shown |
| Dark mode | All text and images remain legible in both light and dark mode |

---

## Page Contract: Blog Index (`/blog/`)

**Corresponding User Story**: US-2 (Reading Blog Posts)

### Required elements

| Element | Requirement |
|---------|------------|
| Post list | All published posts are listed (≥ 5) |
| Post title | Each post shows its title as a clickable link |
| Post date | Each post shows publication date in human-readable format (e.g., "23 July 2025") |
| Category label | Each post shows at least one category tag |
| Sort order | Posts listed most-recent-first |
| Navigation | Global header present with all nav links |

---

## Page Contract: Blog Post (`/blog/[slug]/`)

**Corresponding User Story**: US-2

### Required elements

| Element | Requirement |
|---------|------------|
| Title heading | `<h1>` with post title |
| Publication date | Rendered near title |
| Body text | Full Markdown content rendered as HTML |
| Code blocks | Syntax-highlighted; distinguishable from prose text |
| Images | Rendered inline; scale to viewport on mobile |
| Embedded videos | Rendered with `autoplay muted loop`; scale to viewport on mobile |
| Back link | A navigation path back to `/blog/` |
| Social links | Accessible via header |

---

## Page Contract: Projects Index (`/projects/`)

**Corresponding User Story**: US-3 (Exploring Projects)

### Required elements

| Element | Requirement |
|---------|------------|
| Project cards | All projects shown (≥ 4) |
| Thumbnail | Each card shows a thumbnail image |
| Title | Each card shows the project title |
| Teaser | Each card shows a one-sentence description |
| Link | Each card links to the project detail page |
| Sort order | Projects rendered in ascending `order` field value |

---

## Page Contract: Project Detail (`/projects/[slug]/`)

**Corresponding User Story**: US-3

### Required elements

| Element | Requirement |
|---------|------------|
| Project title | Visible as heading |
| Full content | All Markdown body content rendered (text, images, lists) |
| Back navigation | A way to return to `/projects/` |
| External links | Any "play the game", "watch video" links rendered and clickable |

---

## Page Contract: CV (`/cv/`)

**Corresponding User Story**: US-4 (CV Review)

### Required sections

| Section | Requirement |
|---------|------------|
| Skills | Visible skills list |
| Awards | Erwin-Sick-Award entry visible |
| Publications | At least 2 publication links (Embedded World 2023, WSCG 2024) |
| Experience | At least 1 entry (SICK AG) with title, dates, description |
| Education | At least 3 entries (Hochschule Furtwangen MS + BS, KIT) |
| PDF download | A visible "Download as PDF" link pointing to `/assets/CV.pdf` |

### Behavior

| Behavior | Expected |
|----------|----------|
| Scannability | Sections separated by clear visual hierarchy (headings, dividers, or cards) |
| Mobile | All sections readable at 320px width without horizontal scroll |

---

## Page Contract: Gallery (`/gallery/`)

**Corresponding User Story**: US-1 (general site quality)

### Required elements

| Element | Requirement |
|---------|------------|
| Image grid | All images from `/assets/photography/` displayed (≥ 10 images) |
| Layout | Masonry or grid layout; no images overflow container |
| Mobile | At least 1 column on mobile (320px); expands to 2+ on tablet/desktop |

---

## Page Contract: 404 (`/404.html`)

### Required elements

| Element | Requirement |
|---------|------------|
| Message | A friendly "page not found" message (not a default browser error) |
| Home link | A visible link back to `/` |
| Navigation | Global header still accessible |

---

## Cross-Page Invariants

These apply to **every page** in the site:

| Invariant | Requirement |
|-----------|------------|
| Navigation header | Present on every page; all nav links functional |
| Social links | Email, GitHub, LinkedIn accessible on every page (header or footer) |
| Theme toggle | Available on every page; persists selection across navigation |
| Viewport | No horizontal overflow at 320px width |
| Contrast | All text meets WCAG 2.1 AA color contrast ratio (≥ 4.5:1 for body text) |
| Page title | Each page has a distinct, descriptive `<title>` tag |
| Meta description | Each page has a `<meta name="description">` tag |
| Canonical | Each page has a `<link rel="canonical">` tag |
| Lang attribute | `<html lang="en">` on all pages |
