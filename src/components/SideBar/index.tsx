import CardNav from "../CardNav";
import { Container } from "./styles";

export default function SideBar() {
  return (
    <Container>
      <div className="logo">
        <p>DzScript</p>
        <div></div>
      </div>

      <nav>
        <ul>
          <p>Menu</p>
          <CardNav text="Home"/>
          <CardNav text="Filmes"/>
          <CardNav text="Series"/>
          <CardNav text="Pessoas"/>
        </ul>
      </nav>
    </Container>
  );
}
