import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (movies == null) return;
  else {
    return (
      <div className="bg-black">
        <div className="-mt-80 z-30 relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Up coming "} movies={movies.addupcoming} />
          <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        </div>
      </div>
    );
  }
};

export default SecondaryContainer;
