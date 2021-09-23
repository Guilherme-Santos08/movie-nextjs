import { createContext, ReactNode, useEffect, useState } from "react";
import { apiMain } from "../pages/api/api";

interface listProviderProps {
  children: ReactNode;
}

interface list {
  handlePrevClick: () => void;
  handleNextClick: () => void;
  list: any;
  listSeries: any;
  pages: Number;
}

export const ListContext = createContext({} as list);

export function ListContextProvider({ children }: listProviderProps) {
  const [pages, setPages] = useState(1);
  const [list, setList] = useState([]);
  const [listSeries, setListSeries] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await apiMain.get(
        `movie/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=${pages}`
      );
      const respData = await resp.data.results;
      setList(respData);
    };
    fetchMovie();
  }, [pages]);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await apiMain.get(
        `tv/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=${pages}`
      );
      const respData = await resp.data.results;
      setListSeries(respData);
    };
    fetchMovie();
  }, [pages]);

  const handleNextClick = () => {
    setPages(pages + 1);
  };

  const handlePrevClick = () => {
    setPages(pages - 1);
    if (pages <= 1) {
      setPages(1);
    }
  };

  return (
    <ListContext.Provider
      value={{ handleNextClick, handlePrevClick, list, pages, listSeries }}
    >
      {children}
    </ListContext.Provider>
  );
}
