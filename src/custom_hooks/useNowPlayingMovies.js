import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        if (!response.ok) {
          throw new Error("Failed to fetch now playing movies");
        }
        const json = await response.json();
        dispatch(addNowPlayingMovies(json?.results || []));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    getNowPlayingMovies();
  }, [dispatch]);
};
