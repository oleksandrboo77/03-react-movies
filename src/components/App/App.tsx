// import { useState } from "react";
// import "./App.css";
// import styles from "./App.module.css";
import MovieGrid from "../MovieGrid/MovieGrid";
import SearchBar from "../SearchBar/SearchBar";

import { useState } from "react";
import type { Movie } from "../../types/movie";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getMovies } from "../../services/movieService"; // Assuming you have an API function to fetch movies

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (newQuery: string) => {
    console.log("handleSearch:", newQuery);

    try {
      setMovies([]);
      setIsLoading(true);
      setIsError(false);
      const newMovie = await getMovies(newQuery);
      setMovies(newMovie);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && <MovieGrid movies={movies} />}
    </>
  );
}

export default App;
// export const getMovies = async () => {
//     const response = await axios.get("https://api.example.com/movies")
// }
