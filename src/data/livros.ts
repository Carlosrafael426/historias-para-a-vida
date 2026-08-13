import capaZecaTatu from "../assets/zeca_tatu/zeca_tatu_4.jpeg";
import zecaTatuAvo from "../assets/zeca_tatu/zeca_tatu_6.jpeg";
import zecaTatuToca from "../assets/zeca_tatu/zeca_tatu_9.jpeg";
import capaLilica from "../assets/lilica/lilica_1.jpeg";
import lilicaTriste from "../assets/lilica/lilica_3.jpeg";
import lilicaFeliz from "../assets/lilica/lilica_5.jpeg";
import { BOOK_TITLE } from "../constants";

export interface ImagemGaleria {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Livro {
  slug: string;
  titulo: string;
  status: "publicado" | "em-breve";
  resumo: string;
  sinopse: string;
  capa?: string;
  capaWidth?: number;
  capaHeight?: number;
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
    capaWidth: 512,
    capaHeight: 512,
    galeria: [
      {
        src: capaZecaTatu,
        alt: "Capa do livro Zeca Tatu e Sua Roupa Nova",
        width: 512,
        height: 512,
      },
      {
        src: zecaTatuAvo,
        alt: "Avó e Zeca Tatu conversando em um banco na floresta",
        width: 512,
        height: 512,
      },
      {
        src: zecaTatuToca,
        alt: "Zeca Tatu saindo de sua toca entre samambaias",
        width: 1024,
        height: 1024,
      },
    ],
  },
  {
    slug: "lilica-aprende-a-se-amar",
    titulo: "Lilica Aprende a se Amar",
    status: "publicado",
    resumo:
      "Uma história doce sobre aceitação, amizade e o poder de aprender a se amar.",
    sinopse:
      "Lilica é uma pequena elefantinha cheia de sonhos que, cercada por seus amigos da floresta, descobre que as diferenças às vezes doem — mas é com carinho, amizade e compreensão que ela aprende a lição mais importante de todas: se aceitar e se amar exatamente do jeitinho que é.",
    capa: capaLilica,
    capaWidth: 1536,
    capaHeight: 1024,
    galeria: [
      {
        src: capaLilica,
        alt: "Capa do livro Lilica Aprende a se Amar",
        width: 1536,
        height: 1024,
      },
      {
        src: lilicaTriste,
        alt: "Lilica emocionada ao lado dos amigos da floresta",
        width: 1380,
        height: 752,
      },
      {
        src: lilicaFeliz,
        alt: "Lilica sorridente segurando uma flor perto de sua casinha",
        width: 1002,
        height: 522,
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
