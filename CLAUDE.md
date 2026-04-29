# Digital Odyssey

NihilDigit's personal site — portfolio, ANVIL project page, OSS index, archived notes.

- **Live**: https://nihildigit.dev/
- **Source**: https://github.com/NihilDigit/nihildigit.github.io
- **Stack**: Astro 5 + Tailwind v4 + bun. Deployed via GitHub Actions to GitHub Pages. Custom domain `nihildigit.dev` via `public/CNAME`.

> `README.md` is a symlink to this file. Edit only here.

## Local development

```bash
bun install
bun run dev          # http://localhost:4321/
bun run build        # astro check + astro build + pagefind --site dist
bun run preview
bun astro check      # standalone type-check (must be 0 errors before commit)
```

`bun run build` runs Pagefind to produce the search index. Pagefind has no Windows-ARM64 binary; on that platform the build step warns and skips indexing — production CI (Linux x64) handles it normally.

## Deployment

GitHub Actions on push to `master` → GitHub Pages. Repo Settings → Pages → Source must be **GitHub Actions** (not "Deploy from a branch").

## Project layout

```
src/
├── assets/icons/             # SVG icons (Tabler-style stroke or filled)
├── components/               # Header, Footer, Card, AnvilTeaser, Socials, ...
├── content.config.ts         # Collection schemas
├── data/
│   ├── notes/                # Archived blog posts (frozen 2024-01)
│   ├── papers/               # Paper entries (anvil.md, rafnet.md)
│   ├── featured/             # Home-page featured items
│   └── projects.json         # OSS list
├── layouts/                  # Layout (page shell), PostDetails (note article)
├── pages/
│   ├── index.astro           # Home
│   ├── anvil.astro           # ANVIL project page (single-paper landing)
│   ├── papers/               # Publications list
│   ├── projects/             # OSS list
│   ├── about.astro
│   ├── notes/                # Archive list + detail; receives /posts/* redirects
│   ├── search.astro          # Pagefind UI
│   └── 404.astro
├── styles/
│   ├── global.css            # Design tokens (colors, fonts, layout utilities)
│   └── typography.css        # Prose styles
└── utils/
public/
├── anvil/                    # ANVIL teaser.mp4, teaser-poster.jpg, figures/
├── claude-icon.png           # Footer attribution icon
├── llms.txt                  # llmstxt.org index
├── CNAME
└── ...
```

## Information architecture

```
/                Home — Hero / Featured (ANVIL, waybar-ai-usage, Animeko×PikPak)
                       / Selected OSS / Publications
/anvil           ANVIL project page (special-status single-paper landing)
/papers          All publications (year-grouped, first-author bolded)
/projects        All OSS (Spotlight + Other)
/about           Bio + education + contact
/notes           Archived notes (footer-only entry, not in main nav)
/notes/[slug]    Note detail with "archived" banner

/posts           → 301 → /notes              (legacy)
/posts/[slug]    → 301 → /notes/[slug]       (legacy)
```

## Content collections

Defined in `src/content.config.ts`. All loaders use Astro's `glob` or `file` loaders.

| Collection | Source | Schema highlights |
|---|---|---|
| `notes`   | `src/data/notes/**/*.md`             | `archived` (default `true`), `pubDatetime`, `tags`, original astro-paper-style fields |
| `papers`  | `src/data/papers/**/*.{md,mdx}`      | `authors` (with optional `isMe`), `venue`, `venueDetail`, `status` (`preprint`/`under-review`/`accepted`/`published`), `arxivId`, `links`, `keyNumbers`, `bibtex`, `teaserVideo`/`teaserPoster`, `hasProjectPage`+`projectPageSlug` |
| `featured`| `src/data/featured/**/*.{md,mdx}`    | `title`, `eyebrow`, `order`, `status`, `statusVariant`, `summary`, `metaTags`, `badges`, `links` |
| `projects`| `src/data/projects.json`             | `id`, `name`, `description`, `repo`, `language`, `license`, `spotlight`, `partOf`, `order` |

## Adding content

### A new paper

Drop a `.md` into `src/data/papers/`. Required: `title`, `authors`, `venue`, `status`, `year`, `pubDatetime`, `abstract`. Optional: `arxivId`, `links`, `featured`, `tldr`, `keyNumbers`, `bibtex`, `teaserVideo`, `teaserPoster`. Set `hasProjectPage: true` + `projectPageSlug: "<slug>"` to wire up a dedicated landing page (`/<slug>`); see `/anvil` for the precedent.

