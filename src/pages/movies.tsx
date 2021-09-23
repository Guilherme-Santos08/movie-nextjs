import { Key, useEffect, useState } from "react";
import { cardContextProps } from "../interfaces/interfaces";
import { apiMain } from "./api/api";

import LayoutFlexWrap from "../components/LayoutFlexWrap";
import SideBar from "../components/NavBar";
import CardContents from "../components/CardContents";

export default function Movies() {
  const [moviePages, setMoviePages] = useState(1);
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await apiMain.get(
        `movie/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=${moviePages}`
      );
      const respData = resp.data.results;
      setMovieList(respData);
    };
    fetchMovie();
  }, [moviePages]);

  const handleNextClick = () => {
    setMoviePages(moviePages + 1)
  };

  const handlePrevClick = () => {
    setMoviePages(moviePages -1)
    if(moviePages <= 1) {
      setMoviePages(1)
    }
  }

  return (
    <>
      <SideBar />
      <LayoutFlexWrap handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} pages={moviePages}>
        {movieList.length > 0 &&
          movieList.map((movie: cardContextProps, index: Key) => (
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
