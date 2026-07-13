import type { BuildData } from "../components/build/types";

export const buildData: BuildData[] = [
  {
    id: 1,
    category: "Cloud",
    title: "Cloud Data Engineering",
    headline: "Building reliable cloud-native data platforms.",
    description:
      "Designing scalable ETL pipelines, migration workflows and automated validation frameworks on AWS for enterprise-grade data systems.",
    technologies: [
      "AWS",
      "Glue",
      "Lambda",
      "Airflow",
      "Python",
    ],
    mediaType: "cloud",
  },

  {
    id: 2,
    category: "AI",
    title: "Generative AI",
    headline: "Creating intelligent AI-powered experiences.",
    description:
      "Developing applications powered by modern language models, prompt engineering and intelligent automation workflows.",
    technologies: [
      "OpenAI",
      "Python",
    ],
    mediaType: "ai",
  },

  {
    id: 3,
    category: "Frontend",
    title: "Modern Web Development",
    headline: "Crafting thoughtful digital experiences.",
    description:
      "Building responsive, interactive and visually refined web applications focused on performance and user experience.",
    technologies: [
      "React",
      "Tailwind",
      "TypeScript",
      "Three.js",
    ],
    mediaType: "web",
  },
];