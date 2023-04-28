import { useMemo, useRef, useState } from "react";
import { movies } from "../utils/movies";

export const useSearchMovie = () => {
  const [data, setData] = useState("No hay películas");
  const [value, setValue] = useState("");
  let refID = useRef(null);
  const getData = (text) => {
    setValue(text);

    clearInterval(refID.current);

    refID.current = setTimeout(async () => {
      let movies2 = await movies(text);
      setData(movies2);
    }, 1000);
  };
  return [value, getData, data];
};
