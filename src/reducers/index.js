import { combineReducers } from 'redux';

import thePlaceReducer from './thePlace.reducer';
import hompageListsReducer from './hompageLists.reducer';
import errorReducer from './error.reducer';

const rootReducer = combineReducers({
  hompageListsReducer,
  thePlaceReducer,
  errorReducer,
});

export default rootReducer;
