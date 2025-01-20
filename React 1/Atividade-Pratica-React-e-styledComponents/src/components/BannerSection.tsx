import styled from "styled-components";

const Banner = styled.div<{ $background: string; $height: string }>`
  height: ${(props) => props.$height};
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
`;

interface BannerProps {
  text: string;
  image: string;
  height: string;
}

function BannerSection(props: BannerProps) {
  return (
    <>
      <Banner $background={props.image} $height={props.height}>
        <h1>{props.text}</h1>
      </Banner>
    </>
  );
}

export default BannerSection;
