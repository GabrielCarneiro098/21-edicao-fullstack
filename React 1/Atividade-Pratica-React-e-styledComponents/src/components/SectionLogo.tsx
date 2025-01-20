import styled from "styled-components";
import Logo from "./Logo";

const SectionLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  gap: 10vw;
  padding: 50px 20px;
`;

function SectionLogo() {
  return (
    <SectionLogos>
      <Logo
        titulo="Somente para Desktop"
        logo="bi bi-display"
        descricao="Vamos aprender, como utilizar um framework."
      />
      <Logo
        titulo="Criado com components"
        logo="bi bi-box-seam-fill"
        descricao="Utilizamos o Styled Components."
      />
      <Logo
        titulo="Facil aproveitamentos"
        logo="bi bi-check-circle"
        descricao="Estamos no caminho."
      />
    </SectionLogos>
  );
}

export default SectionLogo;
