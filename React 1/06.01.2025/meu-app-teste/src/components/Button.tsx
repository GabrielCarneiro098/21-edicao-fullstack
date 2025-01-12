interface props {
  texto: string;
  funcaoTeste?: () => void;
}

function Button(parametro: props) {
  return (
    <>
      <button onClick={parametro.funcaoTeste}>{parametro.texto}</button>
    </>
  );
}

export default Button;
