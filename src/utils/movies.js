const API_KEY = import.meta.env.VITE_API_KEY;
export async function movies(text) {
  let json2 = null;
  try {
    let res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`
      ),
      json = await res.json();
    if (!text) throw "Cannot do a search with empty entry";
    if (json.Response === "False") throw "No movies found for this search";
    json2 = json.Search;
  } catch (error) {
    json2 = error;
  }
  return json2;
}
