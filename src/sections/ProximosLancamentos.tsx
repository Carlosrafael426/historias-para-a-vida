import { Book } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { INSTAGRAM_URL } from "../constants";
import { livros } from "../data/livros";

const cardStyles = [
  { iconBg: "bg-brand-blue-100", iconColor: "text-brand-blue-600" },
  { iconBg: "bg-accent-green/15", iconColor: "text-accent-green-700" },
  { iconBg: "bg-accent-purple/15", iconColor: "text-accent-purple-700" },
];

export function ProximosLancamentos() {
  const proximos = livros.filter((livro) => livro.status === "em-breve");

  return (
    <SectionContainer id="proximos-lancamentos">
      <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
        <Badge color="mustard">Em breve</Badge>
        <h2 className="text-3xl font-bold text-ink md:text-4xl">
          Próximos lançamentos
        </h2>
        <p className="max-w-xl text-ink-soft">
          Novas aventuras estão a caminho! Fique de olho para não perder o
          próximo lançamento.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-3">
        {proximos.map((livro, index) => {
          const style = cardStyles[index % cardStyles.length];
          return (
            <Reveal key={livro.slug} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col items-center gap-3 rounded-xl border border-line bg-white p-8 text-center shadow-soft-sm"
              >
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${style.iconBg}`}
                >
                  <Book className={`h-7 w-7 ${style.iconColor}`} />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {livro.titulo}
                </h3>
                <p className="text-sm text-ink-soft">{livro.resumo}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 flex flex-wrap justify-center gap-6">
        <Link
          to="/proximos-lancamentos"
          className="inline-flex items-center text-sm font-semibold text-brand-blue-600 underline decoration-2 underline-offset-4 transition-colors hover:text-brand-coral-600"
        >
          Ver todos os lançamentos
        </Link>
        <Button href={INSTAGRAM_URL} external variant="ghost">
          Quero ser avisado
        </Button>
      </Reveal>
    </SectionContainer>
  );
}
