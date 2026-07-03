# Vinícius Raposo — I build the systems that work while you don't

> I build the systems that work while you don't.
> On AI, sound money, and owning your own life.
> **Twenty years of the same idea, across three domains.**
> This isn't cost arbitrage. It's engineering arbitrage.

Personal portfolio site hosted on GitHub Pages. Static HTML/CSS/JS — no build step, no framework, no dependencies.

**Live**: https://fishraposo.github.io

## Pages

- `index.html` — Hero with lead + thesis + proof highlights + CTAs, open source repo cards, selected projects
- `projects.html` — Complete public repo catalog with tag filter
- `projects/*.html` — One static detail page per public GitHub repo
- `llms.txt` — LLM-readable manifest of the site

## Quick Start

```bash
# Serve locally
npx serve .

# Or open index.html directly in your browser
```

## Project Structure

```
├── index.html          # Landing page
├── projects.html       # Full public repo catalog
├── styles.css          # All styles
├── main.js             # Header/footer templates, tag filter logic
├── icons.svg           # SVG icon sprite
├── llms.txt            # LLM-readable site manifest
└── projects/           # One static page per public GitHub repo
```

## Adding a Project

**Landing page** (`index.html`): uncomment the template block inside `.projects-grid` and fill in the fields.

**Projects page** (`projects.html`): uncomment the template block inside `.projects-grid-full`, set `data-tags="tag1 tag2"` to match the filter buttons, and fill in the fields.

Available tags: `rag`, `agents`, `llm`, `semantic-search`, `automation`, `data-pipeline`, `evaluation`, `api`, `saas`, `regulatory-ai`, `compliance`, `multi-service`, `agentic`, `algorithms`, `frontend`

To add a new tag: add a `<button class="filter-btn" data-filter="your-tag">` to the filter bar in `projects.html`.

## Deployment

Automatically deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

## License

MIT
