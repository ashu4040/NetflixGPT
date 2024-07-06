import Header from "./header";
import { useNowPlayingMovies } from "../custom_hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
