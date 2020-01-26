import constants from "../constants";
import { placesAPI } from "./services";

export default {
  fetchThePlace: place_id => async dispatch => {
    try {
      const response = await placesAPI(`place_id=${place_id}?`, '&fields=photos[],name,geometry,place_id,rating,formatted_address,formatted_phone_number,icon,opening_hours,price_level,website');
      const { data } = response;
      dispatch({
        type: constants.FETCH_THEPLACE,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_PLACES_ERROR,
        payload: "Error occured while fetching to Google Maps API"
      });
    }
  },
  clearThePlace: () => dispatch => {
    dispatch({
      type: constants.CLEAR_THE_PLACE
    });
  }
};
