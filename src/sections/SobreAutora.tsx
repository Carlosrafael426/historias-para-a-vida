import { Link } from "react-router-dom";
import photo from "../assets/foto-izabel.jpeg";
import { Blob } from "../components/Blob";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeading } from "../components/SectionHeading";
import { AUTHOR_NAME } from "../constants";

export function SobreAutora() {
  return (
    <div className="bg-brand-blue-50/60">
      <SectionContainer id="sobre-a-autora">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:items-center">
          <Reveal className="relative mx-auto w-56 md:w-full">
            <Blob className="pointer-events-none absolute -inset-8 -z-10 text-brand-coral-100" />
            <img
              src={photo}
              alt={`${AUTHOR_NAME}, autora do livro`}
              width={1134}
              height={1512}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-2xl object-cover shadow-soft-lg"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Sobre a autora" title={AUTHOR_NAME} />
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Izabel Devecchi é escritora e apaixonada por contar histórias
              que ensinam, emocionam e aproximam famílias através da leitura.
            </p>
            <Link
              to="/sobre-mim"
              className="inline-flex text-sm font-semibold text-brand-blue-600 underline decoration-2 underline-offset-4 transition-colors hover:text-brand-coral-600"
            >
              Conheça mais sobre a autora →
            </Link>
          </Reveal>
        </div>
      </SectionContainer>
    </div>
  );
}
