import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addtrailerVideo } from "../utils/movieSlice";

const useMoviesTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return; // Avoid unnecessary API calls

    const GetMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await response.json();

        if (!json.results || json.results.length === 0) {
          dispatch(addtrailerVideo(null));
          return;
        }

        const filterTrailer = json.results.filter(
          (video) => video.type === "Trailer"
        );

        const trailer =
          filterTrailer.length > 0 ? filterTrailer[0] : json.results[0];
        dispatch(addtrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    GetMovies();
  }, [id, dispatch]);
};

export default useMoviesTrailer;
