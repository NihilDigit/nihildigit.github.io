---
name: NihilDigit
description: Hacker-playful research portfolio for edge AI, video systems, and OSS work.
colors:
  background-light: "#ffffff"
  foreground-light: "#0a0a0a"
  muted-light: "#f4f4f5"
  muted-foreground-light: "#71717a"
  border-light: "#e4e4e7"
  accent-light: "#047857"
  accent-foreground-light: "#ffffff"
  code-bg-light: "#fafafa"
  background-dark: "#0a0a0a"
  foreground-dark: "#fafafa"
  muted-dark: "#18181b"
  muted-foreground-dark: "#a1a1aa"
  border-dark: "#27272a"
  accent-dark: "#34d399"
  accent-foreground-dark: "#052e1e"
  code-bg-dark: "#111113"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem to 3rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem to 2.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  sm: "0.125rem"
  md: "0.375rem"
  full: "9999px"
spacing:
  app-x-mobile: "1.25rem"
  app-x-desktop: "2rem"
  section-y: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.foreground-light}"
    textColor: "{colors.background-light}"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.875rem"
  button-secondary:
    backgroundColor: "{colors.background-light}"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.875rem"
  status-badge:
    textColor: "{colors.muted-foreground-light}"
    typography: "{typography.label}"
---

# Design System: NihilDigit

## 1. Overview

**Creative North Star: "The Research Shell"**

The site should feel like a serious research portfolio running inside a carefully tuned terminal session. The bones are classical: clear hierarchy, narrow prose measure, one h1 per page, strong figure placement, and predictable navigation. The shell is personal: mono labels, box-drawing rules, status dots, Arch references, and terse copy that does not try to sell harder than the work deserves.

This system rejects generic SaaS polish, old academic homepage nostalgia, Notion-style long-form softness, and soulless AI-perfect symmetry. It is allowed to be slightly rough when that roughness reads as authorship, but the roughness must never hurt scan speed, contrast, keyboard access, or research credibility.

**Key Characteristics:**

- Figure-first research pages, list-first OSS pages, prose after orientation.
- Light default with a complete dark theme.
- One emerald accent, used sparingly for links, focus, live status, and selected states.
- Mono type only for code-shaped labels, identifiers, metrics, badges, and paths.
- Flat surfaces with borders and tonal fills instead of decorative depth.

## 2. Colors

The palette is near-monochrome with one emerald accent, tuned for terminal clarity rather than decorative warmth.

### Primary

- **Terminal Emerald** (`#047857` light, `#34d399` dark): used for links on hover, focus outlines, selected states, live/published status, and the small number of moments that need emphasis.

### Neutral

- **Paper White** (`#ffffff`): light theme page background.
- **Ink Black** (`#0a0a0a`): light theme foreground and dark theme page background.
- **Soft Zinc** (`#f4f4f5`, `#18181b`): muted fills for code blocks, search inputs, note banners, and research callouts.
- **Rule Zinc** (`#e4e4e7`, `#27272a`): dividers, figure borders, table rules, and component outlines.
- **Metadata Zinc** (`#71717a`, `#a1a1aa`): dates, venues, captions, secondary labels, and non-primary navigation.

### Named Rules

**The Three Foregrounds Rule.** Use only body foreground, `text-foreground/80`, and `text-muted-foreground`. If a fourth gray seems necessary, split or simplify the section.

**The Status Is Signal Rule.** Emerald means live, published, or active. Amber means in progress or under review. Zinc means archived or neutral. Do not invent new status colors for decoration.

## 3. Typography

**Display Font:** Inter with system sans fallback  
**Body Font:** Inter with system sans fallback  
**Label/Mono Font:** JetBrains Mono with system mono fallback

**Character:** Inter carries readable prose and research explanation. JetBrains Mono marks code-shaped objects: paths, version strings, metrics, badges, arXiv IDs, repo names, and compact labels.

### Hierarchy

- **Display** (600, `text-4xl` to `text-5xl`, tight leading): homepage hero and major page identity.
- **Headline** (600, `text-2xl` to `text-4xl`, tight leading): paper titles, section lead statements, and route headers.
- **Title** (500-600, `text-lg` to `text-xl`): project names, subsection headers, card-like list titles.
- **Body** (400, `text-base`, relaxed leading): explanations, abstracts, project summaries. Long prose should stay near `max-w-prose-app` (about 65ch).
- **Label** (mono, uppercase, tracked): eyebrow labels such as `Featured · 01`, `Publications`, status badges, figure labels, and table metadata.

### Named Rules

**The Semantic Mono Rule.** Never set an English sentence in mono just to make it look technical. Mono is for identifiers and labels; Inter is for reading.

## 4. Elevation

The system is flat by default. Depth comes from borders, dividers, tonal fills, and proximity. Shadows are reserved for utility affordances such as the mobile back-to-top button, not for primary page structure.

### Named Rules

**The Border Before Shadow Rule.** If a surface needs separation, use a one-pixel border or a muted fill first. Add shadow only when the component floats above the document flow.

## 5. Components

### Buttons

- **Shape:** modest radius (`0.375rem`), never pill-shaped unless the component is a literal dot or circular utility.
- **Primary:** foreground fill with background text, used for the main "read" action.
- **Secondary:** one-pixel border with transparent background, used for repo, paper, and external links.
- **Hover / Focus:** hover may shift border/text to accent; focus uses a dashed accent outline with offset.

### Chips

- **Style:** status chips are mono, uppercase, small, and paired with a dot when a real-world state is being communicated.
- **State:** avoid ornamental chips. A chip should describe status, metadata, or a filterable property.

### Cards / Containers

- **Corner Style:** small radius (`0.375rem`) only when framing media, figures, code, or a compact callout.
- **Background:** `bg-muted/20` to `bg-muted/40` for framed research artifacts and archived notes.
- **Shadow Strategy:** none at rest.
- **Border:** one-pixel `border-border`.
- **Internal Padding:** tight on list items, more generous on figures and callouts.

### Inputs / Fields

- **Style:** inherit Pagefind structure but override font, border, background, and primary color with site tokens.
- **Focus:** dashed or single-pixel accent outline, never a glow.
- **Error / Disabled:** use honest inline copy; do not introduce modal interruptions for search failures.

### Navigation

- **Header:** compact, mono home mark, small sans route labels, active state via accent underline.
- **Mobile:** menu button and utility buttons should remain at least 44px square.
- **Skip Link:** must remain available and visible on focus.

## 6. Do's and Don'ts

Do keep the hacker shell and classical bones together. Do make research pages immediately scannable through title, TL;DR, figures, links, metrics, and BibTeX. Do gate decorative motion with `prefers-reduced-motion`. Do use real status labels and real links.

Don't use gradient text, decorative glassmorphism, generic SaaS hero patterns, colored side-stripe callouts, or repeated icon-card grids. Don't use mono for normal prose. Don't add a new gray level or status color because a section feels visually flat. Don't replace the personal texture with template polish.
