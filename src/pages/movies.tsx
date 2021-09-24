import { Key } from "react";
import { cardContextProps } from "../interfaces/interfaces";
import Head from "next/head";

import LayoutFlexWrap from "../components/LayoutFlexWrap";
import SideBar from "../components/NavBar";
import CardContents from "../components/CardContents";
import { useList } from "../hooks/useList";

export default function Movies() {
  const { list, handleNextClick, handlePrevClick, pages } = useList();

  return (
    <>
      <Head>
        <title>Movie</title>
      </Head>
      <SideBar />
      <LayoutFlexWrap
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        pages={pages}
        valueOption={"now_playing"}
      >
        {list.length > 0 &&
          list.map((movie: cardContextProps, index: Key) => (
            <CardContents
              key={index}
              image={movie.poster_path}
              link={movie.id}
              path="movies"
            />
          ))}
      </LayoutFlexWrap>
    </>
  );
}
