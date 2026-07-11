import type { JourneyStep } from "../components/journey/types";

export const journeyData: JourneyStep[] = [
  {
    year: "2022",
    title: "ETL Developer",
    subtitle: "Data Engineering Foundations",

    description:
      "Built a strong foundation in enterprise ETL development, SQL optimization and large-scale data engineering workflows.",

    technologies: [
      "SQL",
      "Python",
      "Informatica",
      "ETL",
    ],
  },

  {
    year: "2023",
    title: "AWS Data Engineer",
    subtitle: "Cloud Data Engineering",

    description:
      "Designed scalable cloud-native data pipelines using AWS Glue, Lambda, Athena and S3 while supporting enterprise migration projects.",

    technologies: [
      "Glue",
      "Lambda",
      "Athena",
      "S3",
      "Python",
    ],
  },

  {
    year: "2025",
    title: "Generative AI",
    subtitle: "Intelligent Systems",

    description:
      "Building AI-powered applications using LLMs, Prompt Engineering and Retrieval-Augmented Generation to automate modern workflows.",

    technologies: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "OpenAI",
    ],
  },
];