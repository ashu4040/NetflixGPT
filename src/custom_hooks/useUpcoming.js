import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addupcoming } from "../utils/movieSlice";
import { useEffect } from "react";

export const useUpcoming = () => {
  const dispatch = useDispatch();

  const getupcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addupcoming(json?.results));
  };

  useEffect(() => {
    getupcoming();
  }, []);
};
