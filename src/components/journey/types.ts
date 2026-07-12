import type {
  CSSProperties,
  ReactNode,
  ElementType,
} from "react";

export interface JourneyStep {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export interface JourneyCardProps {
  step: JourneyStep;
}

export interface PipelineProps {
  steps: JourneyStep[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}