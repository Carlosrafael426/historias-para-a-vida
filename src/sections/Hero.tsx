import logo from "../assets/logo.png";
import cover from "../assets/zeca_tatu_4.jpeg";
import { Button } from "../components/Button";
import { Blob } from "../components/Blob";
import { SALE_URL, SITE_TAGLINE, BOOK_TITLE } from "../constants";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <Blob className="pointer-events-none absolute -top-24 -left-28 h-72 w-72 text-brand-blue-100 md:h-96 md:w-96" />
      <Blob className="pointer-events-none absolute -bottom-32 -right-20 h-64 w-64 text-brand-coral-100 md:h-80 md:w-80" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="flex flex-col items-start gap-6 text-left">
          <img
            src={logo}
            alt="Histórias para a Vida"
            width={560}
            height={305}
            className="h-14 w-auto md:h-16"
          />

          <span className="text-sm font-semibold tracking-wide text-brand-coral-600 uppercase">
            {SITE_TAGLINE}
          </span>

          <h1 className="text-4xl leading-tight font-bold text-ink md:text-5xl">
            Conheça <span className="text-brand-blue-600">{BOOK_TITLE}</span>
          </h1>

          <p className="max-w-md text-lg text-ink-soft">
            Uma aventura doce sobre crescer, se aceitar e encontrar conforto em
            quem a gente ama — para ler e sentir junto com as crianças que
            você ama.
          </p>

          <Button href={SALE_URL} external variant="primary">
            Comprar o livro
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <img
            src={cover}
            alt="Capa do livro Zeca Tatu e Sua Roupa Nova"
            width={512}
            height={512}
            loading="eager"
            className="w-full rounded-2xl shadow-soft-lg"
          />
        </div>
      </div>
    </header>
  );
}
