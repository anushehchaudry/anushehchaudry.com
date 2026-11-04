// Work history shown on /work (and summarized on the home page).
// Newest first. Add a new job by copying one of the blocks below.
//   highlight: one headline result, shown on the home page
//   skim:    one plain sentence, shown in "Skim" mode
//   summary: two short sentences, shown in "Read" mode
//   points:  full detail, shown in "Deep dive" mode
//   topics:  which filter topics this job belongs to (see topics.ts)

import type { Topic } from "./topics";

export interface Job {
  company: string;
  role: string;
  when: string;
  topics: Topic[];
  highlight: string;
  skim: string;
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
    skim: "Built agent features for Surfboard, the company's product, end to end: a memory system that learns from a user's edits, an AI meeting-briefing feature, and an ML-powered onboarding flow.",
    summary: "I built agent features for Surfboard, the company's product, end to end. That included a <mark>memory system that learns a user's preferences</mark> from how they edit and correct its output, and an AI meeting-briefing feature, where cutting redundant tool calls made the agent <mark>16.6% cheaper to run</mark>. I also shipped an <mark>ML-powered onboarding flow</mark> after using PostHog to find where new users were getting stuck.",
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
    skim: "Deployed updates to Anthropic's models on Bedrock and worked on the Kubernetes-based infrastructure that hosts them.",
    summary: "I deployed updates to <mark>Anthropic's models on Bedrock</mark> with Anthropic engineers and worked on the Kubernetes-based infrastructure that hosts them, rolling changes out safely across model variants and regions. Running deployments in parallel helped <mark>halve deployment time</mark>, and a metrics dashboard I built for availability, errors, and latency helped the team <mark>cut weekly Sev-2 pages by 50%</mark>.",
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
    skim: "Built a system that automatically deploys Bedrock Agents into customer accounts, so Amazon FinSpace users can query financial data in plain language.",
    summary: "I led a project that <mark>automatically deploys Bedrock Agents</mark> into customer accounts, so Amazon FinSpace users can ask questions about their financial data in plain language. I designed the deployment API and the workflow behind it, and packaged the agent's infrastructure as a CDK construct with <mark>88% test coverage</mark>.",
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
    skim: "Researched language models for radiology reports and built a patient-scheduling chatbot for UChicago Medicine.",
    summary: "I researched how <mark>BERT-based encoders</mark>, which pull structure out of radiology reports, could be paired with LLMs that write them. I also built a <mark>patient-scheduling chatbot for UChicago Medicine</mark>, then rebuilt its production front end and demoed it to clients.",
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
