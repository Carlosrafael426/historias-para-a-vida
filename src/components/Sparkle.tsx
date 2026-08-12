interface SparkleProps {
  className?: string;
}

export function Sparkle({ className = "" }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0 14.4 9.6 24 12 14.4 14.4 12 24 9.6 14.4 0 12 9.6 9.6Z" />
    </svg>
  );
}
