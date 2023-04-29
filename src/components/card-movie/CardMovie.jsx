import arrow__right from "./../../assets/arrow-right.svg";
import arrow__left from "./../../assets/arrow-left.svg";
import "./cardMovie.css";

export default function CardMovie({
  type,
  year,
  name,
  poster,
  modal,
  onModal,
}) {
  return (
    <div className="card">
      <div className="card__front">
        <header className="card__header">
          <button className="card__button" onClick={() => onModal(name)}>
            <img
              src={arrow__left}
              alt="Click para activar el informativo"
              className="card__arrow"
            />
          </button>
        </header>
        <figure className="card__figure">
          <img src={poster} alt="" className="card__img" />
        </figure>
      </div>
      <div className={`card__info ${modal ? "right" : null}`}>
        <header className="card__header">
          <button className="card__button" onClick={() => onModal(name)}>
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
