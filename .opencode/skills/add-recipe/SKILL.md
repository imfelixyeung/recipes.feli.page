---
name: add-recipe
description: Use when adding a new recipe to this site (recipes.feli.page). Creates a new TS file under src/data/recipes/, adds missing ingredients or units to their data files, registers the recipe in src/data/recipes/index.ts, and localises all display strings in en-GB + zh-HK. Trigger words: "add recipe", "new recipe", "write a recipe".
---

# Adding a Recipe

All content lives as TypeScript data. A recipe is a single file at
`src/data/recipes/<slug>.ts` exporting a `Recipe` typed value, registered in the
`recipes` array in `src/data/recipes/index.ts`. No CMS, no backend.

## Workflow

1. Pick a kebab-case `slug` unique across all recipes (URLs are `/{locale}/recipes/{slug}`).
2. Check `src/data/ingredients.ts` and `src/data/units.ts` for every ingredient/unit you need. Reuse them by camelCase key (e.g. `ingredients.flourPlain`, `units.gram`).
3. Only if missing, add a new entry. Use relative imports (`../ingredients`, `../units`) — the `@/` alias would map to the repo root, not `src`, and data files never use it. Ingredient `slug` values must not collide with existing ones. Units are British English: `tablespoon`, `teaspoon`, `millilitre`, `gram`.
4. Create the recipe file and register it in `recipes` in the index.
5. Verify: `bun run lint` and `bunx tsc --noEmit`.

## Recipe schema (from `src/data/recipes/index.ts`)

```ts
import { Recipe } from ".";
import { ingredients } from "../ingredients";
import { units } from "../units";

export const myRecipe: Recipe = {
    slug: "my-recipe",
    name: { "en-GB": "My Recipe", "zh-HK": "..." },
    requirements: [/* ingredient | recipe */],
    steps: [/* instruction | recipe | air-fry */],
};
```

## Requirements

- Ingredient: `{ type: "ingredient", ingredient: ingredients.key, measurement: { unit: units.key, value } }`
  - `value` is a `MeasurementValue`: a plain number (`165`, `1 / 4`) or a range tuple `[3, 4]` (rendered `3-4`).
- Sub-recipe: `{ type: "recipe", recipe: subRecipe }` — used to compose multi-part recipes (e.g. dough + sauce). `recipe` is a full `Recipe` object in the same file.

## Steps

- `{ type: "instruction", instruction: LocalisedString }` — a single step.
- `{ type: "recipe", recipe: subRecipe }` — render a sub-recipe's steps in place.
- `{ type: "air-fry", temperature?: number, duration?: DurationInput, instruction?: LocalisedString }` — e.g. `temperature: 180, duration: { seconds: 30 }`. Omit fields or set `null` when unknown; the UI formatter (`src/lib/formatters.ts`) uses `Intl.DurationFormat` / `NumberFormat` per locale.

## Localisation

Every display string is a `LocalisedString`: `{ "en-GB": string }` required, `"zh-HK"` optional (falls back to en-GB). **Add both** — the site's audience is Hong Kong Cantonese. Write zh-HK in natural colloquial Cantonese (嘅/咗/喺, e.g. `"將酵母同水混合"`), not formal written Chinese. Name keys for sub-recipes too. Keep `slug` unlocalised.