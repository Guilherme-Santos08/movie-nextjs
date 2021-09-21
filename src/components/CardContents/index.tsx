/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { Container } from "./styles";

const ImgMovie = "https://image.tmdb.org/t/p/w500/";

type CardImage = {
  image: any;
};

export default function CardContents({ image }: CardImage) {
  return (
    <Container>
      <img src={ImgMovie + image} alt="" />
    </Container>
  );
}
