# Portfolio Hub

The landing page for Shiv Shakti Sahoo's project portfolio — links to each
showcase project (live demo + source), with tech-stack tags and a live-status
badge per project.

Static site, no backend: Vue 3 + TypeScript + Vite + Tailwind CSS v4, reusing
the design tokens (`src/style.css`) and UI primitives (`src/components/ui/`)
from the `saas-starter-kit` repo so every deployment reads as one coherent
body of work.

## Adding a project

Edit `src/data/projects.ts` — each entry is `{ title, blurb, tech, liveUrl,
repoUrl, status, healthCheck }`. No other file needs to change. Set
`healthCheck: true` once a project exposes a `/api/health/` endpoint (see
`src/lib/health.ts`) to get a live/asleep status badge — this also pre-warms
that project's free-tier host when someone visits the hub.

## Local setup

```
npm install
npm run dev
```

## Deployment (Render Static Site)

- Build command: `npm ci && npm run build`
- Publish directory: `dist`

No environment variables needed — project URLs live in `src/data/projects.ts`.
