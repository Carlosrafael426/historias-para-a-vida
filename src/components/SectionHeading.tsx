interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex w-fit rounded-full bg-brand-coral-100 px-4 py-1 text-sm font-semibold text-brand-coral-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-ink md:text-4xl">{title}</h2>
    </div>
  );
}
