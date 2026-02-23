# Lovable → Webflow Starter Kit

Design components with [Lovable](https://lovable.dev), sync them to [Webflow](https://webflow.com) as code components via DevLink — all through GitHub.

## How it works

```
Lovable (design & code) → GitHub (source of truth) → Webflow (publish)
```

1. **Lovable** generates React components that follow Webflow-safe patterns
2. Every component has a matching **Webflow wrapper** using `declareComponent()`
3. A **GitHub Action** bundles and pushes the component library to your Webflow workspace on demand
4. In Webflow Designer, drag the components onto pages and configure props visually

Note: Lovable-generated components live in a private Webflow Library, which can be accessed from the site builder. Therefore, this workflow does not affect any content designed in Webflow itself and maintains a separation of concerns in that sense.

## Quick start

### 1. Create a GitHub org, Lovable project, and push the starter kit

Lovable requires GitHub access to sync code. When you connect Lovable to GitHub, it gets access to **all repos in the scope you authorize**. To keep things isolated, create a dedicated GitHub organization for this project.

Lovable also can't import an existing repo — you have to create a project first, connect it to an empty repo, then push the starter kit into it.

**Set up GitHub:**

1. Go to [github.com/organizations/plan](https://github.com/organizations/plan) and create a new **free** organization (e.g. `my-project-webflow`)
2. This org will only contain the repo Lovable syncs with — nothing else

**Set up Lovable:**

3. Go to [lovable.dev](https://lovable.dev) → **New Project** → create any project (the initial code doesn't matter, it will be replaced). For exmaple, use this prompt:

```sh
A completely clean, empty single-page application — just a bare HTML shell with no visible content, ready for you to merge your GitHub repo on top of.
```

4. When it's done building, edit your project name in settings.
5. In your Lovable project, go to **Settings** → **GitHub** → **Connect**
6. When prompted, authorize Lovable for **only your new organization** (not your personal account)
7. Lovable will create a new repo in your GitHub organization

**Replace that repo with the starter kit:**

Navigate via your terminal to wherever you organize repositories. If you don't have a folder already, create one (eg ~/apps) and navigate to it. Then clone this starter kit:

```sh
git clone https://github.com/dwheeler7/lova-flow.git
cd lova-flow
```

**Name your component library:**

Open `webflow.json` in your text editor and change the library name to match your project:

```json
{
  "library": {
    "name": "My Project Components",
    ...
  }
}
```

This name appears in the Webflow Designer's Code Components panel.

**Push everything to your Lovable repo:**

```sh
git add -A && git commit -m "initiate project"
git remote set-url origin https://github.com/YOUR_ORG/YOUR_REPO.git
git push --force origin main
npm install
```

After a few minutes, Lovable will pick up the pushed code. You now have bi-directional sync: edits in Lovable push to GitHub, and local pushes show up in Lovable.

Back in Lovable, you should see your project with a new design!

### 2. Add Lovable Knowledge entries

Open your Lovable project → Settings → Knowledge. Create one entry for each section in [`docs/LOVABLE_WEBFLOW_GUIDELINES.md`](docs/LOVABLE_WEBFLOW_GUIDELINES.md). These entries teach Lovable to generate Webflow-compatible components automatically.

There are 7 entries covering architecture, forbidden patterns, component rules, animations, wrapper templates, deployment, and a pre-completion checklist.

### 3. Set up Webflow

**Generate a Workspace API token:**

1. Go to your [Webflow Dashboard](https://webflow.com/dashboard)
2. Open **Workspace Settings** → **Integrations** → **API Access**
3. Click **Generate Token**
4. Give it a name (e.g. "Lovable Sync") and ensure it has permissions for code component libraries
5. Copy the token — you'll need it in the next two steps

**Add the token as a GitHub secret (required for the sync Action):**

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `WEBFLOW_WORKSPACE_API_TOKEN`
4. Value: paste your Webflow token
5. Click **Add secret**

**Add the token locally (optional, for `npm run webflow:share`):**

Create a `.env` file in the project root:
```
WEBFLOW_WORKSPACE_API_TOKEN=your_token_here
```
This file is already gitignored.

### 4. Push components to Webflow

There are three ways to sync:

| Method | How |
|--------|-----|
| **From Lovable** | Tell Lovable: *"sync to Webflow"* — it updates `.webflow-sync-trigger`, which fires the GitHub Action |
| **From GitHub** | Actions tab → "Sync to Webflow" → Run workflow |
| **Locally** | `npm run webflow:share` |

### 5. Use components in Webflow Designer

1. Open your site in the Webflow Designer
2. Go to the Components panel → Code Components
3. Find the "Lovable" library and add it to your site
4. Drag components onto the canvas and configure their props

## What's included

### Starter components

| Component | Description |
|-----------|-------------|
| `HeroSection` | Hero with badge, headline, subheading, and CTA buttons |
| `HeroBadge` | Small pill badge with optional dot indicator |
| `CtaButton` | Configurable call-to-action button |
| `FeatureCard` | Icon + title + description card with entrance animation |
| `SectionHeading` | Reusable section heading with subheading |
| `PricingCard` | Pricing tier card with feature list |
| `LandingNavbar` | Fixed top navigation bar |
| `LandingFooter` | Footer with copyright and links |

Each component lives in two files:

```
src/components/landing/ComponentName.tsx      ← React component (does the work)
src/components/webflow/ComponentName.webflow.tsx  ← Webflow wrapper (maps props)
```

### Project structure

```
├── .github/workflows/webflow-sync.yml   # GitHub Action for Webflow sync
├── .webflow-sync-trigger                # Touch this file to trigger a sync
├── docs/LOVABLE_WEBFLOW_GUIDELINES.md   # Lovable Knowledge entries (copy into UI)
├── src/
│   ├── components/
│   │   ├── landing/                     # Webflow-safe React components
│   │   ├── webflow/                     # declareComponent() wrappers
│   │   └── ui/                          # shadcn/ui primitives
│   ├── hooks/useInView.ts               # IntersectionObserver hook for animations
│   └── globals.webflow.ts               # Global CSS import for Webflow
├── webflow.json                         # DevLink library config
└── tailwind.config.ts                   # Includes fade-in animation keyframes
```

### Tech stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Webflow DevLink](https://developers.webflow.com/data/docs/devlink) (`@webflow/react`, `@webflow/data-types`)
- [Lovable](https://lovable.dev) for AI-assisted component design

## Key constraints

These rules keep components compatible with Webflow's Shadow DOM:

- **No framer-motion** — use CSS animations (`animate-fade-in-up`, `animate-fade-in`) via the `useInView` hook
- **No react-router-dom** — use plain `<a href="...">` tags
- **No document-level style injection** — Shadow DOM ignores it
- **No window.matchMedia** — use Tailwind responsive prefixes
- **All text via props** — never hardcode user-facing strings; every prop needs a default value
- **Relative imports** in `landing/` components — `../ui/button`, not `@/components/ui/button`

See [`docs/LOVABLE_WEBFLOW_GUIDELINES.md`](docs/LOVABLE_WEBFLOW_GUIDELINES.md) for the full rules.

## Adding a new component

1. Ask Lovable: *"Create a testimonial card component"*
2. Lovable creates both `src/components/landing/TestimonialCard.tsx` and `src/components/webflow/TestimonialCard.webflow.tsx`
3. Preview in Lovable, iterate on the design
4. When ready, tell Lovable: *"sync to Webflow"*
5. The component appears in Webflow Designer within a minute

## Local development

```sh
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Production build
npm run webflow:share  # Push library to Webflow (needs .env token)
```