### A new home-page featured item

Drop a `.md` into `src/data/featured/`. Required: `title`, `summary`. Optional: `eyebrow`, `order`, `status`, `statusVariant` (`live`/`in-progress`/`archived`), `metaTags`, `badges`, `links`. The home page renders all entries sorted by `order`.

### A new project

Add an entry to `src/data/projects.json`. `spotlight: true` surfaces it in the home-page Selected OSS grid; otherwise it's only on `/projects`.

### A new note

Don't. The `notes` collection is a frozen 2024 archive. New long-form writing belongs in a new collection (e.g., `writing`) — add a schema and route, don't repurpose `notes`.

## Visual & typographic conventions

- **Sans**: Inter — almost everything that's an English word a human reads.
- **Mono**: JetBrains Mono — code blocks, numeric measurements ("12.8 ms"), email/URL, eyebrow labels (`Featured · 01`), status badges (`● Live`), `<kbd>`. **Don't `font-mono` an English word.**
- **Colors**: emerald accent, near-pure black/white backgrounds, three foreground levels: `text-foreground` (default body), `text-foreground/80` (lead/secondary), `text-muted-foreground` (metadata/captions/eyebrow).
- **Buttons**: bordered pill, mono-labeled when the text is a code-ish identifier, sans otherwise.
- **Inline links** in prose: no underline by default, dotted underline + accent on hover. Avoids "dotted soup" in dense paragraphs.

## Special pages

### `/anvil`

Single-paper landing for ANVIL (Submitted to IEEE TCSVT, first-author Shibo Liu). Top-down sections: hero → TL;DR → problem → idea → architecture (figure) → pipeline (figure) → results (table + figures) → quantization analysis → components (links to training repo and mobile demo) → limitations → BibTeX. Figures live in `public/anvil/figures/`. Teaser video at `public/anvil/teaser.mp4` (~31 MB, 1920×870, H.264, 60 fps), poster at `public/anvil/teaser-poster.jpg`.

### `/notes`

Archive of 2024 reading and study notes. Each detail page shows an "archived" banner. URL `/posts/*` 301-redirects to `/notes/*` via `astro.config.ts` `redirects`. Don't add new notes here.

### `/papers`

Year-grouped list. First-author names rendered bold via `isMe: true` in the `authors` array. Status pills: `Under review` (amber), `Preprint` (muted), `Accepted` / `Published` (emerald).

## Easter eggs

- HTML comment in `Layout.astro`: `btw, i use arch.`
- Inline `console.log` in `Layout.astro`: ASCII Arch logo + same tagline, in Arch blue (#1793D1).
- Footer attribution: "Built with [✦ Claude]" linking to claude.com/claude-code.

## llms.txt

`public/llms.txt` (and optional `public/llms-full.txt`) is a curated machine-readable site index for LLM crawlers, following the llmstxt.org convention. Regenerate when featured items, papers, or top-level pages change materially.

## Build/runtime gotchas

- **Pagefind on Windows ARM64**: no native binary; build warns and skips. Production CI (Linux x64) handles it.
- **GitHub `user-attachments` videos cannot be hotlinked** cross-origin (verified 2026-04). All teaser/demo media must be locally hosted under `public/`.
- **Astro view transitions** (`<ClientRouter />`): re-run client scripts that bind to DOM via `astro:page-load` listeners; the `AnvilTeaser` component already does this.
- **JetBrains Mono + Inter** are loaded via `experimental.fonts` (Astro 5). Adjusting weights or styles requires re-running `bun astro sync`.

## Conventions when working in this repo

- Run `bun astro check` before committing — it must pass with 0 errors. (Hints are OK.)
- `npm install -g`, `pip install` etc. are forbidden. Use `bun add` for project deps; `uvx`/`uv run` for one-off Python tools; `scoop` for user-scope CLI binaries.
- Use the existing collections — don't bypass them by hard-coding lists in pages.
- New components live in `src/components/`; use kebab-case-class wrappers, PascalCase filenames.
- Markdown content uses regular HTML where MDX would otherwise be needed; the project does not have `@astrojs/mdx` installed.
