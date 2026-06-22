---
title: "sinelaw/fresh"
titleHref: "https://github.com/sinelaw/fresh"
repo: "sinelaw/fresh"
fallbackStars: 7500
eyebrow: "Open Source"
order: 3
status: "Contributing"
statusVariant: live
summary: "Fresh is one of my everyday editors. My upstream work focuses on making its vi_mode closer to the editing behavior I expect, with occasional platform and terminal UI fixes around the same workflow."
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
  - status: done
    diffstat: "+494/-47"
    label: "settings TUI mouse polish"
    detail: "Merged upstream. Polishes settings-screen mouse interactions and dirty-state markers so configuration edits behave more predictably in the terminal UI."
    links:
      - label: "PR #2395"
        href: "https://github.com/sinelaw/fresh/pull/2395"
  - status: done
    diffstat: "+1,883/-30"
    label: "vi-mode compatibility motions"
    detail: "Merged upstream. Adds more vi-mode compatibility motions and word-search behavior for editor navigation."
    links:
      - label: "PR #2398"
        href: "https://github.com/sinelaw/fresh/pull/2398"
links: []
---

Fresh is one of the editors I keep open day to day. Most of the work here comes from using vi_mode long enough to notice mismatches, then turning those fixes into upstream patches.
