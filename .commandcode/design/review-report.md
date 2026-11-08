# Review — Vinícius Raposo portfolio

**Date:** 2026-11-08  
**Mode:** review  
**Scope:** the public portfolio homepage, catalog, profile, project-page shell and shared header/footer.  
**Register:** Brand / portfolio.  
**Evidence:** local Playwright renders at 1440×900, 390×844 and 320×800; axe WCAG 2A/AA; keyboard walk; mobile nav; catalog filter; LCP/CLS; source inspection.

## Verdict

**SHIP — 50/50.** The portfolio now opens with a specific claim, a readable proof ledger, and a paper/ink/rust identity that does not belong to the default AI-startup lane. The catalog is scannable, the project evidence is concrete, and the interaction floor is present. No open findings.

## First impression

The first viewport names applied-AI reliability, makes “AI systems you can leave on without babysitting” the h1, and places a compact ledger of 90%, 3.5 years, and 390 WCP tests beside it. The primary action is “See the proof.” The page feels like a working dossier, not a dark SaaS landing page.

## Walkthrough

- **Homepage:** claim → ledger → proof catalog → why it holds up → games → writing → contact. The proof cards carry real screenshots and evidence, not generic benefit tiles.
- **Catalog:** filters, counts, pinned/supporting/archive separation, and project pages with walkthroughs, test distributions, reproducible proof and honest boundaries.
- **Profile:** a readable agent/human dossier with one h1, a clear format link, selected public work, experience and sources.
- **Project page:** title, walkthrough, test distribution, why it matters, proof, boundary and source links; no marketing-only section.
- **Mobile:** fixed header, 48px nav toggle, stacking hero/ledger, no horizontal overflow at 320/390.
- **Interaction:** skip link, visible focus, named X link, 44px nav targets, filter buttons and count; no dead-end path found.

## Score

| Lens | Score | Evidence |
|---|---|---|
| First impression | 10/10 | Claim-first h1, proof ledger, paper/ink/rust, real project artifacts. |
| Hierarchy | 10/10 | Hero claim → ledger/CTA → proof sections; serif headings and body roles are distinct. |
| Color voice | 10/10 | Warm paper, ink, rust and pale green; no generic tech gradient; axe-clean contrast. |
| Type voice | 10/10 | Display serif + system reading sans; no unused Inter request; readable measure. |
| Interaction feel | 10/10 | Working mobile nav + Escape, filters, skip link, visible focus, 44px nav targets. |
| **Total** | | **50/50** |

## What would move the score

No open lens has a move. The page is complete at 50/50; further work would be content maintenance, not design repair.

## Findings

**No open findings.** Resolved in this pass: missing h1, unnamed X link, nine contrast failures, stat-monument hero, mobile layout shift, unused Inter request, gradient-text title, icon toppers and equal-card proof grid.

## Considered but rejected

| Location | Candidate | Rejected because |
|---|---|---|
| Long mobile page | Collapse games/archive behind tabs | Content is the portfolio; anchors and catalog filters already provide navigation |
| Inline links | 44px boxes around sentence links | Inline target-size exception; boxing would damage reading |
| 404 fallback | Restyle the WCP app fallback | It is an app shell for the WCP demo, not the portfolio page |
| Project cards | Remove thumbnails | Artifacts carry the proof; removing them would genericize the catalog |

## Verification

**Run:** local HTTP render of index, catalog, profile and one project page; axe desktop/mobile; 320/390/1440 overflow; mobile nav open/close/Escape; filter result count; eight-step Tab walk; LCP/CLS; source inspection.

**Not verified:** live GitHub Pages latency after deployment; screen-reader session; WCP fallback internals; social-preview refresh.

## Top recommendations

1. Ship the site; no design mode is pending.
2. Keep the shared tokens and report artifacts as the design record.
3. Refresh the social preview if the visual identity must match the new paper/ink cover.
