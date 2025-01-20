import styled from "styled-components";

const Article = styled.article<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};

  div {
    width: 50vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div article {
    padding: 50px;
    font-size: 20px;
  }

  div img {
    width: 100%;
    height: 100%;
  }
`;

interface ArticleProps {
  image: string;
  text: string;
  reverse: boolean;
}

function ArticleComponent(props: ArticleProps) {
  return (
    <Article $reverse={props.reverse}>
      <div>
        <article>
          <h1>Lorem Ipsum</h1>
          <p>{props.text}</p>
        </article>
      </div>
      <div>
        <img src={props.image}></img>
      </div>
    </Article>
  );
}

export default ArticleComponent;
