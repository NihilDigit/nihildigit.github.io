# Repository Guidelines

`README.md` and `CLAUDE.md` are symlinks to this file. Edit `AGENTS.md` only; do not replace the symlinks with separate copies.

## Project Structure & Module Organization

This is an Astro 5 portfolio deployed to GitHub Pages. Source code lives in `src/`:

- `src/pages/` contains routes such as `/`, `/anvil`, `/papers`, `/projects`, and `/about`.
- `src/components/` contains reusable Astro components. Use PascalCase filenames.
- `src/data/` contains content data: `featured/`, `papers/`, `notes/`, and `projects.json`.
- `src/styles/` contains global Tailwind v4 design tokens and prose styles.
- `src/utils/` contains build-time helpers such as GitHub stats and OG generation.
- `public/` contains static assets, including `public/anvil/`, favicons, `CNAME`, and `llms*.txt`.

There is no dedicated test directory. Use checks, linting, and builds as the verification path.

## Build, Test, and Development Commands

Use `deno` for all project workflows. Dependencies stay declared in
`package.json`; `deno.json` only pins `nodeModulesDir` and the `@/` alias.

```bash
deno install          # install dependencies into node_modules
deno task dev         # start local Astro dev server
deno task build       # astro check, build, Pagefind index, copy search assets
deno task preview     # preview the production build
deno task astro check # type-check Astro content and pages
deno task lint        # run ESLint
deno task format      # format with Prettier
```

`sharp` has a post-install script, so a fresh clone needs
`deno install --allow-scripts=npm:sharp` once.

Deno resolves bare specifiers only for declared dependencies, so a package used
by a project-level file (for example `@eslint/js` in `eslint.config.js`) must be
in `package.json` rather than riding on a transitive install.

Run `deno task astro check` before shipping. Run `deno task build` for route, content, search, or static asset changes.

## Coding Style & Naming Conventions

Use the existing TypeScript and Astro patterns. Keep page-level data loading near the rendering page, and prefer content collections or `src/data/*` over hard-coded lists.

Formatting uses Prettier with Astro and Tailwind plugins. Use two-space indentation in Astro, JSON, YAML, and TypeScript. Components use PascalCase (`AnvilTeaser.astro`); utilities use camelCase (`githubStats.ts`); content IDs and routes use kebab-case.

## Testing Guidelines

There are no unit tests yet. Verification means:

1. `deno task astro check`
2. `deno task lint` when touching TypeScript, Astro components, or config
3. `deno task build` when changing pages, content, Pagefind, or public assets

For visual changes, inspect the dev server on desktop and mobile widths.

## Commit & Pull Request Guidelines

Recent commits use concise imperative summaries, such as `Refresh portfolio homepage and project copy`. Follow that style: one clear sentence, present tense, no trailing period.

Pull requests should include a short description, affected pages or data files, verification commands, and screenshots for visible UI changes. Link related issues or upstream PRs when relevant.

## Deployment & Configuration

Deployment runs through GitHub Actions on pushes to `master`, scheduled daily rebuilds, and manual dispatch. GitHub Pages must use the GitHub Actions source. Keep `public/CNAME` intact unless the custom domain changes.
