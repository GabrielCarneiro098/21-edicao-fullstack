import styled from "styled-components";

const Footer = styled.footer`
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 0 40px;

  div:first-of-type ul {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: black;
    opacity: 0.5;
  }

  a:hover {
    opacity: 1;
  }

  div {
    width: 50vw;
  }

  ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
    text-decoration: none;
  }

  .icons {
    display: flex;
    align-items: end;
    justify-content: end;

    font-size: 30px;
  }

  .icons ul {
    gap: 20px;
  }
`;

function FooterSection() {
  return (
    <Footer>
      <div>
        <ul>
          <a href="#">
            <li>
              <p>About</p>
            </li>
          </a>
          <li>.</li>
          <a href="#">
            <li>
              <p>Contact</p>
            </li>
          </a>
          <li>.</li>
          <a href="#">
            <li>
              <p>Terms of Use</p>
            </li>
          </a>
          <li>.</li>
          <a href="#">
            <li>
              <p>Privacy policy</p>
            </li>
          </a>
        </ul>
        <p>
          Developed by
          <a target="blank" href="https://github.com/GabrielCarneiro098">
            Gabriel Carneiro das Virgens
          </a>
          2025. All Rights Reserved
        </p>
      </div>
      <div className="icons">
        <ul>
          <a href="#">
            <li>
              <i className="bi bi-facebook"></i>
            </li>
          </a>

          <a href="#">
            <li>
              <i className="bi bi-instagram"></i>
            </li>
          </a>

          <a href="#">
            <li>
              <i className="bi bi-twitter-x"></i>
            </li>
          </a>
        </ul>
      </div>
    </Footer>
  );
}

export default FooterSection;
