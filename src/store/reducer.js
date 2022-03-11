import { combineReducers } from 'redux';

import auth from './Auth/reducer';
import products from './Products/reducer';

const rootReducer = combineReducers({
  auth,
  products,
});

export default rootReducer;
