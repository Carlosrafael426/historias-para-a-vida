import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeading } from "../components/SectionHeading";
import { livroDestaque } from "../data/livros";

export function SobreLivro() {
  const galeria = livroDestaque.galeria ?? [];

  return (
    <SectionContainer id="sobre-o-livro">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <SectionHeading eyebrow="Sobre o livro" title={livroDestaque.titulo} />
          <p className="text-lg leading-relaxed text-ink-soft">
            {livroDestaque.resumo}
          </p>
          <Link
            to={`/livros/${livroDestaque.slug}`}
            className="mt-6 inline-flex text-sm font-semibold text-brand-blue-600 underline decoration-2 underline-offset-4 transition-colors hover:text-brand-coral-600"
          >
            Ver detalhes e sinopse completa →
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm py-6">
          {galeria[1] && (
            <img
              src={galeria[1].src}
              alt={galeria[1].alt}
              width={512}
              height={512}
              loading="lazy"
              decoding="async"
              className="w-3/4 rounded-xl shadow-soft-md"
            />
          )}
          {galeria[2] && (
            <img
              src={galeria[2].src}
              alt={galeria[2].alt}
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="absolute right-0 -bottom-6 w-1/2 rounded-xl shadow-soft-lg ring-4 ring-cream md:right-2"
            />
          )}
        </Reveal>
      </div>
    </SectionContainer>
  );
}
