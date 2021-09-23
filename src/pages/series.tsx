import { Key } from "react";
import { useList } from "../hooks/useList";
import Head from "next/head";

import SideBar from "../components/NavBar";
import LayoutFlexWrap from "../components/LayoutFlexWrap";
import CardContents from "../components/CardContents";

import { cardContextProps } from "../interfaces/interfaces";

export default function Series() {
  const { list, handleNextClick, handlePrevClick, pages, listSeries } = useList();

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
      >
        {listSeries.length > 0 &&
          listSeries.map((movie: cardContextProps, index: Key) => (
            <CardContents
              key={index}
              image={movie.poster_path}
              link={movie.id}
              path="series"
            />
          ))}
      </LayoutFlexWrap>
    </>
  );
}
