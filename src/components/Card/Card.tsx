import { Container } from "./styles";

interface Props {
  bgColor: string;
  title: string;
  value: string;
  fontSize?: string;
  alignItems?: string;
}

const Card: React.FC<Props> = ({
  bgColor,
  title,
  value,
  fontSize,
  alignItems,
}) => {
  return (
    <Container bgColor={bgColor} fontSize={fontSize} alignItems={alignItems}>
      <h1>{title}</h1>
      <div>
        <h2>{value}</h2>
        <span>BRL</span>
      </div>
    </Container>
  );
};

export default Card;
