---
title: Brain tumor segmentation in 3D MRI
context: Research paper · Team of two
order: 9
skim: "Compared three 3D models for brain tumor segmentation; the attention U-Net reached 0.88 whole-tumor Dice."
topics: [ml, health]
deep:
  - "Compared three models on BraTS 2020 multimodal MRI scans: a 3D U-Net baseline, a 3D Attention U-Net, and DubTransBTS, a transformer-based model built to capture long-range spatial context."
  - "Dice scores for the 3D U-Net: 0.870 whole tumor, 0.782 tumor core, 0.745 enhancing tumor. <mark>The Attention U-Net improved all three</mark>, most of all on the enhancing tumor: 0.881 / 0.786 / 0.796."
  - "DubTransBTS struggled to capture tumor detail (0.635 whole-tumor Dice), so attention on top of a convolutional U-Net was the most effective change we tried."
figure:
  src: "/figures/brats-segmentation.jpg"
  alt: "Three brain MRI slices with predicted tumor regions colored in yellow, red, and cyan."
  caption: "Predicted tumor regions from (a) the Attention U-Net, (b) the 3D U-Net, and (c) DubTransBTS. From the paper."
tags: [PyTorch, 3D U-Net, Attention, Transformers]
links:
  - { label: Paper, href: "/papers/brain-tumor-segmentation.pdf" }
  - { label: Code, href: "https://github.com/anushehchaudry/braTS2020-Brain-Tumor-Segmentation" }
---
Radiologists still outline brain tumors in MRI scans by hand, which is slow and depends on the reader. We compared a 3D U-Net with an attention-based U-Net and a transformer model for labeling every voxel as one of three nested tumor regions. The attention U-Net did best, reaching a <mark>whole-tumor Dice score of 0.88</mark>.
