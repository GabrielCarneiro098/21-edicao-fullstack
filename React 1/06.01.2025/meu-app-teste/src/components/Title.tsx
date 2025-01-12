interface TitleProps {
  texto: string;
}

function Title(TitleProps: TitleProps) {
  return (
    <>
      <h1>{TitleProps.texto}</h1>
    </>
  );
}

export default Title;
