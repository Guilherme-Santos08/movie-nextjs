import { Container } from "./styles";

interface ScrollProps {
  name: String;
  children: JSX.Element | JSX.Element[] | {};
}

export default function ShowScroll({ children, name }: ScrollProps) {
  return (
    <Container>
      <h3>{name}</h3>
      <div className="scroll">{children}</div>
    </Container>
  );
}
