// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIMhH8ExSUzXwr14DAhfeERlFerJMn_V4",
  authDomain: "netflixgpt-f982d.firebaseapp.com",
  projectId: "netflixgpt-f982d",
  storageBucket: "netflixgpt-f982d.appspot.com",
  messagingSenderId: "312991217673",
  appId: "1:312991217673:web:8d6a06132e60124de560d8",
  measurementId: "G-38QFBBV24K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
