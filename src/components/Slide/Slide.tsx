import { Container } from "./styles";

interface Props {
  src: string;
  text: string;
}

const Slide: React.FC<Props> = ({ src, text }) => {
  return (
    <Container>
      <img src={src} alt="" />
      <p>{text}</p>
    </Container>
  );
};

export default Slide;
