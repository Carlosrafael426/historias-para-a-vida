import { motion } from "motion/react";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeading } from "../components/SectionHeading";
import { livroDestaque } from "../data/livros";

export function Galeria() {
  const imagens = livroDestaque.galeria ?? [];

  return (
    <SectionContainer id="galeria">
      <SectionHeading
        eyebrow="Ilustrações"
        title="Galeria do livro"
        align="center"
        className="mx-auto"
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {imagens.map((img, index) => (
          <Reveal key={img.src} delay={index * 0.08}>
            <motion.img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              decoding="async"
              whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="aspect-square w-full rounded-lg object-cover shadow-soft-sm transition-shadow duration-300 hover:shadow-soft-lg"
            />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
