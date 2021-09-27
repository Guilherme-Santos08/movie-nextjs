import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { apiMain } from "../pages/api/api";

interface listProviderProps {
  children: ReactNode;
}

interface list {
  handlePrevClick: () => void;
  handleNextClick: () => void;

  list: [] | undefined;
  setSelects: (selects: string) => void;
  listSeries: [] | undefined;

  searchMovies: string | number | readonly string[] | undefined;

  pages: Number;
  selects: string | number | readonly string[] | undefined;
}

export const ListContext = createContext({} as list);

export function ListContextProvider({ children }: listProviderProps) {
  const [pages, setPages] = useState(1);
  const [list, setList] = useState();
  const [listSeries, setListSeries] = useState();
  const [selects, setSelects] = useState("popular");
  const [searchMovies, setSearchMovies] = useState("");
  console.log(list)

  // Paginas dos Filmes
  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await apiMain.get(
        `movie/${selects}?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=${pages}`
      );
      const respData = await resp.data.results;
      setList(respData);
    };
    fetchMovie();
  }, [pages, selects]);

  // Paginas das Series
  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await apiMain.get(
        `tv/${selects}?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=${pages}`
      );
      const respData = await resp.data.results;
      setListSeries(respData);
    };
    fetchMovie();
  }, [pages, selects]);

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
      value={{
        handleNextClick,
        handlePrevClick,
        list,
        pages,
        listSeries,
        setSelects,
        selects,
        searchMovies,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
