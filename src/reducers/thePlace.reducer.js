import constants from "../constants";

const initialState = {
  thePlace: {}
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_THEPLACE:
      newState.thePlace = action.payload;
      return newState;

    case constants.CLEAR_THE_PLACE:
      newState.thePlace = {};
      return newState;

    default:
      return state;
  }
};
