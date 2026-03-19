# CLAUDE.md — WestHash Landing Page

## Project Overview

This is the **WestHash landing page** — a React SPA for a Web3/Cloud software engineering firm. The site is hosted at [westhash.io](https://www.westhash.io/) and deployed with support for subdirectory and IPFS hosting.

**Stack:** React 19, React Router 7, Vite 7, JavaScript/JSX, CSS (no preprocessor)

---

## Commands

```bash
# Install dependencies
yarn install

# Start dev server (http://localhost:5173)
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Lint
yarn lint
```

**Package manager:** Yarn 4 (use `yarn`, not `npm`)

---

## Repository Structure

```
src/
  App.jsx              # Root component — scroll state, layout orchestration
  App.css              # All custom styles (~872 lines, CSS variables, animations)
  index.css            # Global reset and base styles
  main.jsx             # React entry, BrowserRouter, route definitions
  components/
    Header.jsx         # Sticky header with scroll-driven font/blur effects
    Hero.jsx           # Full-screen hero section
    Features.jsx       # "Why Choose Us" — 4 feature tiles
    Services.jsx       # Services grid (6 items)
    Products.jsx       # ZAICO and Overlander products
    Collaborations.jsx # Active collaborations
    About.jsx          # About section
    Contact.jsx        # Get in touch / contact section
    Footer.jsx         # Footer with nav links
    ScrollToTop.jsx    # Scrolls to top on route change
    ScrollToSection.jsx# Scrolls to hash anchor after navigation
    CTA.jsx            # (Unused placeholder)
    Experience.jsx     # (Unused placeholder)
    Testimonials.jsx   # (Unused placeholder)
  assets/features/     # SVG icons (performance, reliability, scalability, security)
  hooks/
    useMousePosition.js # Mouse tracking hook for interactive effects
  pages/
    Privacy.jsx        # /privacy route
    Terms.jsx          # /terms route
    Cookies.jsx        # /cookies route
public/
  favicon.svg, favicon-*.png  # Favicons for all platforms
  og-image.png, og-image.svg  # Social sharing images
  bimi.svg                    # BIMI email branding
  manifest.webmanifest        # PWA manifest
  robots.txt, sitemap.xml     # SEO
  .well-known/mta-sts.txt     # Mail security policy
index.html            # HTML entry — rich SEO metadata, JSON-LD schema
vite.config.js        # base: "./" for relative-path deployments
eslint.config.js      # ESLint 9 flat config
```

---

## Routes

| Path | Component |
|------|-----------|
| `/` | `App.jsx` (full one-page site) |
| `/privacy` | `Privacy.jsx` |
| `/terms` | `Terms.jsx` |
| `/cookies` | `Cookies.jsx` |

The basename is dynamically computed in `main.jsx` to support subdirectory deployments (e.g. IPFS gateways).

---

## Key Conventions

### CSS & Styling

- **No CSS preprocessor** — plain CSS only.
- **CSS variables** defined in `:root` in `index.css`:
  - `--brand` (`#646cff`), `--bg`, `--text`, `--text-dim`, `--surface`, `--border`, `--hero-bg`
- **Dark mode primary**, light mode via `@media (prefers-color-scheme: light)`.
- **Responsive typography** uses `clamp()` throughout.
- **Animation pattern:** Add `animate-on-scroll` class to elements; `App.jsx` uses IntersectionObserver to add the `visible` class. Use `.animate-delay-1` through `.animate-delay-6` for staggered effects.
- **Breakpoint:** `768px` for mobile layout.

### Components

- All components are **functional with hooks** — no class components.
- **No Context API or state management library** — layout state lives in `App.jsx` and is prop-drilled.
- Dynamic inline styles (e.g. `fontSize`, `backdropFilter`) are passed as props to `Header.jsx`.
- **Unused components** (`CTA.jsx`, `Experience.jsx`, `Testimonials.jsx`) are scaffolds — do not delete them.

### Assets

- **SVG icons** are imported as ES module URLs (`import icon from './assets/...'`).
- All `public/` asset paths use `./` (relative) for IPFS/subfolder compatibility — do not use absolute `/` paths.
- The Vite config sets `base: "./"` for the same reason.

### Linting

- ESLint 9 flat config (`eslint.config.js`).
- `no-unused-vars` is relaxed: uppercase identifiers and `_`-prefixed vars are allowed (React component convention).
- Run `yarn lint` before committing.
- No Prettier — code style is not automatically enforced.

### SEO / Metadata

- All SEO lives in `index.html`: OpenGraph, Twitter cards, Schema.org JSON-LD (Organization, WebSite, WebPage, SoftwareApplication).
- Canonical URL: `https://www.westhash.io/`
- **Do not remove or break the JSON-LD structured data blocks** — they are production SEO.

---

## No Tests

There is no test framework configured. If adding tests, use **Vitest** (already part of the Vite ecosystem).

---

## Git & Branch Workflow

- Primary branch: `master` (upstream) / `main` (remote default)
- Feature work is done on `claude/...` branches per session.
- Commits should have clear, descriptive messages.
- GPG signing is configured — commits are signed automatically.

---

## Deployment Notes

- `vite build` outputs to `dist/`.
- The `base: "./"` Vite option ensures all asset URLs are relative — required for IPFS and subfolder deploys.
- `robots.txt` disallows `/dist/` — never serve the build directory directly as a route.
- The PWA manifest and multiple favicon sizes are already wired up; do not remove them.

---

## What to Avoid

- Do not switch to `HashRouter` — the project uses `BrowserRouter` with dynamic basename.
- Do not add absolute asset paths (`/image.png`) — use relative paths or Vite imports.
- Do not introduce a CSS preprocessor or CSS-in-JS library without discussion.
- Do not remove placeholder components (`CTA.jsx`, `Experience.jsx`, `Testimonials.jsx`).
- Do not add a state management library (Redux, Zustand, etc.) for this simple site.
