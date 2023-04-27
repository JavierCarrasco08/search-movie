import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <form className="search-form">
        <label htmlFor="search" className="search-form__label">
          Search movie
          <input
            type="text"
            id="search"
            placeholder="Avengers, Mario bros, Pokemon..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
