import { useSearchMovie } from "./hooks/useSearchMovie";
import ContainerMovie from "./components/container-movies/ContainerMovie";
import "./App.css";

function App() {
  const [value, setValue, data] = useSearchMovie();
  return (
    <>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setValue(value);
        }}>
        <label htmlFor="search" className="search-form__label">
          Search movie
          <input
            type="text"
            id="search"
            placeholder="Avengers, Mario bros, Pokemon..."
            value={value}
            name="value"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            autoComplete="off"
          />
        </label>
        <input
          type="submit"
          value="Search Movie"
          className="search-form__button"
        />
      </form>
      <ContainerMovie movies={data} />
    </>
  );
}

export default App;
