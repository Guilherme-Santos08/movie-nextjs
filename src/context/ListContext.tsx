import { createContext, ReactNode, useEffect, useState } from "react";
import { apiMain } from "../pages/api/api";

interface listProviderProps {
  children: ReactNode;
}

interface list {
  handlePrevClick: () => void;
  handleNextClick: () => void;
  setPath: any;
  movieList: any;
  moviePages: Number;
}

export const ListContext = createContext({} as list);

export function ListContextProvider({ children }: listProviderProps) {
  const [moviePages, setMoviePages] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [path, setPath] = useState("")
  console.log(movieList);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await apiMain.get(
        `${path ? path : "movie"}/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=${moviePages}`
      );
      const respData = resp.data.results;
      setMovieList(respData);
    };
    fetchMovie();
  }, [moviePages, path]);

  const handleNextClick = () => {
    setMoviePages(moviePages + 1);
  };

  const handlePrevClick = () => {
    setMoviePages(moviePages - 1);
    if (moviePages <= 1) {
      setMoviePages(1);
    }
  };

  return (
    <ListContext.Provider
      value={{ handleNextClick, handlePrevClick, movieList, moviePages, setPath }}
    >
      {children}
    </ListContext.Provider>
  );
}
