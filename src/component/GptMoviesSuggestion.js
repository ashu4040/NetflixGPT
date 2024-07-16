import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const { movieResult, MovieName } = useSelector((store) => store.get);
  if (!MovieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-85">
      <div>
        {MovieName.map((MovieName, index) => (
          <MovieList
            key={MovieName}
            title={MovieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMoviesSuggestions;
