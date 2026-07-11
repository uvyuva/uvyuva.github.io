/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Button
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) => {
  const base =
"inline-flex min-w-[220px] justify-center items-center gap-3 border px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] transition-all duration-300 group";

  const styles =
    variant === "primary"
      ? "border-black bg-black text-white hover:bg-transparent hover:text-black"
      : "border-black bg-transparent text-black hover:bg-black hover:text-white";

  return (
    <a href={href} className={`${base} ${styles}`}>
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
};

export default Button;