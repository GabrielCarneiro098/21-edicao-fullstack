import styled from "styled-components";

const Wrapper = styled.section`
  height: 10vh;
  border-bottom: 1px solid;
  border-color: gainsboro;
  display: flex;
  justify-content: space-around;
  align-items: center;

  input {
    border-radius: 10px;
  }
`;

export function Header() {
  return (
    <Wrapper>
      <h1>
        <i className={"bi bi-book-half"}></i>Biblioteca encantada
      </h1>
      <input type="search" />
    </Wrapper>
  );
}
