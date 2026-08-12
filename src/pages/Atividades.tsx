import { Palette, Puzzle, Search, SquareDashedMousePointer } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../components/Badge";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { BOOK_TITLE } from "../constants";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const atividades = [
  {
    icon: Palette,
    titulo: "Desenho para colorir",
    descricao: `Uma ilustração do ${BOOK_TITLE} para imprimir e colorir com a criançada.`,
    iconBg: "bg-brand-coral-100",
    iconColor: "text-brand-coral-600",
  },
  {
    icon: Search,
    titulo: "Caça-palavras da floresta",
    descricao: "Encontre os amigos de Zeca Tatu escondidos entre as letras.",
    iconBg: "bg-brand-blue-100",
    iconColor: "text-brand-blue-600",
  },
  {
    icon: Puzzle,
    titulo: "Jogo da memória",
    descricao: "Combine os pares de cartas com os personagens da floresta.",
    iconBg: "bg-accent-green/15",
    iconColor: "text-accent-green-700",
  },
  {
    icon: SquareDashedMousePointer,
    titulo: "Ligue os pontos",
    descricao: "Uma atividade para desenhar Zeca Tatu ligando os números.",
    iconBg: "bg-accent-purple/15",
    iconColor: "text-accent-purple-700",
  },
];

export function Atividades() {
  useDocumentTitle("Atividades");

  return (
    <>
      <PageHero
        eyebrow="Para brincar e aprender"
        title="Atividades"
        description="Materiais divertidos inspirados nos livros, prontos para imprimir e curtir em família. Em breve, disponíveis para download."
      />

      <SectionContainer>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atividades.map((atividade, index) => (
            <Reveal key={atividade.titulo} delay={index * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col items-center gap-3 rounded-xl border border-line bg-white p-6 text-center shadow-soft-sm"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${atividade.iconBg}`}
                >
                  <atividade.icon className={`h-6 w-6 ${atividade.iconColor}`} />
                </span>
                <h2 className="font-display text-base font-semibold text-ink">
                  {atividade.titulo}
                </h2>
                <p className="text-sm text-ink-soft">{atividade.descricao}</p>
                <Badge color="mustard">Em breve</Badge>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
