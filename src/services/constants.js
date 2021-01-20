export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3002"
    : "https://mn-softprocess.heroku.app";
