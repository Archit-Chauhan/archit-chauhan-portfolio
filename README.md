# arc — Archit Chauhan · Portfolio

**Live → https://archit-chauhan-portfolio.vercel.app/**

A developer portfolio with a modern, minimal design language (white canvas, deep-navy ink,
electric-indigo CTA, atmospheric gradient mesh, thin Inter display type, composited navy
product mockups). Built with **React + Vite + Tailwind CSS**.

## Run

```bash
npm install
npm run dev        # start dev server
npm run build      # production build → dist/
npm run preview    # preview the build
```

## Architecture

Everything is small, reusable and data-driven. Content lives in one place; components only render.

```
src/
├─ data/portfolio.js          # SINGLE SOURCE OF TRUTH — edit content here
├─ App.jsx                    # composition only
├─ index.css                  # Tailwind layers + component classes (.btn-*, .pill, .card, .eyebrow)
└─ components/
   ├─ ui/                     # primitives: Button, Pill, TagList, Eyebrow, Section,
   │                          #             SectionHeading, Card, Stat, Icon
   ├─ visuals/                # GradientMesh, WindowChrome, Sparkline, DashboardMockup, ProjectThumb
   ├─ layout/                 # Nav (responsive), Footer
   ├─ cards/                  # ProjectCard, SkillCard, FeatureCard, TimelineItem
   └─ sections/               # Hero, About, Skills, Projects, Experience, Contact
```

### How to maintain it

- **Change any text, project, skill, job or link** → edit `src/data/portfolio.js`. No component changes needed.
- **Restyle the brand** → edit design tokens in `tailwind.config.js` (colors, shadows, fonts)
  and the component classes in `src/index.css`.
- **Add a project mockup style** → add a `case` to `variants` in `components/visuals/ProjectThumb.jsx`
  and reference its key as `variant` in the project data.
- **Add an icon** → add a path to `components/ui/Icon.jsx`.

Sections are pure composition: each maps its slice of `portfolio.js` over a reusable card/primitive.

## Design tokens

| Token | Value |
|---|---|
| Indigo (CTA) | `#533afd` |
| Ink (text) | `#0d253d` |
| Canvas / soft / cream | `#ffffff` / `#f6f9fc` / `#f5e9d4` |
| Navy (mockups) | `#1c1e54` |
| Mesh | cream · orange `#f6a23b` · lavender `#a78bfa` · indigo `#533afd` · ruby `#ea2261` |
| Type | Inter (300 display, negative tracking) · JetBrains Mono (labels/code) |

Stub content is a placeholder persona — swap in real details in `src/data/portfolio.js`.
