import type { ReactNode } from "react";

type BadgeColor = "blue" | "coral" | "green" | "mustard" | "purple";

const colorStyles: Record<BadgeColor, string> = {
  blue: "bg-brand-blue-100 text-brand-blue-600",
  coral: "bg-brand-coral-100 text-brand-coral-600",
  green: "bg-accent-green/20 text-accent-green",
  mustard: "bg-accent-mustard/20 text-accent-mustard",
  purple: "bg-accent-purple/20 text-accent-purple",
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
