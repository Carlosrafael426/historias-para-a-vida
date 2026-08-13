import type { ReactNode } from "react";

type BadgeColor = "blue" | "coral" | "green" | "mustard" | "purple" | "teal";

const colorStyles: Record<BadgeColor, string> = {
  blue: "bg-brand-blue-100 text-brand-blue-700",
  coral: "bg-brand-coral-100 text-brand-coral-700",
  green: "bg-accent-green/15 text-accent-green-700",
  mustard: "bg-accent-mustard/15 text-accent-mustard-700",
  purple: "bg-accent-purple/15 text-accent-purple-700",
  teal: "bg-accent-teal/15 text-accent-teal-700",
};

interface BadgeProps {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}

export function Badge({ children, color = "coral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-4 py-1 text-sm font-semibold ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
