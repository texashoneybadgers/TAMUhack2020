import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=e5693481ef000bfdd855a0f21ad39631&language=en-US";

export default (query, queryVariable) => {
  const response = axios.get(`${URL}${query}${API_KEY}${queryVariable}`);
  return response;
};
