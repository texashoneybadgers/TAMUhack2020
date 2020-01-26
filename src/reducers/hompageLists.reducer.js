import constants from "../constants";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case constants.FETCH_NOWPLAYING:
      newState.nowPlaying = action.payload.results;
      return newState;

    case constants.FETCH_POPULAR:
      newState.popular = action.payload.results;
      return newState;

    case constants.FETCH_TOPRATED:
      newState.topRated = action.payload.results;
      return newState;

    case constants.FETCH_UPCOMING:
      newState.upcoming = action.payload.results;
      return newState;

    default:
      return state;
  }
};
