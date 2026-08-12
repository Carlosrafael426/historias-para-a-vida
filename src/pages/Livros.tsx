import { Book } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { livros } from "../data/livros";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Livros() {
  useDocumentTitle("Livros");

  return (
    <>
      <PageHero
        eyebrow="Nossos livros"
        title="Histórias para todas as idades"
        description="Conheça os livros já publicados e fique de olho nos próximos lançamentos."
      />

      <SectionContainer>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {livros.map((livro, index) => (
            <Reveal key={livro.slug} delay={index * 0.08} className="h-full">
              {livro.status === "publicado" ? (
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full"
                >
                  <Link
                    to={`/livros/${livro.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-soft-sm transition-shadow duration-300 hover:shadow-soft-lg"
                  >
                    <img
                      src={livro.capa}
                      alt={`Capa do livro ${livro.titulo}`}
                      width={512}
                      height={512}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand-coral-600">
                        {livro.titulo}
                      </h2>
                      <p className="mt-2 text-sm text-ink-soft">
                        {livro.resumo}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line bg-white p-8 text-center shadow-soft-sm transition-shadow duration-300 hover:shadow-soft-md"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-100">
                    <Book className="h-7 w-7 text-brand-blue-600" />
                  </span>
                  <Badge color="mustard">Em breve</Badge>
                  <p className="text-sm text-ink-soft">{livro.resumo}</p>
                </motion.div>
              )}
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
