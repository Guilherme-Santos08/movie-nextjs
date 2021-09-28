import { Key } from "react";
import { cardContextProps } from "../interfaces/interfaces";

import CardContents from "../components/CardContents";
import SideBar from "../components/NavBar";
import { useFav } from "../hooks/useFav";

export default function Favorites() {
  const { favorites } = useFav();
  console.log(favorites);
  return (
    <>
      <SideBar />
      {favorites.length > 0 &&
        favorites.map((movie: cardContextProps, index: Key) => (
          <CardContents
            key={index}
            image={movie.poster_path}
            link={movie.id}
            path="movies"
          />
        ))}
    </>
  );
}
