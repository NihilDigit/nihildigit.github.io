---
title: "Open-source community notes"
eyebrow: "Community"
order: 4
summary: "Small, targeted upstream contributions and bug reports outside my long-running project work, grouped by theme — build and media tooling, editor and desktop fixes, and one diagnosed issue."
contributions:
  - status: done
    group: "Build & media tooling"
    diffstat: "+54/-0"
    label: "CMake bundled liblzma ARM64 BCJ filters"
    detail: "Merged upstream into Kitware/CMake. Enables `HAVE_DECODER_ARM64` / `HAVE_ENCODER_ARM64` in CMake's reduced bundled liblzma build, fixing `cmake -E tar` failing with `Lzma library error: Invalid options` on ARM64+LZMA2 7-Zip archives. Verified on native Windows ARM64 and Linux AArch64 (Fedora WSL), with a new RunCMake regression test."
    links:
      - label: "MR !12202"
        href: "https://gitlab.kitware.com/cmake/cmake/-/merge_requests/12202"
  - status: done
    group: "Build & media tooling"
    diffstat: "+496/-140"
    label: "pikpakcli time-range download"
    detail: "Merged upstream. Adds a `--time-range` option for downloading a clipped segment from a single remote video through ffmpeg stream copy, with tests for parsing, output names, media URL selection, and missing-ffmpeg errors."
    links:
      - label: "PR #64"
        href: "https://github.com/52funny/pikpakcli/pull/64"
  - status: done
    group: "Build & media tooling"
    diffstat: "+45/-4"
    label: "media-kit Windows ARM64 libmpv"
    detail: "Merged upstream. Adds Windows ARM64 libmpv support to media-kit for Kazumi, a Dart anime streaming app built around custom source rules, online playback, danmaku, and real-time super resolution."
    links:
      - label: "PR #34"
        href: "https://github.com/Predidit/media-kit/pull/34"
      - label: "Kazumi"
        href: "https://github.com/Predidit/Kazumi"
  - status: done
    group: "Editor & desktop"
    diffstat: "+847/-179"
    label: "fresh vi-mode behavior & Windows ARM64 releases"
    detail: "Two merged patches to sinelaw/fresh, one of my everyday editors: vi-mode delete/change/yank operations now follow expected unnamed-register behavior, and the release pipeline ships Windows ARM64 artifacts for Windows on Arm devices."
    links:
      - label: "PR #2368"
        href: "https://github.com/sinelaw/fresh/pull/2368"
      - label: "PR #2353"
        href: "https://github.com/sinelaw/fresh/pull/2353"
  - status: done
    group: "Editor & desktop"
    diffstat: "+59/-13"
    label: "DankMaterialShell WiFi connection progress"
    detail: "Merged upstream. Exposes `isConnecting` / `connectingSSID` from the DMS network service so the shell shows a row-level connecting state with a spinner and blocks duplicate attempts while a WiFi connection is in progress."
    links:
      - label: "PR #2684"
        href: "https://github.com/AvengeMedia/DankMaterialShell/pull/2684"
  - status: closed
    group: "Diagnosed issues"
    label: "llama.cpp CJK tool-call issue"
    detail: "Diagnosed a llama.cpp CJK tool-call history pollution bug around `ensure_ascii=true` argument serialization, in the parser/tool-call subsystem later reshaped by the [autoparser refactor](https://github.com/ggml-org/llama.cpp/pull/18675)."
    links:
      - label: "Issue #19391"
        href: "https://github.com/ggml-org/llama.cpp/issues/19391"
links: []
---

These notes collect upstream work that is useful to record, but does not belong to a single long-running project page.
