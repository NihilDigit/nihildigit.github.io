#import "../vendor/grotesk-cv/src/lib.typ": cv

#let meta = (
  personal: (
    first_name: "Shibo",
    last_name: "Liu",
    language: "en",
    include_icons: false,
    info: (
      email: (link: "mailto:spencerliu@stu.ncst.edu.cn", label: "spencerliu@stu.ncst.edu.cn"),
      website: (link: "https://nihildigit.dev", label: "nihildigit.dev"),
      github: (link: "https://github.com/NihilDigit", label: "github.com/NihilDigit"),
      orcid: (link: "https://orcid.org/0009-0004-9426-3713", label: "ORCID 0009-0004-9426-3713"),
    ),
    icon: (
      email: "mail",
      website: "website",
      github: "github",
      orcid: "orcid",
    ),
    ia: (
      inject_ai_prompt: false,
      inject_keywords: false,
      keywords_list: (),
    ),
  ),
  layout: (
    fill_color: "#ffffff",
    paper_size: "a4",
    accent_color: "#d4d2cc",
    text: (
      font: "DejaVu Sans",
      size: "10pt",
      color: (
        light: "#ededef",
        medium: "#78787e",
        dark: "#3c3c42",
      ),
    ),
  ),
  language: (
    en: (
      subtitle: "",
      cv_document_name: "CV",
      ai_prompt: "",
    ),
  ),
)

#let size-name = 22pt
#let size-section = 12.5pt
#let size-entry = 10.5pt
#let size-meta = 9pt

#let gap-section = 20pt
#let gap-entry = 16pt

#let color-dark = rgb(meta.layout.text.color.dark)
#let color-muted = rgb(meta.layout.text.color.medium)
#let link-color = rgb("#2f6f68")

#let contact-links = (
  "mailto:spencerliu@stu.ncst.edu.cn",
  "https://nihildigit.dev",
  "https://github.com/NihilDigit",
  "https://orcid.org/0009-0004-9426-3713",
)
#let cv-link(dest, body) = {
  let weight = if dest in contact-links { "medium" } else { "bold" }
  link(dest)[#text(weight: weight, underline(stroke: 0.35pt + link-color, offset: 1.5pt, body))]
}

// 图标资源与网站共用，里面写的是 fill="currentColor"。Typst 独立渲染 SVG，
// currentColor 会落到黑色，所以读进来替换成要的颜色再交给 image。
#let icon(name, color: color-dark, size: 10pt, baseline: 1.5pt) = box(
  baseline: baseline,
  image(
    bytes(read("/src/assets/icons/" + name).replace("currentColor", color.to-hex())),
    format: "svg",
    width: size,
  ),
)


#let proj(dest, name) = link(dest)[#text(fill: link-color, name)#h(1.5pt)#icon(
  "octicons/arrow-up-right-16.svg",
  color: link-color,
  size: 7pt,
  baseline: -0.5pt,
)]

#let section(glyph, title) = block(above: gap-section, below: 8pt, stack(
  dir: ttb,
  spacing: 5pt,
  [#icon(glyph, size: 11pt) #text(size: size-section, weight: "bold", fill: color-dark, tracking: 0.02em, title)],
  line(length: 100%, stroke: 0.6pt + rgb(meta.layout.accent_color)),
))

#let entry(title, date, role-line) = block(above: gap-entry, below: 11pt)[
  #if date == none {
    text(size: size-entry, weight: "bold", fill: color-dark, title)
  } else {
    grid(
      columns: (1fr, auto),
      column-gutter: 10pt,
      align: (left + bottom, right + bottom),
      text(size: size-entry, weight: "bold", fill: color-dark, title),
      text(size: size-meta, weight: "medium", fill: color-muted, date),
    )
  }
  #v(4pt)
  #text(fill: color-dark, weight: "medium", role-line)
]

#let selected-work = [
  #section("octicons/briefcase-16.svg")[Projects]

  #entry(
    [#proj("https://nihildigit.dev/anvil")[ANVIL] - Accelerator-Native Video Interpolation],
    [2026],
    [#icon("brands/arxiv.svg") Sole-author #cv-link("https://arxiv.org/abs/2603.26835")[arXiv:2603.26835] preprint],
  )

  - Reused H.264 decoder motion vectors as the motion prior, as MEMC and compression-domain methods do, with a convolutional residual network correcting them.
  - Selected the network's operators by their measured behaviour under INT8 quantization on the target NPU.
  - Ran the pipeline end to end in a #cv-link("https://github.com/NihilDigit/mpv-android-anvil")[fork of mpv-android]: 94.9% of frame pairs met the 33.3 ms budget at 30-to-60 fps.

  #entry(
    [#proj("https://nihildigit.dev/tongxing")[TongXing] - On-device Intelligent Assistive System for the Visually Impaired],
    [2025-2026],
    [#icon("octicons/trophy-16.svg") Project lead, 4C2026 National Second Prize],
  )

  - Real-time obstacle warning on a chest-mounted Snapdragon 8 Gen 3: detection, depth, segmentation, tracking and #box[distance/TTC] at 15 Hz, 35.16 ms against a 66.7 ms budget.
  - Three concurrent workloads on three processors to avoid contention: INT8 vision on the Hexagon NPU, Q4 Qwen3-1.7B on the Adreno GPU, speech and control on the CPU. The safety path is fully on-device; only scene description may call a cloud model.
  - Voice-only control over MCP tools and Android accessibility actions, with the local model scoped to intent parsing.

  #entry(
    [#proj("https://github.com/open-ani/animeko")[Animeko] - Kotlin Multiplatform Anime Player],
    [2026],
    [#icon("octicons/star-16.svg") Member of the #cv-link("https://github.com/open-ani")[open-ani] organization],
  )

  - 36 merged pull requests into animeko and its #cv-link("https://github.com/open-ani/mediamp")[mediamp] playback runtime, a 20k-star Compose Multiplatform app across Android, Windows, Linux, and macOS.
  - Added the Windows on Arm target with its hardware-decode backend and release packaging, and fixed Linux startup.
  - Added Windows touch input through JNA, and reworked how the app picks its device variant.
  - Added cloud offline download to the BitTorrent engine, with the client extracted as #cv-link("https://github.com/NihilDigit/pikpak-kotlin")[pikpak-kotlin], a KMP SDK on Maven.
  - Player features: configurable playback speed, screenshots, embedded subtitles, and cancellable seek.
]

#let education = [
  #section("octicons/mortar-board-16.svg")[Education]

  #entry(
    [B.S. Intelligence Science and Technology],
    none,
    [North China University of Science and Technology, 2023-2027],
  )

  - CET-6: 545.
]

#let awards = [
  #section("octicons/trophy-16.svg")[Awards]

  - #cv-link("https://jsjds.blcu.edu.cn/")[4C2026]: National Second Prize (work no. 2026023242).
  - #cv-link("https://www.apmcm.org/")[APMCM 2024]: Second Prize (work no. 24201176).
]

#show link: set text(fill: link-color)


#set par(leading: 0.8em, spacing: 0.9em)
#set list(marker: text(fill: color-muted, [‣]), spacing: 1em, body-indent: 0.5em)

#show: cv.with(
  meta,
  use-photo: false,
  left-pane: selected-work,
  right-pane: [
    #education
    #awards
  ],
  left-pane-proportion: 64%,
)
