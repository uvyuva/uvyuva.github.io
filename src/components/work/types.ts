export interface Project {
  id: number;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  architecture: string[];
  metrics?: { value?: string; label: string }[];
  liveUrl?: string;
}