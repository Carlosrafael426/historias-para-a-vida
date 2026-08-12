import { CtaFinal } from "./sections/CtaFinal";
import { Footer } from "./sections/Footer";
import { Galeria } from "./sections/Galeria";
import { Hero } from "./sections/Hero";
import { ProximosLancamentos } from "./sections/ProximosLancamentos";
import { SobreAutora } from "./sections/SobreAutora";
import { SobreLivro } from "./sections/SobreLivro";

function App() {
  return (
    <>
      <Hero />
      <main>
        <SobreLivro />
        <SobreAutora />
        <Galeria />
        <ProximosLancamentos />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}

export default App;
