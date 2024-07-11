import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/MultiLanguage";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          type="text"
          className=" p-4 m-4 col-span-10"
          placeholder={lang[langKey].placeHolder}
        />
        <button className="col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
