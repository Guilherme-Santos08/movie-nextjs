import Head from "next/head";

import LayoutDetails from "../../components/LayoutDetails";

function MoviesId({ result }) {
  console.log(result);

   return (
    <>
      <Head>
        <title>{result.name}</title>
      </Head>
      <LayoutDetails
        title={result.original_title}
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
