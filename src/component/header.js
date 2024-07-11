import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { Supported_lan } from "../utils/constants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handlesignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLan = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="absolute  w-screen py-4 px-3 bg-gradient-to-b from-black  z-10  flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      {user && (
        <div>
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded w-20 h-10 "
              onChange={handleLan}
            >
              {Supported_lan.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-blue-600 text-white w-32 h-14  rounded m-3"
            onClick={handleGPTSearch}
          >
            {showGptSearch ? "Home Page" : "Movie Search "}
          </button>
          <button
            className="text-white bg-red-700 w-32 h-14 rounded m-3 "
            onClick={handlesignout}
          >
            {" "}
            sing out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
