import { InstagramIcon } from "../components/InstagramIcon";
import { INSTAGRAM_URL, SITE_NAME } from "../constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center">
        <span className="font-display text-lg font-bold text-brand-blue-600">
          {SITE_NAME}
        </span>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand-coral-600"
        >
          <InstagramIcon />
          @izabeldevecchi
        </a>

        <p className="text-xs text-ink-soft">
          © {year} {SITE_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
