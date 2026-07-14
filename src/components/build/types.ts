
export interface BuildData {
  id: number;
  category: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  mediaType: "cloud" | "ai" | "web";
}

export interface BuildCardProps {
  item: BuildData;
}