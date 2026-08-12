import capaZecaTatu from "../assets/zeca_tatu_4.jpeg";
import zecaTatuAvo from "../assets/zeca_tatu_6.jpeg";
import zecaTatuToca from "../assets/zeca_tatu_9.jpeg";
import { BOOK_TITLE } from "../constants";

export interface ImagemGaleria {
  src: string;
  alt: string;
}

export interface Livro {
  slug: string;
  titulo: string;
  status: "publicado" | "em-breve";
  resumo: string;
  sinopse: string;
  capa?: string;
  galeria?: ImagemGaleria[];
}

export const livros: Livro[] = [
  {
    slug: "zeca-tatu-e-sua-roupa-nova",
    titulo: BOOK_TITLE,
    status: "publicado",
    resumo:
      "Uma aventura doce sobre crescer, se aceitar e encontrar conforto em quem a gente ama.",
    sinopse:
      "Zeca Tatu é um pequeno tatu cheio de personalidade que vive uma aventura especial na floresta ao lado de sua avó. Uma história doce sobre crescer, se aceitar e encontrar conforto em quem a gente ama.",
    capa: capaZecaTatu,
    galeria: [
      { src: capaZecaTatu, alt: "Capa do livro Zeca Tatu e Sua Roupa Nova" },
      {
        src: zecaTatuAvo,
        alt: "Avó e Zeca Tatu conversando em um banco na floresta",
      },
      {
        src: zecaTatuToca,
        alt: "Zeca Tatu saindo de sua toca entre samambaias",
      },
    ],
  },
  {
    slug: "em-breve-1",
    titulo: "Em breve",
    status: "em-breve",
    resumo: "Um novo título está a caminho, com todo o carinho de sempre.",
    sinopse: "",
  },
  {
    slug: "em-breve-2",
    titulo: "Em breve",
    status: "em-breve",
    resumo: "Um novo título está a caminho, com todo o carinho de sempre.",
    sinopse: "",
  },
  {
    slug: "em-breve-3",
    titulo: "Em breve",
    status: "em-breve",
    resumo: "Um novo título está a caminho, com todo o carinho de sempre.",
    sinopse: "",
  },
];

export const livroDestaque = livros.find((l) => l.status === "publicado")!;
