import {
  HOUSE,
  LOADING_HOUSE,
  SUCCESS_HOUSE,
  ERROR_HOUSE,
  PAGE,
} from '../actionTypes';

import { SUCCESS, ERROR } from '../../config/statuses';

const initialState = {
  houses: [],
  page: 1,
  status: false,
};

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_HOUSE:
      return {
        ...state,
        status: 'LOADING',
      };
    case HOUSE:
      return {
        ...state,
        houses: action.payload,
      };
    case SUCCESS_HOUSE:
      return {
        ...state,
        status: SUCCESS,
      };
    case ERROR_HOUSE:
      return {
        ...state,
        status: ERROR,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
export default housesReducer;
