import { useState } from "react";
import CardMovie from "../card-movie/CardMovie";
import "./containerMovies.css";

export default function ContainerMovie({ movies }) {
  const [translate, setTranslate] = useState("");
  return (
    <main className="container">
      {typeof movies === "string" ? (
        <p className="container__message">{movies}</p>
      ) : (
        movies.map((movie) => (
          <CardMovie
            key={movie.imdbID}
            type={movie.Type}
            name={movie.Title}
            year={movie.Year}
            id={movie.imdbID}
            poster={movie.Poster}
            onModal={(title) => {
              setTranslate(title);
            }}
            modal={translate === movie.imdbID ? true : false}
          />
        ))
      )}
    </main>
  );
}
