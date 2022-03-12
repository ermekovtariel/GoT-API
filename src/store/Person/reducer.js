import {
  PERSON,
  PERSON_LOADING,
  PERSON_ERRORR,
  PERSON_PAGE,
} from '../actionTypes';

import { SUCCESS, ERROR, LOADING } from '../../config/statuses';

const initialState = {
  people: [],
  page: 1,
  status: ERROR,
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSON_LOADING:
      return {
        ...state,
        status: LOADING,
      };
    case PERSON:
      return {
        ...state,
        people: action.payload,
        status: SUCCESS,
      };
    case PERSON_ERRORR:
      return {
        ...state,
        status: ERROR,
      };
    case PERSON_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
export default personReducer;
