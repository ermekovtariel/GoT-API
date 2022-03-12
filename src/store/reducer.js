import { combineReducers } from 'redux';

import housesReducer from './Houses/reducer';
import houseReducer from './House/reducer';
import peopleReducer from './Person/reducer';

export default combineReducers({
  houses: housesReducer,
  house: houseReducer,
  people: peopleReducer,
});
