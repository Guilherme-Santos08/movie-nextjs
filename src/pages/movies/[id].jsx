import { useEffect } from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import { apiMain } from "../api/api";
import LayoutDetails from "../../components/LayoutDetails";

function MoviesId({ result }) {
  console.log(result);
  const router = useRouter();
  // console.log(router);
  // useEffect(() => {
  //   async function getMovie(id) {
  //     const API_URL = `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=40698a7bda352049c103b665527f1793&language=en-US`;

  //     const res = await fetch(API_URL);
  //     const data = await res.json();

  //     console.log(data);
  //   }
  //   return getMovie();
  // }, [router]);

  return (
    <>
      <Head>
        <title>{result.name}</title>
      </Head>
      <LayoutDetails
        title={result.name}
        release_date={result.release_date}
        vote_average={result.vote_average}
        overview={result.overview}
        poster_path={result.poster_path}
        genres={result.genres.map(e => e.name)}
        tagline={result.tagline}
      />
    </>
  );
}

export default MoviesId;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const respMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=40698a7bda352049c103b665527f1793&language=pt-BR&append_to_response=videos`
  );
  const data = await respMovie.json();

  return {
    props: {
      result: data,
    },
  };
}
