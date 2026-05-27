#import "../vendor/grotesk-cv/src/lib.typ": cv, experience-entry, education-entry

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
      size: "8.5pt",
      color: (
        light: "#ededef",
        medium: "#78787e",
        dark: "#3c3c42",
      ),
    ),
  ),
  language: (
    en: (
      subtitle: "Undergraduate Student · Reliable On-device AI Systems & Local Agents",
      cv_document_name: "CV",
      ai_prompt: "",
    ),
  ),
)

#let link-color = "#2f6f68"
#let contact-links = (
  "mailto:spencerliu@stu.ncst.edu.cn",
  "https://nihildigit.dev",
  "https://github.com/NihilDigit",
  "https://orcid.org/0009-0004-9426-3713",
)
#show link: set text(fill: rgb(link-color))
#let cv-link(dest, body) = {
  let weight = if dest in contact-links { "medium" } else { "bold" }
  link(dest)[#text(weight: weight, underline(stroke: 0.35pt + rgb(link-color), offset: 1.5pt, body))]
}

#let summary = [
  = Summary

  Undergraduate student working on reliable on-device AI across mobile perception, NPU inference, and local agents. Focus on latency-critical, privacy-preserving, and accessibility-oriented deployments.
]

#let selected-work = [
  = Selected Work

  #experience-entry(
    title: [ANVIL - Accelerator-Native Video Interpolation],
    date: [2026],
    company: [Sole-author manuscript under review at #cv-link("https://ieee-cas.org/publication/tcsvt")[IEEE TCSVT]; #cv-link("https://arxiv.org/abs/2603.26835")[arXiv:2603.26835]],
  )

  - Built a 30-to-60 fps video interpolation system under mobile NPU, INT8, and end-to-end playback latency constraints.
  - Reused H.264 decoder motion vectors as a deployment-friendly motion prior, replacing learned optical flow and GridSample-heavy flow refinement with prealignment plus a convolutional residual network; additive skips cut latency 17-26% in A/B tests.
  - Forked mpv-android into a real playback harness and ran the full CPU/GPU/NPU pipeline on Xiph 1080p sequences: 12.8 ms 1080p INT8 NPU inference, 28.4 ms median end-to-end latency over 54,623 consecutive frame pairs, 94.9% within the 33.3 ms budget.

  #v(5pt)

  #experience-entry(
    title: [TongXing - On-device Assistive Agent],
    date: [2025-2026],
    company: [Competing in 4C2026 Hebei provincial round],
  )

  - Built the on-device safety loop for blind and low-vision mobility: detection → depth → segmentation → tracking → distance/TTC → warning priority, all on a single Android phone.
  - Deployed INT8 vision models on Hexagon NPU and a Q4-quantized Qwen3-1.7B on Adreno GPU via llama.cpp/OpenCL, with offline speech/control on CPU. Safety perception averaged 35.16 ms over 1,636 walking frames, under the 66.7 ms budget for a 15 Hz warning loop.
  - Closed the digital-accessibility gap in touch-first apps by routing navigation, ride-hailing, transit, weather, and vision tasks through a voice loop backed by MCP tools and Android accessibility actions, while keeping the safety path local and isolated from assistant tasks.

  #v(5pt)

  #experience-entry(
    title: [RAFNet - Dense Classroom Behavior Recognition],
    date: [2025-2026],
    company: [Under review at #cv-link("https://link.springer.com/journal/371")[The Visual Computer]],
  )

  - Third author; designed evaluation and ablations for gated fusion over #cv-link("https://github.com/boycehbz/GroupRec")[GroupRec (ICCV 2023)] relation context and ConvNeXt appearance features.
  - Reached 63.08 ± 0.40 Macro F1 on the self-built NCST Classroom dataset (+2.79 over ConvNeXt-only) and 96.76 cross-dataset Macro F1 on SCB3-U.
]

#let open-source = [
  = Open Source

  - *#cv-link("https://github.com/open-ani/animeko")[Animeko] / #cv-link("https://github.com/NihilDigit/pikpak-kotlin")[pikpak-kotlin]:* merged PikPak cloud offline-download into open-ani/animeko, an 18k-star app, with streaming, BitTorrent fallback, credential handling, and a Maven-published KMP SDK.
  - *#cv-link("https://github.com/NihilDigit/waybar-ai-usage")[waybar-ai-usage]:* maintains an AUR-packaged Waybar quota widget for coding agents; 40+ stars and 8 accepted external contributions.
]

#let education = [
  = Education

  #education-entry(
    degree: [B.S.#linebreak()Intelligence Science and Technology],
    date: [2023-2027],
    institution: [North China University of Science and Technology],
    location: [Tangshan, China],
  )

  - CET-4: 548.
]

#let awards = [
  = Awards

  - #cv-link("https://jsjds.blcu.edu.cn/")[4C2026]: 1st Prize, university round; provincial round in progress.
  - #cv-link("https://jsjds.blcu.edu.cn/")[4C2025]: 3rd Prize, Hebei provincial round.
  - #cv-link("https://www.apmcm.org/")[APMCM 2024]: Second Prize.
]

#let skills = [
  = Skills

  *Efficient edge ML:* mobile NPU/GPU heterogeneous pipelines, INT8 quantization, latency-budgeted inference, media/playback integration, profiling and benchmarking.

  *Local agent systems:* on-device LLM deployment, MCP tool-use workflows, Android accessibility automation, offline-first design.

  *Human-centered deployment:* interaction design, accessibility-oriented UX, task-oriented interfaces, user-facing reliability.
]

#let links = [
  = Links

  - #cv-link("https://nihildigit.dev/tongxing")[TongXing Showcase]
  - #cv-link("https://nihildigit.dev/anvil")[ANVIL Showcase]
  - #cv-link("https://arxiv.org/abs/2603.26835")[ANVIL arXiv]
  - ANVIL: #cv-link("https://github.com/NihilDigit/anvil")[Code] / #cv-link("https://github.com/NihilDigit/mpv-android-anvil")[Player]
  - #cv-link("https://github.com/NihilDigit/RAFNet")[RAFNet OSS Repo]
]

#show: cv.with(
  meta,
  use-photo: false,
  left-pane: [
    #summary
    #v(12pt)
    #selected-work
    #v(14pt)
    #open-source
  ],
  right-pane: [
    #education
    #v(12pt)
    #awards
    #v(12pt)
    #skills
    #v(12pt)
    #links
  ],
  left-pane-proportion: 68%,
)
