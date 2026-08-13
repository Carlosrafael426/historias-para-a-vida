import { Navigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { SALE_URL } from "../constants";
import { livros } from "../data/livros";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function LivroDetalhe() {
  const { slug } = useParams();
  const livro = livros.find(
    (item) => item.slug === slug && item.status === "publicado",
  );

  useDocumentTitle(livro?.titulo);

  if (!livro) {
    return <Navigate to="/livros" replace />;
  }

  return (
    <SectionContainer>
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <Reveal>
          <img
            src={livro.capa}
            alt={`Capa do livro ${livro.titulo}`}
            width={livro.capaWidth ?? 512}
            height={livro.capaHeight ?? 512}
            loading="eager"
            className="w-full rounded-2xl shadow-soft-lg"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-3xl font-bold text-ink md:text-4xl">
            {livro.titulo}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            {livro.sinopse}
          </p>
          <Button
            href={SALE_URL}
            external
            variant="primary"
            className="mt-8"
          >
            Comprar o livro
          </Button>
        </Reveal>
      </div>

      {livro.galeria && livro.galeria.length > 0 && (
        <Reveal delay={0.15} className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-ink">Ilustrações</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {livro.galeria.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-lg object-cover shadow-soft-sm"
              />
            ))}
          </div>
        </Reveal>
      )}
    </SectionContainer>
  );
}
