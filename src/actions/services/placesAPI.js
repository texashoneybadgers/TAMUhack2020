import axios from 'axios';

const URL = 'https://maps.googleapis.com/maps/api/place/';
const API_KEY = '&key=AIzaSyD52d6XFSXUvS35hmTs5IANGP6TKs_It_E';

export default (query, queryVariable) => {
  console.log(`${URL}${query}${queryVariable}${API_KEY}`);
  const response = axios.get(`${URL}${query}${queryVariable}${API_KEY}`);
  return response;
};
