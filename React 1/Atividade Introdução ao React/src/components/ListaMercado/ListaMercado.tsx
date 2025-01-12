import { propsTabela, Tabela } from "../Tabela";

export default function ListaMercado() {
  const listaMercado: propsTabela[] = [
    {
      itemCol1: "farinha",
      itemCol2: "2 kg",
    },
    {
      itemCol1: "açucar",
      itemCol2: "1 kg",
    },
    {
      itemCol1: "ovos",
      itemCol2: "12 un",
    },
  ];

  return (
    <>
      <Tabela
        titleCol1="Item"
        titleCol2="Quantidade"
        tableBody={listaMercado}
      />
    </>
  );
}
