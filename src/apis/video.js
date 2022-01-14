import axios from "axios";

export const KEY = process.env.REACT_APP_API; // Your Api Key Here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
