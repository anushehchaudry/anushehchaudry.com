---
title: How gene variants change a transplant drug's binding
context: Computational biology · Team of two
order: 6
skim: "Simulated how gene variants change a transplant drug's binding, using AlphaFold and molecular docking."
topics: [health]
deep:
  - "Built mutant protein sequences for five variants of CYP3A5 and ABCB1 from a pharmacogenomics database, predicted their structures with AlphaFold, and aligned them against the wild type in PyMOL."
  - "Docked tacrolimus into each structure with AutoDock Vina and compared binding affinities."
  - "CYP3A5*3, which truncates the protein, <mark>bound far more weakly than the wild type</mark> (−4.93 vs −7.02 kcal/mol), consistent with the slower drug metabolism seen in carriers."
figure:
  src: "/figures/tacrolimus-structures.jpg"
  alt: "Three predicted protein structures: CYP3A5*1 in cyan, the truncated CYP3A5*3 in green, and the wild type in pink."
  caption: "Predicted CYP3A5 structures: *1 (cyan), the truncated *3 (green), and wild type (pink). From the paper."
tags: [AlphaFold, AutoDock Vina, PyMOL, Pharmacogenomics]
links:
  - { label: Paper, href: "/papers/tacrolimus-docking.pdf" }
---
Tacrolimus keeps transplanted organs from being rejected, but the right dose varies widely from person to person. We simulated how <mark>known genetic variants</mark> change the drug's binding to the proteins that metabolize and transport it.
