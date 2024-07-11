import React from "react";
import GptSearchBar from "./GptSearchBar";
import { background } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        className="object-cover absolute -z-10"
        src={background}
        alt="logo"
      />

      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
