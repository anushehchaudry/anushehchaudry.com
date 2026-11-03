---
title: Why did this patient's treatment change?
context: Clinical AI agents
when: "2026"
status: in progress
order: 1
featured: true
skim: "An agent that explains why a patient's treatments changed, citing evidence from the record and the notes."
topics: [ml, health]
deep:
  - "The agent works through tools: the patient's timeline, detected treatment changes, the labs around each change, note search, and read-only SQL. <mark>Every citation is checked</mark>: the cited record must exist and belong to the patient, and quoted text must appear in the note."
  - "I adapted SLIDERS, an open-source method for extracting tables from documents, to clinical notes. That meant a treatment-change schema with certainty (performed, planned, considered, held), rules for things like copied-forward medication lists, and a fast profile that cut one run from 45 model calls and 265 seconds to <mark>8 calls and 32 seconds</mark>."
  - "A combined method lets SLIDERS propose candidate changes and the agent verify the most important ones. Early tests cover only a few case reports and one synthetic patient, so they're hints, not results; human-labeled evaluation is next."
  - "Built on public data (the MIMIC-IV demo and PMC-Patients case reports) while access to a larger clinical dataset is pending."
figure:
  src: "/figures/treatment-reasoning.svg"
  alt: "Diagram: a structured record and clinical notes feed an agent with tools, which explains why a treatment changed; every citation is then checked against the record."
  caption: "Records and notes in, cited explanations out, with every quote checked."
tags: [LLM agents, Tool use, Clinical NLP, OMOP, Evaluation]
---
A patient's record shows that a drug was started, stopped, or switched, but the reason is usually buried in the notes, if it's written down at all. I'm building an agent that reads the structured record (drugs, labs, diagnoses) alongside the clinical notes and <mark>explains each treatment change, citing the evidence for every reason</mark>.
