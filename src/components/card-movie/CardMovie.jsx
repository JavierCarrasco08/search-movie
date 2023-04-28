import arrow__right from "./../../assets/arrow-right.svg";
import arrow__left from "./../../assets/arrow-left.svg";

export default function CardMovie({ type, year, name, poster }) {
  return (
    <div className="card">
      <div className="card__front">
        <header className="card__header">
          <button className="card__button">
            <img
              src={arrow__left}
              alt="Click para activar el informativo"
              className="card__arrow"
            />
          </button>
        </header>
        <figure>
          <img src={poster} alt="" />
        </figure>
      </div>
      <div className="card__info">
        <header className="card__header">
          <button className="card__button">
            <img
              src={arrow__right}
              alt="Click para desactivar el informativo"
              className="card__arrow"
            />
          </button>
        </header>
        <h2 className="card__title">{name}</h2>
        <h3 className="card__year">{year}</h3>
        <p className="card__type">{type}</p>
      </div>
    </div>
  );
}
