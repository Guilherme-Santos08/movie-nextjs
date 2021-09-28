import { useContext } from "react";
import { FavContext } from "../context/FavContext";

export function useFav() {
  const value = useContext(FavContext)

  return value
}