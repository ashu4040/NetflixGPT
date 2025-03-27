import React, { useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { Supported_lan } from "../utils/constants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => console.log("User signed out successfully"))
      .catch((error) => console.error("Sign out error:", error));
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute w-screen py-4 px-3 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user?.uid && (
        <div className="flex justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded w-20 h-10"
              onChange={handleLanguageChange}
            >
              {Supported_lan.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-blue-600 text-white w-28 h-12 rounded mx-3 md:m-3"
            onClick={handleGPTSearch}
          >
            {showGptSearch ? "Home Page" : "Movie Search"}
          </button>
          <button
            className="text-white bg-red-700 w-28 h-12 rounded mx-3 md:m-3"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
