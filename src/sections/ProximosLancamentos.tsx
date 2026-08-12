import { Book } from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { SectionContainer } from "../components/SectionContainer";
import { INSTAGRAM_URL } from "../constants";

const cards = [
  { iconBg: "bg-brand-blue-100", iconColor: "text-brand-blue-600" },
  { iconBg: "bg-accent-green/15", iconColor: "text-accent-green" },
  { iconBg: "bg-accent-purple/15", iconColor: "text-accent-purple" },
];

export function ProximosLancamentos() {
  return (
    <SectionContainer id="proximos-lancamentos">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <Badge color="mustard">Em breve</Badge>
        <h2 className="text-3xl font-bold text-ink md:text-4xl">
          Próximos lançamentos
        </h2>
        <p className="max-w-xl text-ink-soft">
          Novas aventuras estão a caminho! Fique de olho para não perder o
          próximo lançamento.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-8 text-center shadow-soft-sm"
          >
            <span
              className={`flex h-16 w-16 items-center justify-center rounded-full ${card.iconBg}`}
            >
              <Book className={`h-7 w-7 ${card.iconColor}`} />
            </span>
            <h3 className="font-display text-lg font-semibold text-ink">
              Em breve
            </h3>
            <p className="text-sm text-ink-soft">
              Um novo título está a caminho, com todo o carinho de sempre.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href={INSTAGRAM_URL} external variant="ghost">
          Quero ser avisado
        </Button>
      </div>
    </SectionContainer>
  );
}
