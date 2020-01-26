import { combineReducers } from "redux";

import theMovieReducer from "./theMovie.reducer";
import castListReducer from "./castList.reducer";
import hompageListsReducer from "./hompageLists.reducer";
import errorReducer from "./error.reducer";

const rootReducer = combineReducers({
  hompageListsReducer,
  theMovieReducer,
  castListReducer,
  errorReducer
});

export default rootReducer;
