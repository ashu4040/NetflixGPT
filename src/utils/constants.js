export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_KEY,
  },
};

export const img_cdn = "https://image.tmdb.org/t/p/w500/";

export const background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const Supported_lan = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
];

export const openaiKey = process.env.REACT_APP_openaiKey;
