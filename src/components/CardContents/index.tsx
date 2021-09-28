/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Container } from "./styles";

const ImgMovie = "https://image.tmdb.org/t/p/w500/";

type CardImage = {
  image: any;
  link: Number;
  path: String;
  onClick?: any;
};

export default function CardContents({
  image,
  link,
  path,
  onClick,
}: CardImage) {
  return (
    <Container>
      <Link href={`/${path}/[id]`} as={`/${path}/${link}`}>
        <a>
          <div className="card">
            <img src={ImgMovie + image} alt="" />
          </div>
        </a>
      </Link>
    </Container>
  );
}
