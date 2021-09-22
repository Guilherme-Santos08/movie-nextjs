import { useEffect } from "react";
import Head from "next/head";

import { useRouter } from "next/router";

function MoviesId() {
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    async function getMovie(id) {
      const API_URL = `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=40698a7bda352049c103b665527f1793&language=en-US`;

      const res = await fetch(API_URL);
      const data = await res.json();

      console.log(data);
    }
    return getMovie();
  }, [router]);
  return (
    <>
      <Head>
        <title>Movie</title>
      </Head>
      <h1>Hello World</h1>
    </>
  );
}

export default MoviesId;
