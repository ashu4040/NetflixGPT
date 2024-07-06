import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[14%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <button className=" bg-white text-black p-4 px-12 text-2xl  rounded-lg hover:bg-opacity-70">
        Play
      </button>
      <button className="mx-2 bg-white text-black p-4 px-12 text-2xl  rounded-lg hover:bg-opacity-70">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
