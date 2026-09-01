# recipes.feli.page

A bilingual (English / Cantonese) recipe site for Hong Kong-style home cooking. All content is local TypeScript data — no CMS, no backend.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) + [daisyUI 5](https://daisyui.com/)
- [TypeScript 7](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/) (4-space indent, Tailwind plugin)

## Getting started

Requires [Bun](https://bun.sh/).

```bash
bun install
bun dev
```

Open [http://localhost:3000/en-GB](http://localhost:3000/en-GB).

## Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Start dev server |
| `bun run build` | Production build |
| `bun run lint` | Type-check (`tsc --noEmit`) |
| `bun run format` | Format with Prettier |

## Project structure

```
src/
├── app/
│   └── [locale]/            # Locale-parametrised routes
│       ├── page.tsx         # Homepage (links to recipes)
│       ├── layout.tsx       # Root layout (navbar, fonts)
│       ├── recipes/
│       │   ├── page.tsx     # Recipe listing
│       │   └── [slug]/
│       │       ├── page.tsx  # Individual recipe page
│       │       └── layout.tsx
│       └── ingredients/
│           └── [slug]/page.tsx
├── components/recipe/       # Recipe UI (steps, requirements, measurements)
├── data/
│   ├── ingredients.ts       # Ingredient definitions
│   ├── units.ts             # Measurement units
│   └── recipes/
│       ├── index.ts         # Recipe registry & types
│       ├── egg-tart.ts
│       ├── egg-waffle.ts
│       ├── hong-kong-milk-tea.ts
│       ├── ginger-milk-pudding.ts
│       └── bbq-fried-dough.ts
├── i18n/
│   ├── index.ts             # Locale config & LocalisedString type
│   └── strings.ts           # UI copy strings
└── lib/
    └── formatters.ts        # Intl.NumberFormat / DurationFormat helpers
```

## Data model

Recipes are defined as TypeScript objects with a `LocalisedString` type that provides `en-GB` (required) and `zh-HK` (optional, falls back to English) translations. Each recipe has a slug, localised name, ingredient requirements (with measurements), and ordered steps (instructions, air-fry settings, or sub-recipes).

To add a recipe: create a `.ts` file in `src/data/recipes/`, define the `Recipe` object, and register it in the `recipes` array in `src/data/recipes/index.ts`.

## Adding a new ingredient

Add an entry to `src/data/ingredients.ts` with a slug and localised name, then reference it in recipe files.

## Locale

- **en-GB** — always required
- **zh-HK** — optional, falls back to en-GB

The root `/` redirects to `/{defaultLocale}` (`en-GB`).
