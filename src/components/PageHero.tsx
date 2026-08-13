import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Blob } from "./Blob";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-brand-blue-50/50 py-16 md:py-20">
      <Blob className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 text-brand-coral-400/25 md:h-72 md:w-72" />
      <Blob className="pointer-events-none absolute -right-10 -bottom-20 h-48 w-48 text-brand-blue-400/25 md:h-64 md:w-64" />
      <Blob className="pointer-events-none absolute top-1/2 left-[45%] hidden h-32 w-32 text-accent-teal/20 lg:block" />

      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {eyebrow && (
          <span className="mb-4 inline-flex rounded-full bg-brand-coral-100 px-4 py-1 text-sm font-semibold text-brand-coral-700">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl font-bold text-ink md:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
