import photo from "../assets/foto-izabel.jpeg";
import { Button } from "../components/Button";
import { Blob } from "../components/Blob";
import { InstagramIcon } from "../components/InstagramIcon";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeading } from "../components/SectionHeading";
import { AUTHOR_NAME, INSTAGRAM_URL } from "../constants";

export function SobreAutora() {
  return (
    <div className="bg-brand-blue-50/60">
      <SectionContainer id="sobre-a-autora">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:items-center">
          <div className="relative mx-auto w-56 md:w-full">
            <Blob className="pointer-events-none absolute -inset-8 -z-10 text-brand-coral-100" />
            <img
              src={photo}
              alt={`${AUTHOR_NAME}, autora do livro`}
              width={1134}
              height={1512}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-2xl object-cover shadow-soft-lg"
            />
          </div>

          <div>
            <SectionHeading eyebrow="Sobre a autora" title={AUTHOR_NAME} />
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Izabel Devecchi é escritora e apaixonada por contar histórias
              que ensinam, emocionam e aproximam famílias através da leitura.
            </p>
            <Button
              href={INSTAGRAM_URL}
              external
              variant="secondary"
              icon={<InstagramIcon />}
            >
              Siga no Instagram
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
