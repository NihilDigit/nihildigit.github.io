---
title: "open-ani/animeko"
titleHref: "https://github.com/open-ani/animeko"
repo: "open-ani/animeko"
fallbackStars: 17720
eyebrow: "Open Source"
order: 2
status: "Contributing"
statusVariant: live
summary: "As an upstream contributor to Animeko, an open-source anime streaming app I use regularly, I work on cloud download, platform support, and smaller UI/data-flow pieces across the app."
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
    diffstat: "+1,753/-17"
    label: "HLS manifest filtering"
    detail: "Open upstream PR for experimental HLS ad-segment filtering before playback reaches the platform player, using a playback-scoped localhost proxy while keeping ExoPlayer, VLC, AVKit, and mediamp boundaries unchanged."
    links:
      - label: "RFC #3039"
        href: "https://github.com/open-ani/animeko/issues/3039"
      - label: "PR #3097"
        href: "https://github.com/open-ani/animeko/pull/3097"
  - status: done
    diffstat: "+352/-34"
    label: "mediamp Windows ARM64 FFmpeg runtime"
    detail: "Merged upstream. Adds Windows ARM64 FFmpeg runtime support to mediamp, covering the media runtime piece needed by Animeko on Windows on Arm."
    links:
      - label: "mediamp PR #32"
        href: "https://github.com/open-ani/mediamp/pull/32"
  - status: active
    diffstat: "+258/-16"
    label: "WOA64 build support"
    detail: "Open follow-up track for running Animeko on Windows on Arm64: upstreaming the anitorrent native runtime piece while keeping a known-good workspace that can produce portable zip builds."
    links:
      - label: "anitorrent PR #3"
        href: "https://github.com/open-ani/anitorrent/pull/3"
      - label: "workspace"
        href: "https://github.com/NihilDigit/animeko-woa64"
links: []
---

Animeko is the ACGN project I keep returning to: some work lands as upstream PRs, some starts as fork-stack coordination, and smaller follow-up tasks keep the app wired together.
