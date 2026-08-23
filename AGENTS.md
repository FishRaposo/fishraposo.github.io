# AGENTS.md — fishraposo.github.io

**Static personal portfolio site.** Vanilla HTML/CSS/JS — no build step, no bundler, no framework, no `package.json`.

## What This Repo Is

The live portfolio at fishraposo.github.io. Projects are shown **build in public** with an honest status (**Shipped / Building / Designed**) — a Designed project appears with its status and a link to its plan, never dressed up as finished. Every live public GitHub repo should be listed on `projects.html` and have a static `projects/<repo>.html` page.

## Positioning & Ordering

This site is the "polished proof" layer of the public surfaces. Era note (2026-08-11): the old canon hierarchy is retired — the working pair is the hub's `IDENTITY.md` (identity keystone) + `career-strategy/` (operating layer); the old `career/` canon is archived at `archive/career/`.

Positioning target: the **personal expert brand** — AI reliability, systems engineering, and serious AI-assisted development. Identity constants per `IDENTITY.md`: operator statement "I build the systems that work while you don't", the applied-AI-reliability field, and the Expat Money anchor as shipped, cited proof. The three-domain thesis line is personal-worldview context, not a professional surface lead.

The old surface spec (`archive/career/Showcase/site-spec.md`) is superseded — rebuilds are specified from `career-strategy/01-job-hunt-and-cv.md`, `career-strategy/06-github-audit.md`, and `IDENTITY.md`. Never copy private strategy details into this public repo.

**Status (2026-08-22):** synced to the shipped 2026-08-22 CVs (hub: `career-strategy/cv/`) — hero gained a `.hero-now` line ("Now: Founding Engineer at Zap Viagens — privacy-first, self-hosted AI products on open-source models.") with a matching style/animation rule in `styles.css`; `llms.txt` canon gained the current-role entry and the Expat Money claim was corrected to the CV wording (content-operation costs down 90%, production time halved). Prior status (2026-08-13): the clean-ARIA consolidation pass leads with canonical domains. Absorbed source pages remain in the catalog and say “consolidated into …”; archived references are labeled pending approval, never already archived without live GitHub evidence. The former hermes-agent catalog entry was removed 2026-08-13 (repo renamed away; aria-agent is the canonical harness). Same-day pass: operator-shared-core, real-time-analytics-stack, and portfolio-builder were archived on GitHub and relabeled in the catalog; material-progression was archived then restored (active project); ruler-and-vibes was relabeled from the merge-era "dirty checkout" mislabel to the personal model-evaluation kit it is. Remnant: dead `.big6-table` styles in `styles.css` (harmless, unused). The formerly planned "Big 6" showcase repos are retired and will not be built. Visual QA of the rendered site is the owner's handoff.

**Status (2026-08-24, folded from closed PR #1):** Expat Money claim wording aligned to the CV across index.html and llms.txt — "content-operation costs down 90%, production time halved" (the old "50% faster content production" phrasing mis-stated halved time as a 50% speed increase). The index.html proof card no longer attributes a compliance system to Expat Money (the WCP V5 repo was created 2026-05-06); the card now describes the Expat AI function itself (2022–2025). Hero stat corrected: "270 unit tests" → "367 tests" to match the WCP project page's stated bins (42 Contracts + 66 Agent + 45 Gateway + 29 Web + 185 Compliance Core); owner should verify against pnpm evidence. llms.txt writing section now links the published "Taste Is All You Need" essay.

**Status (2026-08-24, full audit + pinned spotlight rebuild):** Audited every portfolio page against the live repo inventory (59 repos visible, zero forks) and the new positioning. projects.html restructured — the six pinned repos (WCP V5, aria-agent, agenttrace, evalforge, groundtruth, llm-gateway) lead in pin order with a new `pinned` filter tag/button; archived mini-agent demoted from position #2 into the archive block; meta cards (FishRaposo, fishraposo.github.io) removed per the every-public-repo-except-profile-and-site rule, and their pages (projects/fishraposo.html, projects/fishraposo-github-io.html) deleted. cmd-mods gained a project page sourced only from its public README (MIT; six TypeScript mods; event-contract pipeline with self-repair as sole completion judge), plus catalog and llms.txt entries; the repo still needs a GitHub description set by the owner. Thin stubs helppeer-collaboration, material-progression, ruler-and-vibes rebuilt to the full page skeleton (header/footer/CTA + fact cards) from their public READMEs — helppeer is Apache-2.0, zero-dependency, injected-transport tests; material-progression stays honest as a local 0.2.0 release candidate, no public-release claim; ruler-and-vibes is MIT, 40 categories / 759 forms / Core⊂Extended⊂Full. index.html homepage proof grid reordered to pin order; "Three years of production AI" → "Three and a half years" to match the profile README. sitemap.xml: meta entries removed, cmd-mods added, lastmod refreshed on changed pages. llms.txt: public repo count updated to 31 (2026-08-24 inventory); kiwi-code, material-progression, ruler-and-vibes catalog entries now link their project pages.

**Status (2026-08-24, portfolio best-practices pass — pushed directly to main):** Cross-referenced the site against 2026 developer-portfolio research. Added: favicon.svg (lightning bolt, brand colors — the inline-favicon claim is now true; also injected at runtime by main.js as a fallback); og:image/twitter:image meta on index, projects, and the three highest-traffic project pages (asset `og-image.png` pending owner upload via web UI — binary files can't be pushed through the API channel used here); JSON-LD Person+WebSite schema on index.html (completes the llms.txt + structured-data citation stack); a Writing section on the homepage linking the published "Taste Is All You Need" essay; Upwork contact link in every footer (injected + hardcoded on edited pages) and the homepage end-CTA switched from the catalog to the hire path. main.js fixes: hardcoded headers/footers on project pages are now both replaced by the injected chrome (previously only the header was removed — footers rendered twice); nav/footer nav landmarks gained aria-labels; active nav links get aria-current="page". WCP V5 page gained a test-distribution figure (inline SVG; numbers are the page's own per-service bins). llms.txt canon gained a Contact line; sitemap lastmods refreshed sitewide. Deep project pages beyond WCP/aria/cmd-mods receive favicon and the Upwork footer via main.js at runtime; their hardcoded no-JS footers are unchanged. Still owner-pending: a real screen-recorded GIF of the WCP evidence run (needs his machine), and an email address if he wants one published.

Durable local reference records for the 13 archived references live outside this public site at `../Portfolio Projects/portfolio-inventory/references/<repository-name>.md`; project pages keep their public GitHub provenance links and describe the records rather than exposing local filesystem paths.

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

Available tags: `pinned`, `rag`, `agents`, `llm`, `semantic-search`, `automation`, `data-pipeline`, `evaluation`, `api`, `saas`, `regulatory-ai`, `compliance`, `multi-service`, `agentic`, `algorithms`, `frontend`.

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
