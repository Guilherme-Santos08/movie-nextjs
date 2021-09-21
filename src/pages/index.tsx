import { GetStaticProps } from "next";
import type { NextPage } from "next";
import Head from "next/head";

import ShowScroll from "../components/SlideScroll";
import SideBar from "../components/NavBar";
import { Container } from "../styles/pages/Home";
import { apiMain } from "./api/api";
import CardContents from "../components/CardContents";
import axios from "axios";
import { useEffect, useState } from "react";

interface MoviesProps {
  movies?: any;
  series?: any;
}
function Home({ movies }: MoviesProps) {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const respSeries = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=1"
      );
      const respDataSeries = respSeries.data.results.slice(0, 8);
      setSeries(respDataSeries)
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
          {/* <div className="show-moment"></div> */}
          <ShowScroll name="Filmes">
            {movies.length > 0 &&
              movies.map((movie: any, index: any) => (
                <CardContents key={index} image={movie.poster_path} />
              ))}
          </ShowScroll>

          <ShowScroll name="Series">
            {series.length > 0 &&
              series.map((movie: any, index: any) => (
                <CardContents key={index} image={movie.poster_path} />
              ))}
          </ShowScroll>
          
        </main>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const respMovie = await apiMain.get(
    "movie/popular?api_key=40698a7bda352049c103b665527f1793&language=en-US&page=1"
  );
  const respDataMovie = respMovie.data.results.slice(0, 8);

  return {
    props: { movies: respDataMovie },
  };
}

export default Home;
