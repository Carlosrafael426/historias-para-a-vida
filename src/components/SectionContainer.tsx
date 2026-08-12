import type { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ id, children, className = "" }: SectionContainerProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
