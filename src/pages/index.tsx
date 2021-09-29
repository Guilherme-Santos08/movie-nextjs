import { Key, useEffect, useRef, useState } from "react";
import Head from "next/head";

import axios from "axios";
import { apiMain } from "./api/api";

import SideBar from "../components/NavBar";
import ScrollCarousel from "../components/ScrollCarousel";
import CardContents from "../components/CardContents";

import { Container } from "../styles/pages/Home";
import { cardContextProps } from "../interfaces/interfaces";

interface MoviesProps {
  movies?: [] | any;
}

function Home({ movies }: MoviesProps) {
  const [series, setSeries] = useState([]);
  alert("Projeto parado por um tempo!!!")

  useEffect(() => {
    const fetchMovie = async () => {
      const respSeries = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=1"
      );
      const respDataSeries = respSeries.data.results.slice(0, 10);
      setSeries(respDataSeries);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <SideBar />
        <main>
          <div className="show-moment"></div>
          <ScrollCarousel name="Top 10 Filmes">
            {movies.length > 0 &&
              movies.map((movie: cardContextProps, index: Key) => (
                <CardContents
                  key={index}
                  image={movie.poster_path}
                  link={movie.id}
                  path="movies"
                />
              ))}
          </ScrollCarousel>
          <ScrollCarousel name="Top 10 Séries">
            {series.length > 0 &&
              series.map((serie: cardContextProps, index: Key) => (
                <CardContents
                  key={index}
                  image={serie.poster_path}
                  link={serie.id}
                  path="series"
                />
              ))}
          </ScrollCarousel>
        </main>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const respMovie = await apiMain.get(
    "movie/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=1"
  );
  const respDataMovie = await respMovie.data.results.slice(0, 10);

  return {
    props: { movies: respDataMovie },
  };
}

export default Home;
