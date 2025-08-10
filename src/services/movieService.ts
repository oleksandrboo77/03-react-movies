import axios from "axios";
import type { Movie } from "../types/movie";

const apiKey = import.meta.env.VITE_TMDB_TOKEN;


interface GetMoviesResponse {
  results: Movie[];
}
   
export const getMovies = async (newQuery: string): Promise<Movie[]> => {
    const url = "https://api.themoviedb.org/3/search/movie";
    const response = await axios.get<GetMoviesResponse>(url, {
        params: {
            query: newQuery,
            page: 1,
        },
        headers: {
            Authorization:
                `Bearer ${apiKey}`,
        },
    });
    return response.data.results;
};