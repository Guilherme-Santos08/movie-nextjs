import type { NextPage } from "next";
import ShowScroll from "../components/ShowScroll";
import SideBar from "../components/NavBar";

import { Container } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <SideBar />
      <main>
        <div className="show-moment"></div>
        <ShowScroll />
        <ShowScroll />
      </main>
    </Container>
  );
};

export default Home;
