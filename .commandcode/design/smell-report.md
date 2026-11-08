# Smell — Vinícius Raposo portfolio

**Date:** 2026-11-08  
**Mode:** smell  
**Scope:** shared portfolio homepage, catalog, profile and project-page shell.  
**Register:** Brand / portfolio.

## Verdict

**CLEAN — 10/10.** The generic dark-orange AI template is gone. The page now reads as a paper-and-ink proof dossier: a serif claim, a compact evidence ledger, rust accent, divider-led proof columns, and real project artifacts. No open tells.

## Score

| # | Odor | Score | Evidence |
|---|---|---|---|
| 1 | Tech gradient | 1 | No indigo/cyan gradient; the palette is paper, ink, rust and pale green. |
| 2 | Generic tech hue | 1 | Rust on warm paper, not SaaS indigo or food-app orange. |
| 3 | Feature tile grid | 1 | Proof rows are divider-led columns; project cards are discrete proof objects with screenshots and evidence. |
| 4 | Accent rail | 1 | Rust rules mark the ledger and section headings; they encode structure. |
| 5 | Unearned blur | 1 | Header backdrop blur removed; the header is solid paper. |
| 6 | Stat monument | 1 | The three numbers are a compact ledger with labels, not a hero-sized monument. |
| 7 | Icon topper | 1 | Decorative proof icons are removed from the rendered page. |
| 8 | Bounce everywhere | 1 | No bounce/elastic; shared reduced-motion rule; hero entrance removed. |
| 9 | Default type | 1 | Display serif (Iowan/Palatino/Georgia) against a system reading sans; Inter request removed. |
| 10 | Center stack | 1 | Claim-first left-aligned hero; ledger on the right; section headings left-aligned. |
| | **Total** | **10/10** | No confirmed tells. |

## Resolved tells

| Tell | Where it was | Replacement |
|---|---|---|
| Dark AI template with orange glow | Shared palette/header/hero | Paper/ink/rust palette, solid header, editorial dossier |
| Stat monument | Hero | Claim-first h1 + compact proof ledger |
| Gradient text | Projects title | Solid rust heading |
| Inter default | All pages | System reading sans + display serif; font request removed |
| Icon toppers | Proof cards | Divider-led proof columns with no decorative icons |
| Equal card grid | Help/why/proof sections | Shared proof rows and project-specific evidence cards |

## What is working

- The palette and type are authored, not category defaults.
- The hero proves the claim with a ledger and leads to one primary action.
- The project cards are specific: WCP decision, evalforge failure, ARIA block, PolicyDesk approval, gateway audit, trace replay, Entrega route.
- The catalog separates profile pins, supporting systems, games, and archives instead of flattening everything into equal cards.
- The page retains a quiet, readable measure and a clear hierarchy across 14,000px of mobile content.

## Considered but rejected

| Location | Candidate | Rejected because |
|---|---|---|
| `#help` | Three service columns | They are a grouped service list, not an icon-feature template; each row names a distinct engagement and outcome. |
| Project thumbnails | Remove all screenshots | They are the product artifacts; removing them would make the proof cards generic. |
| `fish.html` | Restyle the agent-readable profile as a landing page | It is intentionally a readable dossier for people and agents. |
| Serif headings | Replace with a sans face | The serif is the deliberate editorial voice; it pairs with the plain body. |

## Prompt fidelity

Name exact. Category visible. User pressure (quick due diligence) named. Artifact (seven public systems with tests/evidence) present. Evidence (counts, demos, limits) present. No generic visual object survives a swap test: the WCP decision, route lab, trace, and policy artifacts belong to the work.

## Verification

**Run:** rendered the homepage, catalog, profile and one project page; inspected the rendered CSS/computed styles; checked the shared palette and font request removal; ran axe desktop/mobile; measured the hero/ledger at 320/390/1440. No open tell was found.

**Not verified:** a live stranger’s 2-second reaction after GitHub Pages deployment; social-preview image refresh.
