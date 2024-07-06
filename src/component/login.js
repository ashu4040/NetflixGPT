import React from "react";
import Header from "./header";
import { useState, useRef } from "react";
import { Validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { updateProfile } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(true);
  const [isvalid, setisvalid] = useState(null);

  const dispatch = useDispatch();

  const toggleSingUp = () => {
    setisSignedIn(!isSignedIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    const msg = Validate(email.current.value, password.current.value);
    setisvalid(msg);
    if (msg) return;

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email.current.value,
                  displayName: name.current.value,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setisvalid(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setisvalid(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <img
        className="object-cover absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-40 opacity-90 bg-black rounded-lg"
      >
        <h1 className="text-white font-bold m-2 my-5 text-3xl">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-3 w-full bg-gray-900 text-white border-indigo-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 m-3 w-full bg-gray-900 text-white"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 m-3 w-full bg-gray-900 text-white"
        />
        <button
          className="bg-red-700 w-full p-2 m-3 my-5 rounded-lg"
          onClick={handleValidation}
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-700 p-2 m-2 ">{isvalid}</p>

        <p className="m-2 p-2 text-white cursor-pointer" onClick={toggleSingUp}>
          {isSignedIn
            ? "New To Netflix? Sign Up Now"
            : "Already Register? Sing In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
