import { createContext, ReactNode, useState } from "react";

interface favProviderProps {
  children: ReactNode;
}

interface listContextProps {
  favorites: any;
  setFavorites: any;
}

export const FavContext = createContext({} as listContextProps);

export function FavContextProvider({ children }: favProviderProps) {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}
