import { BrowserRouter, Route, Routes } from "react-router";
import ListaMercado from "../components/ListaMercado/ListaMercado";
import ListaTarefa from "../components/ListaTarefa/ListaTarefa";
import ListaConquista from "../components/ListaConquista/ListaConquista";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../components/NotFound/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercado" element={<ListaMercado />} />
        <Route path="/tarefa" element={<ListaTarefa />} />
        <Route path="/conquista" element={<ListaConquista />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
