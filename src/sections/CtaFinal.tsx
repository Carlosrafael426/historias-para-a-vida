import { Button } from "../components/Button";
import { SectionContainer } from "../components/SectionContainer";
import { BOOK_TITLE, SALE_URL } from "../constants";

export function CtaFinal() {
  return (
    <div className="bg-brand-blue-600">
      <SectionContainer>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Leve {BOOK_TITLE} para perto de você
          </h2>
          <p className="max-w-xl text-brand-blue-50">
            Uma história para ler, sentir e guardar no coração — junto com
            quem você ama.
          </p>
          <Button href={SALE_URL} external variant="onColor">
            Comprar o livro
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}
