---
title: AssistEMT
context: LLM assistant for emergency medicine · With the Salisbury Robotics Lab · Team of three
when: "2024"
order: 2
featured: true
skim: "An LLM assistant for EMTs; GPT-4 with retrieval scored 88.3% on a written EMT exam."
topics: [ml, health]
role: Fine-tuned the GPT-3.5 models and built our EMT datasets, including a 1,562-pair question-and-answer set drawn from an EMT textbook.
deep:
  - "Built two EMT-specific datasets (1,056 Q&A pairs from national EMS guidelines and 1,562 from an EMT textbook) and fine-tuned GPT-3.5 on combinations of them plus PubMedQA."
  - "Compared that with GPT-4 using prompt engineering, and GPT-4 with retrieval over EMT documents and web search."
  - "On a 120-question written EMT exam, GPT-4 with retrieval and prompting <mark>scored 88.3%</mark> and GPT-4 alone 87.5%. Fine-tuning GPT-3.5 on all three datasets raised it <mark>from 76.6% to 80.0%</mark>."
  - "Trained EMTs graded each model on clinical scenarios with the official rubric. GPT-4 with prompt engineering did best there (0.80 average), ahead of GPT-4 with retrieval (0.66) and fine-tuned GPT-3.5 (0.43)."
figure:
  src: "/figures/assistemt-scores.svg"
  alt: "Bar chart of written EMT exam scores: OpenBioLLM 71.6, GPT-3.5 76.6, fine-tuned GPT-3.5 80.0, GPT-4 87.5, GPT-4 with retrieval and prompting 88.3; passing is 70."
  caption: "Written exam scores by model; the fine-tuned GPT-3.5 (red) was my part. Numbers from the paper."
tags: [Fine-tuning, RAG, GPT-3.5, GPT-4, Evaluation]
links:
  - { label: Paper, href: "/papers/assistemt.pdf" }
---
A conversational assistant that walks through an emergency medical assessment following national EMT guidelines, designed to work alongside robots that perform the physical exam. We <mark>fine-tuned GPT-3.5 on EMT datasets we built</mark>, and compared it against GPT-4 with prompt engineering and with retrieval.
