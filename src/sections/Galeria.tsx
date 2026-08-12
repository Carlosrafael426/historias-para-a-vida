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
              width={512}
              height={512}
              loading="lazy"
              decoding="async"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="aspect-square w-full rounded-lg object-cover shadow-soft-sm"
            />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
