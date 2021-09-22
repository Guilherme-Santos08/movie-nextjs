/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Container } from "./styles";

const ImgMovie = "https://image.tmdb.org/t/p/w500/";

type CardImage = {
  image: any;
  link: Number;
  path: String;
};

export default function CardContents({ image, link, path }: CardImage) {
  return (
    <Link href={`/${path}/[id]`} as={`/${path}/${link}`}>
      <a>
        <Container>
          <img src={ImgMovie + image} alt="" />
        </Container>
      </a>
    </Link>
  );
}
