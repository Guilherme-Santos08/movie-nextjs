import axios from "axios";

export const apiSearchMovies = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=40698a7bda352049c103b665527f1793&query=",
});

export const apiMain = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
