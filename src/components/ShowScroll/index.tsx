import CardContents from "../CardContents";
import { Container } from "./styles";

export default function ShowScroll() {
  return (
    <Container>
      <h3>Movies</h3>

      <div className="scroll">
        <CardContents />
        <CardContents />
        <CardContents />
        <CardContents />
        <CardContents />
        <CardContents />
        <CardContents />
        <CardContents />
      </div>
    </Container>
  );
}
