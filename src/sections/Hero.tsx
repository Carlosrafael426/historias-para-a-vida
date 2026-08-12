import { motion } from "motion/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Blob } from "../components/Blob";
import { Button } from "../components/Button";
import { Sparkle } from "../components/Sparkle";
import { SITE_TAGLINE } from "../constants";
import { livroDestaque } from "../data/livros";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <Blob className="pointer-events-none absolute -top-24 -left-32 h-80 w-80 text-brand-blue-100 md:h-[26rem] md:w-[26rem]" />
      <Blob className="pointer-events-none absolute -right-24 -bottom-40 h-72 w-72 text-brand-coral-100 md:h-96 md:w-96" />
      <Blob className="pointer-events-none absolute top-1/3 right-[8%] hidden h-40 w-40 text-accent-mustard/25 md:block" />
      <Sparkle className="pointer-events-none absolute top-16 right-[38%] hidden h-6 w-6 text-brand-coral-400 md:block" />
      <Sparkle className="pointer-events-none absolute bottom-24 left-[12%] h-5 w-5 text-brand-blue-400" />

      <motion.div
        className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-10 pb-20 md:grid-cols-2 md:items-center md:pt-14 md:pb-28"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col items-start gap-6 text-left">
          <motion.img
            variants={item}
            src={logo}
            alt="Histórias para a Vida"
            width={560}
            height={305}
            className="h-16 w-auto md:h-20"
          />

          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-coral-600 uppercase"
          >
            <Sparkle className="h-4 w-4" />
            {SITE_TAGLINE}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl leading-[1.1] font-bold text-ink sm:text-5xl md:text-6xl"
          >
            Histórias que{" "}
            <span className="text-brand-blue-600">ensinam, emocionam</span>{" "}
            e aproximam famílias
          </motion.h1>

          <motion.p variants={item} className="max-w-md text-lg text-ink-soft">
            Livros infantis e atividades pensados com carinho para falar de
            empatia, amor, amizade e equilíbrio — histórias para ler e
            sentir junto com as crianças que você ama.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-5"
          >
            <Button href="/livros" variant="primary">
              Conheça os livros
            </Button>
            <Link
              to="/sobre-mim"
              className="text-sm font-semibold text-ink-soft underline decoration-2 underline-offset-4 transition-colors hover:text-brand-blue-600"
            >
              Sobre a autora
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Link to={`/livros/${livroDestaque.slug}`} className="block">
              <img
                src={livroDestaque.capa}
                alt={`Capa do livro ${livroDestaque.titulo}`}
                width={512}
                height={512}
                loading="eager"
                className="w-full -rotate-2 rounded-2xl shadow-soft-lg"
              />
            </Link>
            <span className="absolute -top-4 -left-4 rotate-[-6deg] rounded-full bg-brand-coral-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase shadow-brand">
              Lançamento
            </span>
          </motion.div>
          <p className="mt-4 text-center text-sm text-ink-soft md:text-left">
            Já disponível:{" "}
            <Link
              to={`/livros/${livroDestaque.slug}`}
              className="font-semibold text-brand-blue-600 underline decoration-2 underline-offset-4"
            >
              {livroDestaque.titulo}
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
}
