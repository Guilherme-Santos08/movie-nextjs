import type { NextPage } from "next";
import Head from "next/head";

import ShowScroll from "../components/ShowScroll";
import SideBar from "../components/NavBar";

import { Container } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <SideBar />
        <main>
          <div className="show-moment"></div>
          <ShowScroll />
          <ShowScroll />
        </main>
      </Container>
    </>
  );
};

export default Home;
