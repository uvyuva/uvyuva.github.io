/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Container
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */

import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1440px]
        px-8
        lg:px-14
        xl:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;