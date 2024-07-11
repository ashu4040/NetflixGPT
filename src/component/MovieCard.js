import React from "react";
import { img_cdn } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-5">
      <img src={img_cdn + posterPath} />
    </div>
  );
};

export default MovieCard;
