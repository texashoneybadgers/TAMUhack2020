import constants from '../constants';

const initialState = {
  error: '',
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_PLACES_ERROR:
      newState.error = action.payload;
      return newState;
    default:
      return state;
  }
};
