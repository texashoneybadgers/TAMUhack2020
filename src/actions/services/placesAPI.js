import axios from "axios";

const URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?";
const API_KEY = "&key=AIzaSyAWKIPESodPq93nv0k7g7MsN9MzBaUxCzU";

export default (query, queryVariable) => {
  const response = axios.get(`${URL}${query}${queryVariable}${API_KEY}`);
  return response;
};
