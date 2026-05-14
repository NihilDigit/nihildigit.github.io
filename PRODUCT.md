## Design Context

### Users

**Primary**: Academic peers, recruiters, fellow researchers, and OSS-curious developers landing on a research portfolio. They arrive in one of three states:

- **Skim mode** — recruiter / PI / collaborator deciding in 15 seconds whether this person is serious. They need: who, what work, what status, where to dig deeper.
- **Paper mode** — someone arrived from arXiv / a citation / a tweet, looking for one specific project (currently ANVIL). They need: TL;DR, figures, code, BibTeX, all immediately scannable.
- **Browse mode** — engineer who saw an OSS project and wants to know what else this person makes. They need: project list, languages, repos, a sense of taste.

The site is not for general consumers. Users are technically literate, comfortable with mono fonts, code blocks, and arXiv IDs.

### Brand Personality

**Three words: Hacker · Playful · Honest.**

- **Hacker** — terminal-native sensibility. Box-drawing characters, eyebrow labels like `Featured · 01`, `font-mono` for any code-shaped identifier (file paths, version numbers, metric values, kbd). The "btw, i use arch." HTML comment and the Arch-blue ASCII logo in `console.log` are not jokes layered on top — they're load-bearing personality signals.
- **Playful** — easter eggs allowed and encouraged where they don't compromise scannability. The site should feel like a specific person made it, not a template.
- **Honest** — no marketing language, no "leveraging synergies," no fake urgency. If a paper is under review, it says `Under review`. If a note is from 2024 and frozen, the banner says so. Status is signal, not decoration.

Emotional goal: a visitor closes the tab thinking _"this person ships, has taste, and isn't trying to fool me."_

### Aesthetic Direction

**References (positive)**:

- **Terminal / TUI showcases** — charm.sh, ratatui demos, glow, gum. Mono type, box-drawing rules, status pills that read like CLI output, tabular-nums for any number a human will compare.
- **Research paper project pages** — Anthropic / OpenAI single-paper landings. Figure-first when there's a figure. TL;DR up top. Key numbers as a 3-column metric strip. BibTeX block at the bottom. The `/anvil` page is the in-house realization of this.

**Anti-references (rejected explicitly)**:

- **Generic SaaS landing aesthetic** — gradient hero, glassmorphism cards, oversized one-word headlines, "Built for teams that ship." Avoid.
- **Old-style academic homepages** — Jekyll/al-folio, gray background, blue underlined links, dated grid of headshots. Avoid.
- **Notion / Substack long-form blog look** — emoji callouts, `> Quote of the day`, big drop caps, "5 min read" pill, full-bleed prose with no structure. Avoid; prose-mode pages still need scaffolding.
- **AI-generated "perfect but soulless"** — pixel-perfect spacing, zero friction, every component flawless, no trace of a human. Avoid; deliberate texture is the point.

**Theme**: Both light and dark, with light as default. Near-pure backgrounds (`#ffffff` / `#0a0a0a`), three foreground levels (`text-foreground`, `text-foreground/80` for lead/secondary, `text-muted-foreground` for metadata), single emerald accent (`#047857` light / `#34d399` dark). Status colors only for status semantics: emerald = live/published, amber = under-review/in-progress, zinc = archived.

### Design Principles

1. **Hacker shell, classical bones.** The visible layer is modern, terminal-flavored, slightly rough — `Featured · 01`, box-drawing rules, status pills, Arch easter eggs. The invisible layer underneath (type scale, measure, leading, hierarchy, contrast) follows orthodox typography by the book. The skeleton stays rigid precisely _so that_ the surface can be playful without falling apart. If the shell ever fights the bones, the bones win.

2. **Personality before polish, in the shell.** Within the bounds of Principle 1: a site that's distinctive and slightly rough beats a site that's flawless and forgettable. When in doubt between "cleaner" and "more characteristic," pick characteristic. The Arch comment, the `──────────` rule, the eyebrow numbering, the ASCII console log — signature, not noise.

3. **Typography is rule-bound, not negotiable.** Inter for reading, JetBrains Mono for labeling code-shaped things — never reversed. Body sits around 16–18px with measure ≤ 75ch (`max-w-prose-app` = 38rem ≈ 65ch is correct). Leading scales with size: tight (`tracking-tight`, `letter-spacing: -0.02em`) for display, normal for body, never loose. Hierarchy reads from a glance: one h1 per page, descending h2/h3 by size _and_ role, no skipped levels for "vibes." Numbers that compare are `tabular-nums`. Long-form prose uses `max-w-prose-app`, never full-bleed. These are not preferences — they are the structural integrity that lets the shell be loud.

4. **Mono is a semantic tool, not a style.** Use `font-mono` for things that _are_ code-shaped: file paths, version strings, arXiv IDs, metric values, kbd, status badges, eyebrow labels, code-ish identifiers. **Never `font-mono` an English sentence a human reads.** Inter does the reading; JetBrains Mono does the labeling.

5. **Figure-first for research, list-first for OSS, prose-last for everything.** Visual artifacts (teaser videos, architecture diagrams, key-number strips) earn the top of the page when they exist. Long prose belongs after the user has decided to dig in. The home page hero is the only place prose leads.

6. **Animation is part of personality — keep the playful, gate it on motion preference.** Decorative animation is welcome (subtle hovers, fade-ins, ambient micro-motion that adds character). The only hard rule is `prefers-reduced-motion: reduce` must collapse animation cleanly to a static state — no broken layout, no missing content. Don't apologize for motion that's there for delight; just make it skippable.

7. **Status is signal.** Every status indicator (`● Live`, `Under review`, `Archived`, `Preprint`) maps to a specific real-world condition and a specific color/shape. Don't invent new status pills for vibes; if a piece of work doesn't fit an existing status, change the work, not the badge.

8. **Three levels of foreground, no fourth.** Default body, `/80` for lead/secondary, `muted-foreground` for metadata. If a fourth level seems necessary, the layout is doing too much — split the section or remove content instead of inventing a new gray.
