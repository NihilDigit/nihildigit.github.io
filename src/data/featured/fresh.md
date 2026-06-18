---
title: "sinelaw/fresh"
titleHref: "https://github.com/sinelaw/fresh"
repo: "sinelaw/fresh"
fallbackStars: 7500
eyebrow: "Open Source"
order: 3
status: "Contributing"
statusVariant: live
summary: "Fresh is a terminal IDE and text editor I use enough to care about edge cases. My upstream work focuses on platform packaging and editor behavior fixes."
contributions:
  - status: done
    diffstat: "+54/-13"
    label: "Windows ARM64 release artifacts"
    detail: "Merged upstream. Adds Windows ARM64 release artifacts to the Fresh release pipeline, making the editor easier to install on Windows on Arm devices."
    links:
      - label: "PR #2353"
        href: "https://github.com/sinelaw/fresh/pull/2353"
  - status: done
    diffstat: "+793/-166"
    label: "vi-mode unnamed register behavior"
    detail: "Merged upstream. Updates vi-mode delete, change, and yank operations so the unnamed register follows expected editor behavior."
    links:
      - label: "PR #2368"
        href: "https://github.com/sinelaw/fresh/pull/2368"
links: []
---

Fresh is one of the tools where my contributions come from daily-editor friction: a packaging gap on Windows on Arm, then a vi-mode behavior mismatch worth taking upstream.
