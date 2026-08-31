<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# recipes.feli.page

Static recipe site: Next.js 16 / React 19 / Tailwind v4 / daisyUI 5. All content is local TypeScript data — no CMS, no backend, no tests, no CI.

## Commands

- `bun dev` — dev server. Use **bun** (lockfile is `bun.lock`; README's `npm` instructions are stale).
- `bun run lint` — eslint (the only wired check).
- `bunx tsc --noEmit` — typecheck (no script wired; `bun run build` also typechecks).
- No test framework exists.

## Codebase map

- `src/data/` — all content: `ingredients.ts`, `units.ts`, `recipes/*.ts`. Register every new recipe in the `recipes` array at `src/data/recipes/index.ts`; recipe requirements can nest other recipes recursively.
- `src/app/[locale]/` — App Router pages. `/` redirects (301) to `/{defaultLocale}` via `next.config.ts`.
- `src/i18n/` — locale config + copy strings.
- `src/components/recipe/` — recipe UI; `src/lib/formatters.ts` — cached `Intl.NumberFormat`/`DurationFormat` helpers.

## Conventions & gotchas

- Path alias `@/*` maps to the repo **root**, so app code is imported as `@/src/...` (e.g. `@/src/i18n`), not `@/components`. Data files use relative imports.
- i18n: locales are `en-GB` (always required) and `zh-HK` (optional, falls back to `en-GB`). Typed as `LocalisedString` (`src/i18n/index.ts`); resolve via `s(locale, str)`.
- Pages are fully static; `[slug]` routes must list all slugs in `generateStaticParams()`, and `[locale]` params are always validated through `getLocale()`.
- Next 16 typed routes generate global `PageProps<"/[locale]/...">` / `LayoutProps<"/[locale]">` in `.next/types/` (run `bun dev` or `bun run build` first). `params` is a `Promise` — always `await` it.
- Tailwind v4 is CSS-first: there is no `tailwind.config`; `daisyui` and `@tailwindcss/typography` load via `@plugin` in `src/app/globals.css`, providing classes like `card`, `btn`, `navbar`, `prose`.
- Prettier uses 4-space indentation (`.prettierrc.json`) plus `prettier-plugin-tailwindcss`; VS Code formats and organizes imports on save.