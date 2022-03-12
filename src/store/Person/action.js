import axios from 'axios';

import {
  PERSON,
  PERSON_LOADING,
  PERSON_ERRORR,
  PERSON_PAGE,
} from '../actionTypes';
import { urls, statuses } from '../../config';

export const getPeople =
  ({ page }) =>
  async (dispatch) => {
    dispatch({
      type: PERSON_LOADING,
      payload: statuses.LOADING,
    });
    try {
      return await axios
        .get(`${urls?.PEOPLE}=${page ? page : 1}&pageSize=25`)
        .then((res) => {
          localStorage.setItem('people_page', JSON.stringify(page ? page : 1));
          dispatch({
            type: PERSON,
            payload: res.data,
          });
          dispatch({
            type: PERSON_PAGE,
            payload: page,
          });
          return res.data;
        });
    } catch (e) {
      dispatch({
        type: PERSON_ERRORR,
      });
    }
  };
