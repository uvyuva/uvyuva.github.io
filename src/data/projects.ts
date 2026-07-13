import type { Project } from "./projects";

export const projects: Project[] = [
  {
    id: 1,
    badge: "Confidential",
    title: "Enterprise Data Migration Platform",
    tagline: "From legacy systems to a scalable AWS cloud platform.",
    description:
      "A production-grade migration pipeline moving enterprise data off legacy systems into a governed, cloud-native AWS platform — with validation, orchestration and serverless processing at each stage.",
    technologies: ["AWS Glue", "AWS Lambda", "Apache Airflow", "Amazon S3", "Python"],
    architecture: [
      "Legacy Systems",
      "AWS Glue",
      "Validation + S3",
      "AWS Lambda",
      "Apache Airflow",
      "Cloud Platform",
    ],
    metrics: [
      { label: "Enterprise Scale" },
      { label: "Cloud Native" },
      { label: "Production Ready" },
    ],
  },
  {
    id: 2,
    badge: "Confidential",
    title: "Jira QMetry Workflow Automation",
    tagline: "Automating end-to-end Jira QMetry workflows using Python and REST APIs.",
    description:
      "An automation layer that drives Jira and QMetry through their REST APIs — removing manual test-management steps and keeping execution, results and reporting in sync.",
    technologies: ["Python", "REST API", "Jira", "QMetry"],
    architecture: ["Trigger", "Python Service", "Jira REST API", "QMetry Sync", "Reporting"],
    metrics: [{ label: "Fully Automated" }, { label: "API-Driven" }],
  },
  {
    id: 3,
    badge: "Freelance AI",
    title: "Land Information RAG Assistant",
    tagline: "A land-information assistant powered by retrieval-augmented generation.",
    description:
      "A conversational assistant for V3 Ventures that answers land-information questions by retrieving from ingested documents and grounding responses through a RAG pipeline.",
    technologies: ["GPT-4o", "LlamaIndex", "Embeddings", "Unstructured.io"],
    architecture: ["PDF Documents", "Embedding", "Vector DB", "Retrieval", "LLM (GPT-4o)", "Chatbot"],
    metrics: [{ label: "RAG Pipeline" }, { label: "Grounded Answers" }],
  },
  {
    id: 4,
    badge: "Freelance Client Website",
    title: "SpindleCraft Website",
    tagline: "A production marketing website for Yajamana Automation.",
    description:
      "A responsive marketing site delivered for a client, built on a lightweight front-end stack and shipped live.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    architecture: ["Design", "HTML / CSS", "Bootstrap UI", "jQuery", "Live Site"],
    
    liveUrl: "https://spindlecraft.in/",
  },
];