import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "onColor" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-coral-600 to-brand-coral-500 bg-[length:130%_100%] bg-[position:0%_0%] text-white shadow-brand hover:bg-[position:100%_0%] hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95",
  onColor:
    "bg-white text-brand-blue-600 shadow-soft-md hover:bg-cream hover:shadow-soft-lg hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95",
  secondary:
    "border-2 border-brand-blue-500 text-brand-blue-600 hover:bg-brand-blue-50 hover:shadow-soft-sm hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95",
  ghost:
    "text-ink-soft underline decoration-2 underline-offset-4 hover:text-brand-coral-600 hover:decoration-brand-coral-400",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-xl px-6 py-3 font-display font-semibold transition-all duration-300 ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
