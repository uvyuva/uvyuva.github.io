import type {
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

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

export interface AnimatedTextProps {
  text: string;
}