import { Hero } from "../sections/Hero";
import { ProximosLancamentos } from "../sections/ProximosLancamentos";
import { SobreAutora } from "../sections/SobreAutora";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { SITE_TAGLINE } from "../constants";

export function Home() {
  useDocumentTitle(SITE_TAGLINE);

  return (
    <>
      <Hero />
      <SobreAutora />
      <ProximosLancamentos />
    </>
  );
}
