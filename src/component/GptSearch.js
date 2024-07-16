import React from "react";
import GptSearchBar from "./GptSearchBar";
import { background } from "../utils/constants";
import GptMoviesSuggestions from "./GptMoviesSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className=" w-screen h-screen object-cover md:object-none "
          src={background}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        {/* <GptMoviesSuggestions /> */}
      </div>
    </>
  );
};

export default GptSearch;
