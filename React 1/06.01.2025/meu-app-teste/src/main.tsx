import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./components/Card.tsx";

// import Button from "./components/Button.tsx";
// import Title from "./components/Title.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        titulo="Produto caro"
        descricao="Produto muito caro!"
        valor="R$9999.99"
        funcaoCard={() => alert("Ta ostentando patraum!😎")}
      />
      <Card
        titulo="Produto barato"
        descricao="Produto de pobre..."
        valor="R$0.13💩"
        funcaoCard={() => alert("Tira o escorpião do bolso miseravi!🦂")}
      />
    </div>
    {/* <Title texto="Teste" />
    <Title texto="Hello World" />
    <Button texto="teste"></Button>
    <Button
      texto="Butão de função"
      funcaoTeste={() => console.log("rodou")}
    ></Button>
    <Button texto="world"></Button> */}
  </StrictMode>
);
