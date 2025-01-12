import { propsTabela, Tabela } from "../Tabela";

export default function ListaConquista() {
  const listaMercado: propsTabela[] = [
    {
      itemCol1: "Comprar primeira moto",
      itemCol2: "Conquistou🥳",
    },
    {
      itemCol1: "Comprar primeiro carro",
      itemCol2: "Not today...😢",
    },
    {
      itemCol1: "Montar próprio PC",
      itemCol2: "Conquistou💻",
    },
    {
      itemCol1: "Entrar na areá de TI",
      itemCol2: "Conquistou🤓",
    },
    {
      itemCol1: "Montar setup",
      itemCol2: "Talvez um dia... 🥲",
    },
  ];

  return (
    <>
      <Tabela
        titleCol1="Metas"
        titleCol2="Concluído"
        tableBody={listaMercado}
      />
    </>
  );
}
