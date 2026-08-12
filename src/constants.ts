export const SALE_URL = "https://SUBSTITUIR-LINK-DE-VENDA.com";
export const INSTAGRAM_URL = "https://www.instagram.com/izabeldevecchi/";
export const CONTACT_EMAIL = "contato@SUBSTITUIR-EMAIL.com";

export const SITE_NAME = "Histórias para a Vida";
export const SITE_TAGLINE = "Sua Jornada Através da Leitura";
export const BOOK_TITLE = "Zeca Tatu e Sua Roupa Nova";
export const AUTHOR_NAME = "Izabel Devecchi";

export interface NavItem {
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Livros", to: "/livros" },
  { label: "Sobre mim", to: "/sobre-mim" },
  { label: "Loja", href: SALE_URL, external: true },
  { label: "Lançamentos", to: "/proximos-lancamentos" },
  { label: "Atividades", to: "/atividades" },
];
