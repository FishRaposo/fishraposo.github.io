# Vinícius Raposo — AI systems you can leave on without babysitting

> AI systems you can leave on without babysitting.
> Built for work where wrong answers are expensive.
> Applied AI Reliability Engineer.

Personal portfolio site hosted on GitHub Pages. Static HTML/CSS/JS — no build step, no framework, no dependencies.

**Live**: https://fishraposo.github.io

## Pages

- `index.html` — Hero (promise, arena, method), what I help with, the six proof systems in canon order, why it holds up, Games, writing, contact
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
