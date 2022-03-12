import axios from 'axios';

import {
  HOUSE,
  LOADING_HOUSE,
  SUCCESS_HOUSE,
  ERROR_HOUSE,
  PAGE,
} from '../actionTypes';
import { urls, statuses } from '../../config';

export const getHouses =
  ({ page }) =>
  async (dispatch) => {
    dispatch({
      type: LOADING_HOUSE,
      payload: statuses.LOADING,
    });
    try {
      return await axios.get(`${urls.PAGE}=${page}&pageSize=25`).then((res) => {
        localStorage.setItem('page', JSON.stringify(page));
        dispatch({
          type: HOUSE,
          payload: res.data,
        });
        dispatch({
          type: PAGE,
          payload: page,
        });
        dispatch({
          type: SUCCESS_HOUSE,
        });
        return res.data;
      });
    } catch (e) {
      dispatch({
        type: ERROR_HOUSE,
      });
    }
  };
