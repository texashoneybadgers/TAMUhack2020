import constants from '../constants';
import { placesAPI } from './services';

export default {
  fetchRestaurants: () => async (dispatch) => {
    try {
      const response = await placesAPI('location=41.8781,-87.6298&radius=16093.4', '&type=restaurant&keyword=mexican');
      const { data } = response;
      console.log(data);
      dispatch({
        type: constants.FETCH_RESTAURANT,
        payload: data,
      });
    } catch (err) {
      console.log(err.data);
      dispatch({
        type: constants.FETCH_PLACES_ERROR,
        payload: 'Error occured while fetching to Google Maps API',
      });
    }
  },
  fetchHotels: () => async (dispatch) => {
    try {
      const response = await placesAPI('location=29.9902,95.3368&radius=16093.4', '&type=lodging&keyword=hotel');
      const { data } = response;
      dispatch({
        type: constants.FETCH_HOTEL,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_PLACES_ERROR,
        payload: 'Error occured while fetching to Google Maps API',
      });
    }
  },
};
