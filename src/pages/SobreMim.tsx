import photo from "../assets/foto-izabel.jpeg";
import { Blob } from "../components/Blob";
import { Button } from "../components/Button";
import { InstagramIcon } from "../components/InstagramIcon";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionContainer } from "../components/SectionContainer";
import { AUTHOR_NAME, INSTAGRAM_URL } from "../constants";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function SobreMim() {
  useDocumentTitle("Sobre mim");

  return (
    <>
      <PageHero eyebrow="Sobre mim" title={AUTHOR_NAME} />

      <SectionContainer>
        <div className="grid gap-12 md:grid-cols-[320px_1fr] md:items-center">
          <Reveal className="relative mx-auto w-64 md:w-full">
            <Blob className="pointer-events-none absolute -inset-8 -z-10 text-brand-coral-100" />
            <img
              src={photo}
              alt={`${AUTHOR_NAME}, autora do livro`}
              width={1134}
              height={1512}
              loading="eager"
              className="aspect-square w-full rounded-2xl object-cover shadow-soft-lg"
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className="space-y-4 text-lg leading-relaxed text-ink-soft"
          >
            <p>
              Izabel Devecchi é educadora, cristã e temente a Deus, com um
              carinho enorme por crianças — características que se tornaram
              a essência de tudo o que escreve.
            </p>
            <p>
              Como educadora, viveu de perto o poder das histórias na
              formação de valores como empatia, amor, amizade, saúde e
              equilíbrio. É esse olhar atento, acolhedor e cheio de fé que
              dá vida a personagens como Zeca Tatu.
            </p>
            <p>
              Acredita que os livros são pontes entre gerações, e que cada
              leitura compartilhada em família é uma semente de bons
              valores, plantada com carinho para florescer no coração das
              crianças.
            </p>
            <Button
              href={INSTAGRAM_URL}
              external
              variant="secondary"
              icon={<InstagramIcon />}
              className="mt-2"
            >
              Siga no Instagram
            </Button>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
