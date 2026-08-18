# KYC & Sanctions Compliance Guidelines — interactive site

Internal, confidential reference site for Simpson Marine's KYC / Sanctions Compliance procedure. Built with **Vite + React + TypeScript**. Migrated from a single self-contained `index.html` file (kept at the repository root, one level up, for reference).

## Requirements

- Node.js 18+
- npm

## Setup

```bash
npm install
```

Copy the password hash template and set the real site password hash (see [Access password](#access-password) below):

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

Opens the site locally with hot reload. You'll be asked for the access password on first load (see below).

## Build

```bash
npm run build
```

Type-checks and produces an optimized production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally, for a final check before deploying.

## Lint & format

```bash
npm run lint    # oxlint
npm run format  # prettier --write .
```

## Access password

The site is gated by a single shared password, checked entirely client-side (there is no backend). The password itself is never committed to the repository — only its SHA-256 hash, via the `VITE_SITE_PASSWORD_HASH` environment variable (`.env`, git-ignored; `.env.example` documents the shape).

To set or change the password:

```bash
node -e "console.log(require('crypto').createHash('sha256').update('your-new-password').digest('hex'))"
```

Put the resulting hash in `.env` as `VITE_SITE_PASSWORD_HASH=...`, then rebuild/redeploy. Once entered correctly, the password is remembered in the browser (`localStorage`) for 90 days, so it isn't asked again on every visit from the same device/browser. A "Log out" link in the sidebar clears that and re-locks the site.

This is a deterrent, not a strong access control: since the check runs in the browser, a technically motivated visitor could inspect the published JS bundle. It keeps out casual/accidental access and search engines, matching the "one shared password" requirement — it does not replace real per-user authentication.

## Deploying

The site is a static build (`dist/`) — deployable to Netlify, Vercel, GitHub Pages, or any static host. `netlify.toml` and `vercel.json` are included with the build command, output directory, and baseline security headers (CSP restricted to same-origin, no external calls — matching the confidentiality requirement of the original document). Routing uses `HashRouter`, so no server-side rewrite rules are needed on any host.

## Project structure

```
src/
  data/content.ts       All site copy (English), typed against src/types/content.ts
  types/content.ts       TypeScript shape of the content
  state/AppState.tsx     Shared app state (role filter, wizard, calculator, toolkit language)
  lib/                   Pure logic: calculator.ts, wizard.ts, search.ts, clipboard.ts, hash.ts, nav.ts
  components/            Shared UI: Layout, Sidebar, Topbar, SearchBox, Icon, Callout, RoleBadge, RoleBlock, RaciTable, PasswordGate
  pages/                 One component per site page/tool
  styles/                Plain CSS, split by concern (tokens, base, layout, components, responsive, print)
  assets/fonts/           Self-hosted font (extracted from the original inline base64)
```

## Content changes

All page text lives in `src/data/content.ts`. It's a faithful, typed port of the original `KYC-Guidelines-EN.md` — edit the relevant field there rather than in a page component, and TypeScript will catch shape mistakes (missing fields, wrong types) at build time.
