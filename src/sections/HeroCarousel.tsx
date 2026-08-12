import { Book, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { livros } from "../data/livros";

const AUTOPLAY_MS = 4500;

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -28 : 28 }),
};

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const livro = livros[index];

  const goTo = (newIndex: number, dir: number) => {
    setDirection(dir);
    setIndex(newIndex);
  };

  const next = () => goTo((index + 1) % livros.length, 1);
  const prev = () => goTo((index - 1 + livros.length) % livros.length, -1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % livros.length);
      setDirection(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const isPublicado = livro.status === "publicado";
  const linkTo = isPublicado ? `/livros/${livro.slug}` : "/proximos-lancamentos";

  return (
    <div
      className="group relative mx-auto w-full max-w-sm md:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={livro.slug}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
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
                    className="w-full -rotate-2 rounded-2xl shadow-soft-lg transition-shadow duration-300 hover:shadow-soft-lg"
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

        <button
          type="button"
          onClick={prev}
          aria-label="Livro anterior"
          className="absolute top-1/2 -left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft-md opacity-70 transition-all duration-200 hover:scale-110 hover:text-brand-coral-600 md:-left-5 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo livro"
          className="absolute top-1/2 -right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft-md opacity-70 transition-all duration-200 hover:scale-110 hover:text-brand-coral-600 md:-right-5 md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-1 md:justify-start">
        {livros.map((l, i) => (
          <button
            key={l.slug}
            type="button"
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Ver ${l.titulo}`}
            aria-current={i === index}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-brand-coral-600"
                  : "w-2 bg-brand-coral-600/25 hover:bg-brand-coral-600/50"
              }`}
            />
          </button>
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
