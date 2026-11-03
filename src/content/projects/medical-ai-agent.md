---
title: Specialist diagnosis agents
context: Multi-agent LLM system
when: "2026"
order: 2
skim: "Specialist LLM agents read a medical report in parallel; a team agent combines their findings."
topics: [ml, health]
deep:
  - "The three specialist agents run <mark>concurrently in a thread pool</mark>; the pipeline checks every agent answered before the team agent reconciles them."
  - "A FastAPI endpoint accepts pasted text or an uploaded report and returns each specialist's notes alongside the combined assessment, with clear errors for empty input, missing API keys, or a failed agent."
  - "My additions to the original project: the analysis pipeline (Utils/pipeline.py), the FastAPI server (webapp.py), and the web front end (web/)."
  - "All sample reports are synthetic. Research and education only, not for clinical use."
figure:
  src: "/figures/agents-diagram.svg"
  alt: "Diagram: a report goes to cardiologist, psychologist, and pulmonologist agents in parallel; a team agent combines them into a top three."
  caption: "Specialists run in parallel; a team agent reconciles their findings."
tags: [LLM agents, Python, FastAPI]
links:
  - { label: Code, href: "https://github.com/anushehchaudry/medical-ai-agent" }
  - { label: Original project, href: "https://github.com/ahmadvh/octochains/tree/239cc8bf4a34f601eae9c5f084f622c31ae29329" }
---
Three specialist agents (cardiology, psychology, pulmonology) read the same medical report <mark>in parallel</mark>. A fourth "team" agent then reconciles their findings into the three most likely explanations. I extended an open-source multi-agent project with a reusable analysis pipeline and a web app for uploading a report and reading each specialist's notes side by side.
