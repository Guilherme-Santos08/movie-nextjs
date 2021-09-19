/* eslint-disable @next/next/link-passhref */
import Image from "next/image";

import { useRouter } from "next/router";
import Link from "next/link";

import { Container } from "./styles";

type CardNavProps = {
  text?: String;
  svg: any;
  routers: String;
};

export default function CardNav({ text, svg, routers }: CardNavProps) {
  const router = useRouter();
  console.log(router.pathname.toString());

  return (
    <Container>
      <Link href={`${routers ? routers : "/"}`}>
        <a
          className={router.pathname == `${routers}` ? "active" : ""} 
        >
          <div className="icon">{svg}</div>
          {text}
          <div className="box-active"></div>
        </a>
      </Link>
    </Container>
  );
}