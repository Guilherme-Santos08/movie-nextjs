/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";

interface typeDetails {
  title: String;
  release_date: string | number | Date;
  tagline: String;
  overview: String;
  poster_path: String;
  vote_average: String;
  genres: {
    name: String;
    join: Function;
  };
}
const ImgMovie = "https://image.tmdb.org/t/p/w500/";

export default function LayoutDetails({
  title,
  release_date,
  tagline,
  poster_path,
  overview,
  vote_average,
  genres,
}: typeDetails) {
  return (
    <Container>
      <section className="content">
        <div className="poster">
          <img src={ImgMovie + poster_path} alt="" />
        </div>
        <div className="info">
          <div className="title-type">
            <h2>
              {title}{" "}
              <span>
                (
                {new Date(release_date).toLocaleDateString("pt-BR", {
                  timeZone: "UTC",
                })}
                )
              </span>
            </h2>
            <p>
              <span>Categorias</span>: {genres.join(", ")} °
            </p>
          </div>
          <div className="vote_average">
            <p>Avaliação do público: {vote_average}/10</p>
          </div>
          <div className="synopsis">
            <h3 className="synopsis__tagline">{tagline}</h3>
            <h3 className="Sinopse__h3">Sinopse</h3>
            <p>{overview}</p>
            <div className="creator">
              <p className="create__name">Dz</p>
              <p>Criação</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
