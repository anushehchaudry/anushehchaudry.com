// Work history shown on /work (and summarized on the home page).
// Newest first. Add a new job by copying one of the blocks below.
//   highlight: one headline result, shown on the home page
//   summary: one sentence, shown in "Read" mode
//   points:  full detail, shown in "Deep dive" mode
//   topics:  which filter topics this job belongs to (see topics.ts)

import type { Topic } from "./topics";

export interface Job {
  company: string;
  role: string;
  when: string;
  topics: Topic[];
  highlight: string;
  summary: string;
  points: string[];
}

export const jobs: Job[] = [
  {
    company: "Artemis Software Works",
    role: "Machine Learning Engineer",
    when: "Apr – Sep 2026",
    topics: ["ml", "products"],
    highlight: "Built agent memory and meeting-briefing features for Surfboard; cut an agent's operating cost 16.6%",
    summary: "Built <mark>agent features for Surfboard</mark>, the company's product, end to end: a memory system that learns from a user's edits, an AI meeting-briefing feature, and its <mark>first onboarding flow</mark>.",
    points: [
      "Designed and built an <mark>implicit user-memory system</mark> that learns preferences from document edits and corrections, using retrieval, iterative revision, and decay-based scoring.",
      "Owned an AI meeting-briefing feature end to end: data model, agent tools, APIs, UI, and eval suite. Built fault-tolerant server-side A/B testing infrastructure, and <mark>cut an agent's operating cost by 16.6%</mark> by removing redundant tool calls.",
      "Found onboarding friction through PostHog funnel analysis and session replays, then designed and shipped the company's first onboarding flow, using ML-powered workflow recommendations to speed up activation.",
    ],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer, AWS Bedrock",
    when: "Sep 2025 – Apr 2026",
    topics: ["infra", "ml"],
    highlight: "Worked on the infrastructure serving Anthropic models; helped cut deploy time and weekly Sev-2 pages by 50%",
    summary: "Worked on the Kubernetes-based infrastructure that <mark>serves Anthropic's models on Bedrock</mark>, covering safe rollouts, faster deployments, and better monitoring.",
    points: [
      "Built a cross-model, cross-region metrics dashboard for availability, error rates, and inference latency, and fixed alarm ownership and monitoring, helping the team <mark>cut weekly Sev-2 pages by 50%</mark>.",
      "Developed Java services and updated EKS manifests for the Kubernetes-based hosting of Anthropic's foundation models, rolling changes out safely across model variants and regions.",
      "Deployed model updates with Anthropic engineers, led customer investigations, and helped <mark>cut deployment time by 50%</mark> through parallelized deployments and enforced deployment ordering.",
    ],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineering Intern",
    when: "Jun – Sep 2024",
    topics: ["infra", "ml"],
    highlight: "Automated Bedrock Agents deployment into customer accounts for Amazon FinSpace",
    summary: "Built a system that <mark>automatically deploys Bedrock Agents</mark> into customer accounts, so Amazon FinSpace users can query financial data in plain language.",
    points: [
      "Led the build: designed the deployment API, a Lambda function for DynamoDB stream events, and a Step Functions workflow that deploys CloudFormation stacks.",
      "Packaged the agent's infrastructure as a CDK construct that brought in other interns' code, reached <mark>88% test coverage</mark>, and guards against the confused deputy problem.",
    ],
  },
  {
    company: "Inference Analytics",
    role: "Software Engineering Intern",
    when: "Jun – Sep 2023",
    topics: ["health", "ml"],
    highlight: "Radiology-report language models; patient-scheduling chatbot for UChicago Medicine",
    summary: "Researched language models for radiology reports and built a <mark>patient-scheduling chatbot for UChicago Medicine.</mark>",
    points: [
      "Led research pairing <mark>BERT-based encoders</mark> for understanding and structuring radiology reports with LLMs for report generation.",
      "Built a patient-scheduling chatbot for UChicago Medicine with FastAPI, LangChain, and real-time streaming, then rebuilt its production front end and demoed it to clients.",
    ],
  },
  {
    company: "Stanford University",
    role: "Undergraduate Researcher, Medical Imaging",
    when: "Jul 2022 – Apr 2023",
    topics: ["health", "ml"],
    highlight: "Predicted fractures and cardiovascular events from CT scans and health records",
    summary: "Trained models that predict <mark>osteoporotic fractures and cardiovascular events from automatically</mark> extracted CT biomarkers and health records.",
    points: [
      "Implemented <mark>XGBoost and LightGBM</mark> models on tabular electronic health records and CT imaging data to predict osteoporotic fractures and cardiovascular events.",
      "Worked with biomarkers extracted automatically from CT scans, combined with patient records.",
    ],
  },
];

export const education = [
  {
    school: "Stanford University",
    degree: "MS, Computer Science",
    when: "Apr 2024 – Mar 2027 (expected)",
    note: "Took a year off after my BS to work full time at AWS and Artemis, then came back to finish.",
    detail: "Mining Massive Datasets, Cloud Computing, Computational Biology Algorithms, Agentic AI",
  },
  {
    school: "Stanford University",
    degree: "BS, Computer Science (AI track)",
    when: "Sep 2021 – Jun 2025",
    detail: "Machine Learning, NLP with Deep Learning, Deep Learning for Computer Vision, Operating Systems, Applied Matrix Theory, Biomedical Data Science",
  },
];

export const skills =
  "Python, Java, TypeScript, SQL, C++, Swift · PyTorch, XGBoost, LightGBM, LangChain · FastAPI, Django, React, Next.js, React Native · AWS (Bedrock, EKS, Lambda, Step Functions, DynamoDB, CDK), Kubernetes · LLM agents and evals, A/B testing";
