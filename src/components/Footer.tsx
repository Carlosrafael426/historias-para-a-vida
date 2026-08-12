import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  NAV_ITEMS,
  SITE_NAME,
} from "../constants";
import { InstagramIcon } from "./InstagramIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-brand-blue-50/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <span className="font-display text-xl font-bold text-brand-blue-600">
            {SITE_NAME}
          </span>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            Histórias que ensinam, emocionam e aproximam famílias através da
            leitura.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand-coral-600"
          >
            <InstagramIcon />
            @izabeldevecchi
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-ink-soft transition-colors hover:text-brand-coral-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-blue-500" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-brand-coral-600"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon className="h-4 w-4 shrink-0 text-brand-blue-500" />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-coral-600"
              >
                @izabeldevecchi
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-5 text-center text-xs text-ink-soft">
        © {year} {SITE_NAME}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
