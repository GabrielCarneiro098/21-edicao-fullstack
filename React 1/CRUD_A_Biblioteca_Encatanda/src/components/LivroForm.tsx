import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";

interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
}

const LivroForms = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 10px;
`;

export function LivroForm() {
  const [data, setData] = useState<Livro>({
    titulo: "",
    autor: "",
    anoPublicacao: "",
    dataCadastro: "",
    genero: "",
    descricao: "",
  });

  const [dataArray, setDataArray] = useState<Livro[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDataArray((prevArray) => [...prevArray, data]);
    setData({
      titulo: "",
      autor: "",
      anoPublicacao: "",
      dataCadastro: "",
      genero: "",
      descricao: "",
    });
  };

  return (
    <>
      <LivroForms onSubmit={handleSubmit}>
        <label>Titulo</label>
        <input
          type="text"
          name="titulo"
          value={data.titulo}
          onChange={handleInputChange}
          placeholder="Titulo"
        />
        <label>Autor</label>
        <input
          name="autor"
          type="text"
          value={data.autor}
          onChange={handleInputChange}
        />
        <label>Ano de Publicação</label>
        <input
          type="text"
          name="anoPublicacao"
          value={data.anoPublicacao}
          onChange={handleInputChange}
        />
        <label>Data de cadastro</label>
        <input
          type="text"
          name="dataCadastro"
          value={data.dataCadastro}
          onChange={handleInputChange}
        />
        <label>Genero</label>
        <input
          type="text"
          name="genero"
          value={data.genero}
          onChange={handleInputChange}
        />
        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          value={data.descricao}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </LivroForms>

      <div>
        <h3>Lista de livros:</h3>
        <ul>
          {dataArray.map((item, index) => (
            <li key={index}>
              {`Titulo: ${item.titulo}, autor: ${item.autor}, Ano de Publicação: ${item.anoPublicacao}, Data de cadastro: ${item.dataCadastro}, Descrição: ${item.descricao}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
