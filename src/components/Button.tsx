import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "onColor" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-coral-600 text-white shadow-brand hover:bg-brand-coral-700 hover:-translate-y-0.5",
  onColor:
    "bg-white text-brand-blue-600 shadow-soft-md hover:bg-cream hover:-translate-y-0.5",
  secondary:
    "border-2 border-brand-blue-500 text-brand-blue-600 hover:bg-brand-blue-50",
  ghost: "text-ink-soft hover:text-ink underline decoration-2 underline-offset-4",
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
  const classes = `inline-flex items-center gap-2 rounded-xl px-6 py-3 font-display font-semibold transition-all duration-200 ${variantStyles[variant]} ${className}`;

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
