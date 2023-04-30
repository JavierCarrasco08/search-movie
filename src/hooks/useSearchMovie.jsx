import { useEffect, useRef, useState } from "react";
import { movies } from "../utils/movies";

export const useSearchMovie = () => {
  let refID = useRef(null);
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  useEffect(() => {
    let ignore = false;
    const getData = async () => {
      let res = await movies(data);
      setResult(res);
    };
    if (!ignore) {
      getData();
    }
    return () => {
      ignore = true;
    };
  }, [data]);

  const getData = (text) => {
    setValue(text);

    clearInterval(refID.current);

    refID.current = setTimeout(() => {
      setData(text);
    }, 1000);
  };
  return [value, getData, result];
};
