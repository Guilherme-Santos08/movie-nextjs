import Image from "next/image";

import iconHome from "../../assets/home-solid.svg";

import { Container } from "./styles";

type CardVarProps = {
  text?: String;
  svg: any;
};

export default function CardNav({ text, svg }: CardVarProps) {
  return (
    <Container>
      <div className="icon">{svg}</div>
      {text}
      <div className="box-active"></div>
    </Container>
  );
}
