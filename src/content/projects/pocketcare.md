---
title: PocketCare
context: Web app · Team of four
when: "2025"
order: 3
featured: true
role: Set up the Django backend and built the bill-breakdown feature end to end, from upload and document parsing to analysis, including the prompts behind the bill and insurance explanations.
skim: "Explains medical bills and insurance plans in plain language."
topics: [health, products]
deep:
  - "Pipeline: Google Document AI reads the PDF, a de-identification step (Microsoft Presidio plus custom recognizers for things like account numbers) strips personal details, then Gemini 1.5 Flash explains it with task-specific prompts."
  - "Limits: raw documents pass through Document AI for OCR before de-identification, and a user's follow-up questions are sent to the model as written."
  - "Django REST API with session auth and CSRF protection; Next.js and TypeScript front end; saved bills and analyses live in a per-user document library."
figure:
  src: "/figures/pocketcare-pipeline.svg"
  alt: "Diagram: PDF bill, then Document AI OCR, then de-identification with Presidio, then Gemini."
  caption: "Bill text is de-identified before it reaches the model."
tags: [Next.js, Django, Gemini, Document AI]
links:
  - { label: Code, href: "https://github.com/anushehchaudry/PocketCare" }
---
Medical bills and insurance plans are written for billing departments, not patients. PocketCare reads a bill or a plan and <mark>explains it in plain language</mark>, then answers follow-up questions about your own documents. <mark>Bill text is de-identified</mark> (names, account numbers, and other personal details removed) before it's sent to the language model.
