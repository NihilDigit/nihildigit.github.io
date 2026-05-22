---
title: "Open-source community notes"
eyebrow: "Community"
order: 3
summary: "Small, targeted upstream contributions and bug reports outside my own repositories, collected separately from my long-running project work."
contributions:
  - status: done
    diffstat: "+496/-140"
    label: "pikpakcli time-range download"
    detail: "Merged upstream. Adds a `--time-range` option for downloading a clipped segment from a single remote video through ffmpeg stream copy, with tests for parsing, output names, media URL selection, and missing-ffmpeg errors."
    links:
      - label: "PR #64"
        href: "https://github.com/52funny/pikpakcli/pull/64"
  - status: closed
    label: "llama.cpp CJK tool-call issue"
    detail: "Diagnosed a llama.cpp CJK tool-call history pollution bug around `ensure_ascii=true` argument serialization, in the parser/tool-call subsystem later reshaped by the [autoparser refactor](https://github.com/ggml-org/llama.cpp/pull/18675)."
    links:
      - label: "Issue #19391"
        href: "https://github.com/ggml-org/llama.cpp/issues/19391"
links: []
---

These notes collect upstream work that is useful to record, but does not belong to a single long-running project page.
