import Header from "./header";
import { useNowPlayingMovies } from "../custom_hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";
import { usePopularMovies } from "../custom_hooks/usePopularMovies";
import { useTopRatedMovies } from "../custom_hooks/useTopRatedMovies";
import { useUpcoming } from "../custom_hooks/useUpcoming";

import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
