# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static investor pitch / marketing website for **AivisLab** — an AI-powered retail automation company. The site is a single-page application with scroll-reveal animations, a fixed progress bar, and multiple content sections.

**Output files:**
- `index.html` — all HTML markup
- `styles.css` — all styles (extracted from the original inline `<style>` block)

No build step, no bundler, no framework. Open `index.html` directly in a browser or serve with any static file server.

**Deployment:** `dist/` is a separate git repo (`git@github.com:linususadream/aivislab.git`) deployed directly as the site root. All image paths in `dist/index.html` must be relative to `dist/` (e.g., `bird-logo.png`, NOT `../bird-logo.png`).

**Nav height:** `nav` is `position:fixed; top:3px; height:60px` = **63px** total clearance. Any element at the top of a section must account for this offset.

## Running Locally

```powershell
# Quickest option — Python static server (if Python is available)
python -m http.server 8080

# Or use any static server (npx, live-server, etc.)
npx serve .
```

Then open `http://localhost:8080`.

## Architecture

### HTML (`index.html`)
Sections in order: `#hero`, `#problem`, `#solution`, `#products`, `#technology`, `#architecture`, `#patents`, `#market`, `#business-model`, `#go-to-market`, `#financials`, `#why-win`, `#team`, `#vision`, then `<footer>`.

The nav links map directly to these section IDs.

JavaScript (inline `<script>` at bottom of `index.html`):
- **Progress bar** — updates on `scroll` using `window.scrollY / docHeight`
- **Scroll reveal** — `IntersectionObserver` adds `.visible` to `.reveal` elements at 12% threshold; delay variants via `.reveal-delay-{1-4}`
- **KPI counter animation** — second `IntersectionObserver` on `.traction-kpis` triggers `animateCounter()` with eased cubic interpolation

### CSS (`styles.css`)
Uses CSS custom properties defined in `:root` — always use these variables rather than hardcoded colors:

| Variable | Value | Usage |
|---|---|---|
| `--ink` | `#0D0A1A` | Dark background, body text |
| `--deep` | `#2D1B69` | Deep purple, section backgrounds |
| `--mid` | `#6B46C1` | Primary purple, CTAs |
| `--light` | `#9F7AEA` | Accent purple, labels |
| `--pale` | `#EDE9FE` | Light purple tint, icon backgrounds |
| `--white` | `#FAFAF9` | Off-white background |
| `--gold` | `#F4C842` | Accent gold, highlights |

Typography stack: `--display` (Barlow Condensed, headings), `--sans` (DM Sans, body), `--mono` (DM Mono, labels/tags/prices).

Responsive breakpoints: `900px` (tablet) and `600px` (mobile) — defined at the bottom of `styles.css`.

## Design Conventions

- All section headings use `font-family: var(--display)` with `clamp()` for fluid sizing
- Section metadata labels use `var(--mono)` with `.section-label` class — now `display:flex; align-items:center; gap:0.75rem` with `bird-logo.png` inline before the label text
- `bird-logo.png` is light/purple — **invisible on white backgrounds**. Use `filter:none; opacity:1` for original colors. Requires `filter:brightness(0)` only if a dark silhouette is needed on white.
- Dark sections (`#solution`, `#architecture`, `#business-model`, `#traction`, `#vision`) use `background: var(--ink)` — override `.section-label` color to `var(--light)` for these
- Cards follow a hover pattern: `transform: translateY(-Npx)` + `box-shadow` or `border-color` change
- Inline SVG icons throughout — no icon library dependency

## Skills Available

The `frontend-design` skill is enabled (`.claude/settings.json`). Use `/frontend-design` when creating or redesigning UI components to get production-grade, aesthetically distinctive output that matches the existing dark/purple brand direction.

@learning.md
