# Design system — Vinícius Raposo portfolio

**Register:** Brand / portfolio.  
**Direction:** Paper-and-ink proof dossier. The claim leads; evidence follows as a ledger and catalog.

## Tokens

| Role | Value |
|---|---|
| Canvas | `#f4efe5` |
| Raised surface | `#fffdf8` |
| Ink | `#13251f` |
| Body | `#1a2f27` |
| Muted | `#4d6156` |
| Dim | `#5b6f63` |
| Accent / rust | `#b8431f` |
| Accent hover | `#6e2410` |
| Warm rule | `#8a5a2b` |
| Focus | `#0b66c3` |
| Border subtle/default/emphasis | `rgba(19,37,31,.12/.18/.28)` |

**Type:** display serif `Iowan Old Style, Palatino Linotype, Palatino, Georgia, serif`; body/sans `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Body 16px/1.65; metadata 12–14px; h1 `clamp(2.65rem, 5.2vw, 5rem)`; h2 serif.

**Spacing:** 4/8/16/24/32/48/64/80px. **Radii:** 8/12/16/24px, pill for nav. **Targets:** 44px minimum on controls and nav; inline prose links keep the inline exception.

## Composition

- Hero: `1.15fr / 0.85fr` grid; claim, domain and actions left; proof ledger right.
- Ledger: rust top rule, three label/value rows, one evidence note.
- Proof: divider-led columns and project cards with real screenshots/evidence; no icon toppers.
- Catalog: pinned proof first, then supporting systems, games, archives; filter buttons and count.
- Profile: 780px reading column with one h1 and source links.
- Header: fixed paper pill with 48px mobile toggle; body reserves 150px/148px top space.
- Footer/CTA: paper surface, rust rule, one action.

## Interaction and states

Skip link; visible 2px focus ring; mobile nav opens/closes with Escape and returns focus; filter buttons expose selected state and a live result count; primary/secondary/quiet buttons; disabled styling; empty/error states remain on project pages. No hover-only path.

## Motion

No hero entrance or decorative loop. Header is fixed to prevent first-paint shift. Shared `prefers-reduced-motion` stops transitions/animations. No autoplay.

## Accessibility

One h1 per content page; landmarks and named navs; image alt text; X icon link named; contrast axe-clean; target sizes 44px on controls; keyboard paths verified; 320px/200% reflow check; no color-only state in the shell.

## Module record

| Module | Result |
|---|---|
| setup | `brief.md` created with name, category, user, job, artifact, evidence, drift. |
| checkup | 60/60; no open findings. |
| smell | 10/10; no open tells. |
| review | 50/50; no open findings. |
| deslop | Removed dark-orange template, stat monument, gradient text, Inter, icon toppers. |
| typeset | Display serif + system sans; new h1 measure and hierarchy. |
| recolor | Paper/ink/rust tokens; contrast verified. |
| motion | Removed hero entrance; fixed header; reduced-motion preserved. |
| interaction | Nav, filter, skip, focus and target behavior verified. |
| a11y | h1, named X link, contrast, targets, keyboard, mobile nav. |
| relayout | Claim-first hero, proof ledger, divider-led proof rows. |
| responsive | 320/390/1440 no overflow; stacked hero; mobile nav. |
| tokenize | Shared CSS variables for color, type, spacing, radius and focus. |
| finish | axe 0, CLS 0, no broken assets, filters/nav verified. |
| refine | Editorial paper dossier. |
| voice | Working dossier; concise, evidence-first; no marketing preamble. |
| surface | Reviewed as a brand surface; no app-state surface in the site shell. |
| redesign | Applied to the hero and shared palette; project pages inherit tokens. |

## Evidence file map

`index.html` (hero/ledger), `styles.css` (tokens/shell/proof rows), `main.js` (header/nav), `checkup-report.md/.html`, `smell-report.md/.html`, `review-report.md/.html`.
