---
title: Predicting Alzheimer's disease from a blood test
context: Research paper · Team of three
when: "2024"
order: 6
skim: "Blood-protein models that predict Alzheimer's disease with a test AUC of 0.84."
topics: [ml, health]
role: Built the SVM and neural-network models and wrote the related-work, methods, results, and conclusion sections.
deep:
  - "Data: demographics plus plasma protein measurements (SomaScan) for 2,091 patients from the Knight Alzheimer's Disease Research Center, split 70/15/15 into train, validation, and test."
  - "Compared logistic regression, SVMs, XGBoost, and neural networks, tuned with cross-validation. L1-regularized logistic regression did best (<mark>test AUC 0.84</mark>), ahead of XGBoost on the top 100 proteins (0.83) and the SVM (0.78)."
  - "Its top features (acetylcholinesterase, SPC25, neuronal pentraxin receptor) point to biological pathways that may break down in Alzheimer's."
figure:
  src: "/figures/alzheimers-roc.jpg"
  alt: "ROC curves for logistic regression models, with proteomics AUC 0.84 highest, beside a bar chart of the top protein features."
  caption: "ROC curves by feature set (left) and the proteins the model weighted most (right). From the paper."
tags: [Logistic regression, SVM, XGBoost, Neural networks, Proteomics]
links:
  - { label: Paper, href: "/papers/alzheimers-prediction.pdf" }
---
Diagnosing Alzheimer's often relies on clinical judgment or a spinal tap. We tested whether a blood draw could do the job, training classifiers on plasma protein levels. Adding the proteins lifted test AUC from <mark>0.64 with demographics alone to 0.84</mark>.
