import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";

const Livros = lazy(() =>
  import("./pages/Livros").then((m) => ({ default: m.Livros })),
);
const LivroDetalhe = lazy(() =>
  import("./pages/LivroDetalhe").then((m) => ({ default: m.LivroDetalhe })),
);
const SobreMim = lazy(() =>
  import("./pages/SobreMim").then((m) => ({ default: m.SobreMim })),
);
const Lancamentos = lazy(() =>
  import("./pages/Lancamentos").then((m) => ({ default: m.Lancamentos })),
);
const Atividades = lazy(() =>
  import("./pages/Atividades").then((m) => ({ default: m.Atividades })),
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="/livros/:slug" element={<LivroDetalhe />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
            <Route path="/proximos-lancamentos" element={<Lancamentos />} />
            <Route path="/atividades" element={<Atividades />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
