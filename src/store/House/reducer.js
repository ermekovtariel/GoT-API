import {
  HOUSE_BY_ID,
  HOUSE_BY_ID_LOADING,
  HOUSE_BY_ID_ERRORR,
} from '../actionTypes';

import { SUCCESS, ERROR, LOADING } from '../../config/statuses';

const initialState = {
  house: {},
  status: ERROR,
};

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOUSE_BY_ID_LOADING:
      return {
        ...state,
        status: LOADING,
      };
    case HOUSE_BY_ID:
      return {
        ...state,
        house: action.payload,
        status: SUCCESS,
      };

    case HOUSE_BY_ID_ERRORR:
      return {
        ...state,
        status: ERROR,
      };

    default:
      return state;
  }
};
export default housesReducer;
