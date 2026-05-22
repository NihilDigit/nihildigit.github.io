---
title: "open-ani/animeko"
titleHref: "https://github.com/open-ani/animeko"
repo: "open-ani/animeko"
fallbackStars: 17720
eyebrow: "Open Source"
order: 2
status: "Contributing"
statusVariant: live
summary: "As an upstream contributor to Animeko, an open-source anime streaming app, I work on cloud download, platform support, and smaller UI/data-flow pieces across the app."
contributions:
  - status: done
    diffstat: "+3,054/-41"
    label: "PikPak cloud offline-download"
    detail: "Merged upstream. Adds a cloud-backed alternative to local BitTorrent, with HTTPS stream handoff, transparent fallback, credential handling, and a reusable Kotlin Multiplatform SDK extracted from the work."
    links:
      - label: "RFC #2976"
        href: "https://github.com/open-ani/animeko/issues/2976"
      - label: "PR #2978"
        href: "https://github.com/open-ani/animeko/pull/2978"
  - status: active
    diffstat: "WIP"
    label: "WOA64 build support"
    detail: "Workaround track for running Animeko on Windows on Arm64 today: upstreaming the mediamp FFmpeg runtime piece while keeping a known-good workspace that can produce portable zip builds."
    links:
      - label: "mediamp PR #32"
        href: "https://github.com/open-ani/mediamp/pull/32"
      - label: "anitorrent PR #3"
        href: "https://github.com/open-ani/anitorrent/pull/3"
      - label: "workspace"
        href: "https://github.com/NihilDigit/animeko-woa64"
  - status: planned
    label: "Danmaku timing refactor"
    detail: "Planned refactor of the danmaku pipeline to address timing drift and offset handling, so comments stay aligned with playback across seeks, buffering, and source changes."
  - status: planned
    label: "Character detail wiring"
    detail: "Planned smaller upstream UI/data-flow work around connecting character detail pages into the app."
links: []
---

Animeko is the ACGN project I keep returning to: some work lands as upstream PRs, some starts as fork-stack coordination, and smaller follow-up tasks keep the app wired together.
