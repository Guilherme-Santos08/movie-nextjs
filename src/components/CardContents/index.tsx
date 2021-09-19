import Image from "next/image";
import spiderMan from "../../assets/spider-man.jpg";
import { Container } from "./styles";

export default function CardContents() {
  return (
    <Container>
      <div className="card-content">
        <Image src={spiderMan} alt="" />
      </div>
    </Container>
  );
}
