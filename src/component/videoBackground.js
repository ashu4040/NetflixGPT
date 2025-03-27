import { useSelector } from "react-redux";
import useMoviesTrailer from "../custom_hooks/useMoviesTrailer";
import React from "react";

const VideoBackground = ({ id }) => {
  useMoviesTrailer(id);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (trailerVideo == null) return;
  else {
    return (
      <div className="w-screen">
        <iframe
          className="aspect-video w-screen "
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
        ></iframe>
      </div>
    );
  }
};

export default VideoBackground;
