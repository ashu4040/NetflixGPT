import React from "react";
import Header from "./header";
import { useState } from "react";
const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(true);
  const toggleSingUp = () => {
    setisSignedIn(!isSignedIn);
  };
  return (
    <div className="">
      <Header />
      <img
        className="object-cover absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      />

      <div className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-40 opacity-90 bg-black rounded-lg">
        <h1 className="text-white font-bold m-2 my-5 text-3xl">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <button className="bg-red-700 w-full p-2 m-2 my-5 rounded-lg">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="m-2 p-2 text-white cursor-pointer" onClick={toggleSingUp}>
          {isSignedIn
            ? "New To Netflix? Sign Up Now"
            : "Already Register? Sing In Now"}
        </p>
      </div>
    </div>
  );
};

export default Login;
