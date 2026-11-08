# Checkup — Vinícius Raposo portfolio

**Date:** 2026-11-08  
**Mode:** checkup  
**Scope:** `index.html`, `projects.html`, `fish.html`, the WCP project page, and the shared header/footer; desktop and mobile.  
**Register:** Brand / portfolio.  
**Evidence:** local Playwright render at 1440×900, 390×844 and 320×800; axe WCAG 2A/AA; keyboard walk; filter and mobile-nav interaction; LCP/CLS measurement; source inspection.

## Verdict

**APPROVE — 60/60.** The page now has one visible h1, a paper-and-ink dossier voice, a compact proof ledger instead of a stat monument, zero axe violations, zero horizontal overflow at 320/390, and zero measurable layout shift. The primary proof path and the catalog filters work.

## Score

| # | Vital | Status | Score | Evidence |
|---|---|---|---|---|
| 1 | Intentionality | Healthy | 10/10 | Paper/ink/rust palette, display serif, claim-first hero, ledger, and proof-specific project artifacts; no dark AI template. |
| 2 | Readability | Healthy | 10/10 | 16px body, 13–14px metadata, strong serif display scale, measured 60ch reading width, axe-clean contrast. |
| 3 | Usability | Healthy | 10/10 | One primary CTA, proof anchors, working catalog filters, and a working mobile nav with Escape close. |
| 4 | Responsiveness | Healthy | 10/10 | 320/390/1440 render without horizontal overflow; hero stacks; ledger stays within the viewport; nav collapses to 48px toggle. |
| 5 | Speed | Healthy | 10/10 | Local LCP 516ms desktop / 152ms mobile; CLS 0 at both; 14 requests; no render-blocking web font. |
| 6 | Accessibility | Healthy | 10/10 | axe 0 desktop/mobile; h1 present; X link named; 44px nav targets; skip link; visible focus; images have alt text. |
| | **Total** | | **60/60** | No open findings. |

## Composition and prompt fidelity

The portfolio now names the discipline in the kicker, makes the claim the h1, and puts the evidence ledger beside it. The proof section is a catalog of real systems, not a generic feature grid. The name, category, user, artifact and evidence are visible in the first viewport; the design cannot be reassigned to an unrelated product by changing the logo.

## Findings

**No open findings.** The audit-driven changes are recorded here as resolved work:

| # | Severity | Discipline | Location | Before | After | Why |
|---|---|---|---|---|---|---|
| 1 | HIGH | Accessibility | `index.html` hero | No page-level `h1`; the claim was a `<p>` after a stat block | The claim is the `h1`, first in the hero copy | A page without a primary heading has no reliable document outline |
| 2 | HIGH | Accessibility | `main.js` X nav | Icon-only link with no accessible name | Added `aria-label="X (Twitter)"` and hid the glyph | The link was applied to the wrong element/name; axe flagged it |
| 3 | HIGH | Color/Accessibility | shared palette | 9 axe contrast violations on muted text and links | Paper/ink palette, darkened links, axe 0 | Text must meet contrast against its rendered background |
| 4 | MEDIUM | Layout | hero | Three large stats preceded the claim; a generic stat monument | Claim first; compact proof ledger beside it | The first read should be the promise and evidence, not decoration |
| 5 | MEDIUM | Motion/Speed | injected header | Mobile CLS 0.146 from the header entering the flow | Fixed header with reserved top space; CLS 0 | Content should not jump after first paint |
| 6 | MEDIUM | Composition | shared proof grid | Equal card grid with decorative icon toppers | Divider-led proof columns, no icon toppers, serif section headings | The proof should read as an authored dossier, not a card template |

## Considered but rejected

| Location | Candidate | Rejected because |
|---|---|---|
| Inline text links | Enforce 44px boxes on every inline sentence link | WCAG target-size exceptions cover inline links; boxing them would break reading flow |
| Fixed header | Remove the floating header entirely | It provides persistent navigation and the reserved space now prevents shift |
| `404.html` | Redesign the WCP app fallback | It is the WCP shell fallback, not the portfolio content page; it loads the app assets |
| Page length | Cut the catalog or games | The long page is the evidence; section anchors and the catalog filters provide navigation |

## Verification

**Run:** local HTTP render of `index.html`, `projects.html`, `fish.html`, `projects/wcp-compliance-agent-v5.html` at 1440×900; index at 390×844 and 320×800; axe WCAG 2A/AA at desktop and mobile; mobile nav open/close and Escape; catalog filter and result count; eight-step Tab walk with focus outlines; PerformanceObserver LCP/CLS; source inspection of `index.html`, `styles.css` and `main.js`; all 109 HTML pages cleaned of the unused Inter font request.

**Observed:** axe 0 on index, projects, fish, project page and mobile index; `scrollWidth === clientWidth` at 320/390/1440; h1 present and 280–350px wide on mobile; CLS 0; LCP under 600ms locally; filter reports “Showing 5 of 32 projects”; nav opens with all six links and closes with Escape.

**Not verified:** live GitHub Pages CDN latency after deployment; a real screen-reader session; dark mode (not a shipped state); the WCP app fallback's internal route behavior.

## Next modes

No in-product design work remains for the site. Keep the 404/app fallback in the WCP repo; do not recolor the project pages independently of the shared tokens.
