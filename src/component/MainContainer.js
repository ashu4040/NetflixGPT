import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";
import VideoTitle from "./videoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies == null) return;
  const mainMovies = movies[0];

  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
