import "./App.css";

function App() {
  return (
    <>
      <form className="search-form">
        <label htmlFor="search" className="search-form__label">
          Search movie
          <input
            type="text"
            id="search"
            placeholder="Avengers, Mario bros, Pokemon..."
            value={""}
            onChange={() => console.log("HOLA")}
            autoComplete="off"
          />
        </label>
        <input
          type="button"
          value="Search Movie"
          className="search-form__button"
        />
      </form>
    </>
  );
}

export default App;
