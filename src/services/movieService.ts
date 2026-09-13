import axios, { type AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN as string;

interface FetchMoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );

  return response.data.results;
};
