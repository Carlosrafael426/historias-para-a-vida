import illustration1 from "../assets/zeca_tatu_6.jpeg";
import illustration2 from "../assets/zeca_tatu_9.jpeg";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeading } from "../components/SectionHeading";
import { BOOK_TITLE } from "../constants";

export function SobreLivro() {
  return (
    <SectionContainer id="sobre-o-livro">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading eyebrow="Sobre o livro" title={BOOK_TITLE} />
          <p className="text-lg leading-relaxed text-ink-soft">
            Zeca Tatu é um pequeno tatu cheio de personalidade que vive uma
            aventura especial na floresta ao lado de sua avó. Uma história
            doce sobre crescer, se aceitar e encontrar conforto em quem a
            gente ama.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm py-6">
          <img
            src={illustration1}
            alt="Avó e Zeca Tatu conversando em um banco na floresta"
            width={512}
            height={512}
            loading="lazy"
            decoding="async"
            className="w-3/4 rounded-xl shadow-soft-md"
          />
          <img
            src={illustration2}
            alt="Zeca Tatu saindo de sua toca entre samambaias"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="absolute right-0 -bottom-6 w-1/2 rounded-xl shadow-soft-lg ring-4 ring-cream md:right-2"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
