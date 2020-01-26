import constants from '../constants';

const initialState = {
  hotels: [],
  restaurants: [],
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case constants.FETCH_HOTEL:
      newState.hotels = action.payload.results;
      return newState;

    case constants.FETCH_RESTAURANT:
      newState.restaurants = action.payload.results;
      return newState;

    default:
      return state;
  }
};
