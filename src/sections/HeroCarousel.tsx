import { Book } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { livros } from "../data/livros";

const AUTOPLAY_MS = 4500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const livro = livros[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % livros.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const isPublicado = livro.status === "publicado";
  const linkTo = isPublicado ? `/livros/${livro.slug}` : "/proximos-lancamentos";

  return (
    <div
      className="relative mx-auto w-full max-w-sm md:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={livro.slug}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Link to={linkTo} className="block">
              {isPublicado ? (
                <img
                  src={livro.capa}
                  alt={`Capa do livro ${livro.titulo}`}
                  width={512}
                  height={512}
                  loading="eager"
                  className="w-full -rotate-2 rounded-2xl shadow-soft-lg"
                />
              ) : (
                <div className="flex aspect-square w-full -rotate-2 flex-col items-center justify-center gap-3 rounded-2xl bg-white shadow-soft-lg">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-100">
                    <Book className="h-7 w-7 text-brand-blue-600" />
                  </span>
                  <span className="font-display text-lg font-semibold text-ink">
                    {livro.titulo}
                  </span>
                </div>
              )}
            </Link>
            <span
              className={`absolute -top-4 -left-4 rotate-[-6deg] rounded-full px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase shadow-brand ${
                isPublicado ? "bg-brand-coral-600" : "bg-accent-purple"
              }`}
            >
              {isPublicado ? "Lançamento" : "Em breve"}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="mt-4 flex justify-center gap-2 md:justify-start">
        {livros.map((l, i) => (
          <button
            key={l.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver ${l.titulo}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-brand-coral-600"
                : "w-2 bg-brand-coral-600/25 hover:bg-brand-coral-600/50"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-sm text-ink-soft md:text-left">
        {isPublicado ? (
          <>
            Já disponível:{" "}
            <Link
              to={`/livros/${livro.slug}`}
              className="font-semibold text-brand-blue-600 underline decoration-2 underline-offset-4"
            >
              {livro.titulo}
            </Link>
          </>
        ) : (
          <>Em breve: novo título a caminho</>
        )}
      </p>
    </div>
  );
}
