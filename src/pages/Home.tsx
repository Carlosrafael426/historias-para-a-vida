import { Galeria } from "../sections/Galeria";
import { Hero } from "../sections/Hero";
import { ProximosLancamentos } from "../sections/ProximosLancamentos";
import { SobreAutora } from "../sections/SobreAutora";
import { SobreLivro } from "../sections/SobreLivro";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { SITE_TAGLINE } from "../constants";

export function Home() {
  useDocumentTitle(SITE_TAGLINE);

  return (
    <>
      <Hero />
      <SobreLivro />
      <SobreAutora />
      <Galeria />
      <ProximosLancamentos />
    </>
  );
}
