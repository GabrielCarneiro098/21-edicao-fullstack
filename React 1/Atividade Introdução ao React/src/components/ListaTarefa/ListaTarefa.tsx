import { propsTabela, Tabela } from "../Tabela";

export default function ListaTarefa() {
  const listaMercado: propsTabela[] = [
    {
      itemCol1: "Pagar conta",
      itemCol2: "Feito✅",
    },
    {
      itemCol1: "Academia",
      itemCol2: "Pendente🤡",
    },
    {
      itemCol1: "Estudar",
      itemCol2: "Feito✅",
    },
  ];

  return (
    <>
      <Tabela titleCol1="Tarefa" titleCol2="Feito" tableBody={listaMercado} />
    </>
  );
}
