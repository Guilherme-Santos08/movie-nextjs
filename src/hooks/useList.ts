import { useContext } from "react";
import { ListContext } from "../context/ListContext";

export function useList() {
  const value = useContext(ListContext)

  return value
}