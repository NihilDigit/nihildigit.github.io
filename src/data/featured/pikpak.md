---
title: "Animeko × PikPak"
eyebrow: "Open Source Contribution"
order: 2
status: "Pending Upstream Review"
statusVariant: in-progress
summary: "Cloud offline-download backend for Animeko, an open-source anime streaming app. Downloads magnet links on overseas PikPak servers and serves them as HTTPS streams to local players, with fallback to BitTorrent. A Kotlin Multiplatform SDK was extracted from the work."
links:
  - label: "RFC #2976"
    href: "https://github.com/open-ani/animeko/issues/2976"
  - label: "PR #2978"
    href: "https://github.com/open-ani/animeko/pull/2978"
  - label: "animeko-pikpak (fork)"
    href: "https://github.com/NihilDigit/animeko-pikpak"
  - label: "pikpak-kotlin (SDK)"
    href: "https://github.com/NihilDigit/pikpak-kotlin"
---

PikPak provides cloud offline-download capability that complements peer-to-peer BitTorrent. The integration adds a backend-agnostic `OfflineDownloadEngine` interface so additional cloud providers (115, Xunlei) can be added later. Credentials are obscured at rest (AES-CTR) and excluded from settings backup. Coverage: 4 unit tests + 1 live smoke test, 33 files changed.
