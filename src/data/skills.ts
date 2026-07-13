export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Cloud (AWS)",
    skills: [
      "Amazon S3",
      "AWS Glue",
      "AWS Lambda",
      "AWS IAM",
      "Amazon Athena",
      "Amazon CloudWatch",
      "Amazon MWAA",
      "AWS Bedrock",
    ],
  },
  {
    label: "Generative AI / AI Engineering",
    skills: [
      "AWS Bedrock",
      "Anthropic Claude",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "LLM-as-Judge",
      "Embeddings",
      "RAG",
      "Agentic Patterns",
    ],
  },
  {
    label: "Data Engineering",
    skills: [
      "ETL / ELT Development",
      "Data Migration",
      "Data Lake Architecture",
      "Data Quality",
      "Informatica PowerCenter",
      "IICS",
      "Snowflake",
      "PySpark",
      "Apache Airflow",
    ],
  },
  {
    label: "Programming",
    skills: ["Python", "SQL", "Unix/Linux Shell Scripting"],
  },
  {
    label: "Tools",
    skills: ["Git", "Jira", "QMetry", "REST APIs"],
  },
  
  
];