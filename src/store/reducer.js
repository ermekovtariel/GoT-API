import { combineReducers } from 'redux';

import housesReducer from './Houses/reducer';

export default combineReducers({
  houses: housesReducer,
});
