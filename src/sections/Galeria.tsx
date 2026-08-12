import cover from "../assets/zeca_tatu_4.jpeg";
import illustration1 from "../assets/zeca_tatu_6.jpeg";
import illustration2 from "../assets/zeca_tatu_9.jpeg";
import { SectionContainer } from "../components/SectionContainer";
import { SectionHeading } from "../components/SectionHeading";

const images = [
  {
    src: cover,
    alt: "Capa do livro Zeca Tatu e Sua Roupa Nova",
    width: 512,
    height: 512,
  },
  {
    src: illustration1,
    alt: "Avó e Zeca Tatu conversando em um banco na floresta",
    width: 512,
    height: 512,
  },
  {
    src: illustration2,
    alt: "Zeca Tatu saindo de sua toca entre samambaias",
    width: 1024,
    height: 1024,
  },
];

export function Galeria() {
  return (
    <SectionContainer id="galeria">
      <SectionHeading
        eyebrow="Ilustrações"
        title="Galeria do livro"
        align="center"
        className="mx-auto"
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-lg object-cover shadow-soft-sm transition-transform duration-200 hover:-translate-y-1"
          />
        ))}
      </div>
    </SectionContainer>
  );
}
