---
title: "ANVIL: Accelerator-Native Video Interpolation via Codec Motion Vector Priors"
authors:
  - name: Shibo Liu
    isMe: true
venue: "IEEE TCSVT"
venueDetail: "Submitted to IEEE Transactions on Circuits and Systems for Video Technology · arXiv:2603.26835"
status: under-review
year: 2026
pubDatetime: 2026-03-27
arxivId: "2603.26835"
teaserVideo: "/anvil/teaser.mp4"
teaserPoster: "/anvil/teaser-poster.jpg"
abstract: |
  Real-time 30-to-60 fps video frame interpolation on mobile neural processing units (NPUs) requires each synthesized frame within 33.3 ms. We show that mainstream flow-based video frame interpolation faces three structural deployment barriers on mobile NPUs: spatial sampling operators exceed the frame budget or lack hardware support, iterative flow refinement collapses under 8-bit integer post-training quantization, and memory-bound operators dominate the inference graph. ANVIL addresses these barriers by reusing motion vectors from the H.264/AVC decoder to prealign input frames, removing learned optical flow, spatial sampling, and iterative accumulation from the accelerator graph. The remaining residual is refined by a convolution-dominated network composed almost entirely of compute-bound operators. On a Snapdragon 8 Gen 3 device, ANVIL achieves 12.8 ms 1080p inference at 8-bit integer precision; an open-source Android player sustains 28.4 ms median end-to-end latency over 30-minute continuous playback. Per-operator causal analysis identifies quantized accumulation on recurrent flow states as a key mechanism behind integer quantization failure in iterative methods. The current design targets H.264/AVC playback with decoder-exposed motion vectors.
tldr: "Real-time 30→60 fps video frame interpolation on mobile NPUs by reusing H.264 motion vectors instead of learned optical flow. 12.8 ms 1080p inference at 8-bit integer precision; 28.4 ms median end-to-end latency on Snapdragon 8 Gen 3."
links:
  - label: arXiv
    href: https://arxiv.org/abs/2603.26835
  - label: Training Code
    href: https://github.com/NihilDigit/anvil
  - label: Mobile Demo
    href: https://github.com/NihilDigit/mpv-android-anvil
  - label: APK · 8 Gen 3 Only · 155 MB
    href: https://github.com/NihilDigit/mpv-android-anvil/releases/download/v1.3.0/anvil-demo-v1.3.0-arm64.apk
featured: true
hasProjectPage: true
projectPageSlug: anvil
keyNumbers:
  - value: "12.8 ms"
    caption: "1080p NPU inference, 8-bit integer"
  - value: "28.4 ms"
    caption: "Median end-to-end latency, Snapdragon 8 Gen 3"
  - value: "30 → 60 fps"
    caption: "Real-time frame doubling on mobile"
bibtex: |
  @article{liu2026anvil,
    title   = {ANVIL: Accelerator-Native Video Interpolation via Codec Motion Vector Priors},
    author  = {Liu, Shibo},
    journal = {arXiv preprint arXiv:2603.26835},
    year    = {2026}
  }
---

<!-- Body content lives in src/pages/anvil.astro to allow rich figure/table layout.
     This file holds frontmatter (metadata) consumed by index.astro and anvil.astro. -->

