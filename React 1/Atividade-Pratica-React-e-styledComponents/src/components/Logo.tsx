import styled from "styled-components";

interface LogoProps {
  logo: string;
  titulo: string;
  descricao: string;
}

const LogoStyle = styled.div`
  text-align: center;

  i {
    font-size: 4rem;
  }
`;

function Logo(props: LogoProps) {
  return (
    <LogoStyle>
      <i className={props.logo}></i>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </LogoStyle>
  );
}

export default Logo;
