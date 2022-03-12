import axios from 'axios';

import {
  HOUSE_BY_ID,
  HOUSE_BY_ID_LOADING,
  HOUSE_BY_ID_ERRORR,
} from '../actionTypes';
import { statuses } from '../../config';

export const getThisHouse =
  ({ url }) =>
  async (dispatch) => {
    dispatch({
      type: HOUSE_BY_ID_LOADING,
      payload: statuses.LOADING,
    });
    try {
      return await axios.get(`${url}`).then((res) => {
        dispatch({
          type: HOUSE_BY_ID,
          payload: res.data,
        });
        return res.data;
      });
    } catch (e) {
      dispatch({
        type: HOUSE_BY_ID_ERRORR,
      });
    }
  };
