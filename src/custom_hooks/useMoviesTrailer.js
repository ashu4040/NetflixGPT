import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addtrailerVideo } from "../utils/movieSlice";

const useMoviesTrailer = (id) => {
  const dispatch = useDispatch();

  const GetMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterTrailer = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.result[0];

    dispatch(addtrailerVideo(trailer));
  };

  useEffect(() => {
    GetMovies();
  }, []);
};

export default useMoviesTrailer;
