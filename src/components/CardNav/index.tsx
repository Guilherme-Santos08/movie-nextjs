/* eslint-disable @next/next/link-passhref */
import Image from "next/image";

import { useRouter } from "next/router";
import Link from "next/link";

import { Container } from "./styles";

type CardVarProps = {
  text?: String;
  svg: any;
};

export default function CardNav({ text, svg }: CardVarProps) {
  const router = useRouter();

  return (
    <Container className={router.pathname == "/" ? "active" : ""}>
      <Link href="/">
        <a>
          <div className="icon">{svg}</div>
          {text}
          <div className="box-active"></div>
        </a>
      </Link>
    </Container>
  );
}
