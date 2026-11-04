// Work history shown on /work (and summarized on the home page).
// Newest first. Add a new job by copying one of the blocks below.
//   highlight: one headline result, shown on the home page
//   summary: a short paragraph, shown in "Read" mode
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
    summary: "Built <mark>agent features for Surfboard</mark>, the company's product, end to end. Designed a memory system that learns a user's preferences from their edits and corrections, and owned an AI meeting-briefing feature from data model to eval suite, <mark>cutting its agent's operating cost 16.6%</mark> by removing redundant tool calls. Also shipped an <mark>ML-powered onboarding flow</mark> after finding where new users got stuck in PostHog funnels.",
    points: [
      "Designed and built an <mark>implicit user-memory system</mark> that learns preferences from document edits and corrections, using retrieval, iterative revision, and decay-based scoring.",
      "Owned an AI meeting-briefing feature end to end: data model, agent tools, APIs, UI, and eval suite. Built fault-tolerant server-side A/B testing infrastructure, and <mark>cut an agent's operating cost by 16.6%</mark> by removing redundant tool calls.",
      "Found onboarding friction through PostHog funnel analysis and session replays, then designed and shipped an ML-powered onboarding flow that recommends workflows to speed up activation.",
    ],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer, AWS Bedrock",
    when: "Sep 2025 – Apr 2026",
    topics: ["infra", "ml"],
    highlight: "Worked on the infrastructure serving Anthropic models; helped cut deploy time and weekly Sev-2 pages by 50%",
    summary: "Deployed <mark>updates to Anthropic's models on Bedrock</mark> with Anthropic engineers, and worked on the Kubernetes-based infrastructure that hosts them, rolling changes out safely across model variants and regions. Parallelized deployments to <mark>halve deployment time</mark>, and built a cross-model, cross-region metrics dashboard that helped <mark>cut weekly Sev-2 pages by 50%</mark>.",
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
    summary: "Built a system that <mark>automatically deploys Bedrock Agents</mark> into customer accounts, so Amazon FinSpace users can query financial data in plain language. Designed the deployment API and a Step Functions workflow that rolls out CloudFormation stacks, and packaged the agent's infrastructure as a CDK construct with <mark>88% test coverage</mark>.",
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
    summary: "Researched pairing <mark>BERT-based encoders</mark>, which structure radiology reports, with LLMs that write them. Also built a <mark>patient-scheduling chatbot for UChicago Medicine</mark> with FastAPI and LangChain, then rebuilt its production front end and demoed it to clients.",
    points: [
      "Led research pairing <mark>BERT-based encoders</mark> for understanding and structuring radiology reports with LLMs for report generation.",
      "Built a patient-scheduling chatbot for UChicago Medicine with FastAPI, LangChain, and real-time streaming, then rebuilt its production front end and demoed it to clients.",
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
