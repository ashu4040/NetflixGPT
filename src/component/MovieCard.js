import React from "react";
import { img_cdn } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={img_cdn + posterPath} />
    </div>
  );
};

export default MovieCard;
