import { Container, Circle } from "./styles";

interface Props {
  title: string;
  src: any;
}

const Actions: React.FC<Props> = ({ title, src }) => {
  return (
    <Container href="/">
      <Circle>{src}</Circle>
      <h1>{title}</h1>
    </Container>
  );
};

export default Actions;