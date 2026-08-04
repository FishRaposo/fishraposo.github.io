# AGENTS.md — fishraposo.github.io

**Static personal portfolio site.** Vanilla HTML/CSS/JS — no build step, no bundler, no framework, no `package.json`.

## What This Repo Is

The live portfolio at fishraposo.github.io. Projects are shown **build in public** with an honest status (**Shipped / Building / Designed**) — a Designed project appears with its status and a link to its plan, never dressed up as finished. Every live public GitHub repo should be listed on `projects.html` and have a static `projects/<repo>.html` page.

## Positioning & Hierarchy

This site is the "polished proof" layer of the public-surface chain:

```
business-portfolio (private north star — wins on conflict) → career/ (identity & voice canon) → fishraposo.github.io (polished proof) → FishRaposo/README (public face)
```

Positioning target: the **personal expert brand** — AI reliability, systems engineering, and serious AI-assisted development. Identity constants: operator statement "I build the systems that work while you don't", thesis "On AI, sound money, and owning your own life", Build · Store · Govern, and the Expat Money anchor as shipped, cited proof.

The surface spec lives in the workspace's private business-portfolio repo — read it there before any site rebuild, and never copy private strategy details into this public repo.

**Pending build step:** rebuilding the site's content to the personal-expert-brand positioning is a separate open task. The formerly planned "Big 6" showcase repos are retired and will not be built — the site still carries "Big 6" references (`index.html`, `projects.html`, `llms.txt`, `projects/fishraposo.html`, `styles.css`) that the rebuild must remove; do not add new links or claims that those repos are coming.

## Commands

```bash
npx serve .              # local dev server
# or: open index.html    # works directly in browser (file://) — no dependencies
```

No install step. No test/lint/typecheck/format commands exist. There are no dependencies to install.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) uploads the entire repo root as-is to GitHub Pages. No build step. No env vars needed.

## Page structure

- `index.html` — Hero with lead + thesis + proof highlights + CTAs, open source repo cards, selected projects
- `projects.html` — Complete public repo catalog with tag filter
- `projects/*.html` — One static detail page per public GitHub repo
- `llms.txt` — LLM-readable manifest of the site
- `main.js` — ES5 IIFE, tag filter logic, header/footer template strings

## Adding a Project

Both `index.html` and `projects.html` have commented-out template blocks inside their `.projects-grid`. Uncomment and fill in fields.

On `projects.html` require a `data-tags="rag agents"` attribute on each `.project-card` for the filter to work.

Available tags: `rag`, `agents`, `llm`, `semantic-search`, `automation`, `data-pipeline`, `evaluation`, `api`, `saas`, `regulatory-ai`, `compliance`, `multi-service`, `agentic`, `algorithms`, `frontend`.

## Code Style

- **CSS**: Keep styles in `styles.css`. Colors are hardcoded hex (e.g. `#0a1628`, `#f97316`). No preprocessor, no CSS-in-JS, no custom properties in use.
- **JS**: IIFE wrapper, `var`, `function` keyword, no arrow functions (`=>`). Stay in ES5 to remain transpile-free.
- **HTML**: Semantic elements (`<section>`, `<nav>`, `<article>`), inline SVG favicon (lightning bolt data URI).
- **No external dependencies** — the site intentionally has zero runtime dependencies.

## Git Sync Rule

This repo is the live portfolio. If it's not synced, the live site is outdated.

**At the START of every session:**
```
git pull --rebase origin main
```

**At the END of every session (before finishing):**
```
git status
git pull --rebase origin main
git add -A
git commit -m "[brief description of what changed]"
git push
```

Never leave portfolio updates uncommitted.

## Git

- Default branch: `main`
- `.gitignore` lists `node_modules/`, lockfiles, `dist/`, `.env` — defensive, nothing currently generates these.
- Footer copyright year is `2026`.
