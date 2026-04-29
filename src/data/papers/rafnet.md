---
title: "RAFNet: A Relation-Aware Adaptive Fusion Network for Dense Classroom Student Behavior Recognition"
authors:
  - name: "Yongying Xia*"
  - name: "Elankovan A. Sundararajan"
  - name: "Shibo Liu"
    isMe: true
  - name: "Lei Xiao"
venue: "The Visual Computer"
venueDetail: "Submitted to The Visual Computer (Springer) · UKM × NCST collaboration"
status: under-review
year: 2026
pubDatetime: 2026-01-01
abstract: |
  RAFNet classifies individual student behaviors in dense classroom imagery by fusing two complementary feature streams: relation embeddings from a pretrained GroupRec hypergraph encoder (capturing group dynamics and peer interactions) and appearance features from ConvNeXt-Base (encoding visual evidence). The fusion mechanism employs a gated architecture weighted per sample with entropy regularization during training. On the NCST Classroom dataset, RAFNet achieves 63.08 ± 0.40 Macro F1, improving over the ConvNeXt-only baseline (60.29 ± 0.38). Cross-dataset performance on SCB3-U reaches 96.76 Macro F1.
tldr: "Spatially-aware multimodal fusion for dense classroom student behavior recognition. Third-author contribution: experiments and ablations."
links:
  - label: GitHub
    href: https://github.com/NihilDigit/RAFNet
featured: false
hasProjectPage: false
keyNumbers:
  - value: "63.08"
    caption: "Macro F1 on NCST Classroom"
  - value: "96.76"
    caption: "Macro F1 on SCB3-U (cross-dataset)"
---

## Affiliations

1. Faculty of Information Science and Technology, Universiti Kebangsaan Malaysia (UKM), Bangi, Selangor, Malaysia
2. School of Economics and Management, North China University of Science and Technology, Tangshan, China
3. College of Science, North China University of Science and Technology, Tangshan, China

**Author affiliations:** Y. Xia (1, 2; corresponding), E. A. Sundararajan (1), S. Liu (3), L. Xiao (1).

Third-author contribution: experiment design, evaluation, and ablation studies.
