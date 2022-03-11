// import axios from 'axios';
import { api, instance } from '../../utils/instance';
import {
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_SUCCESS,
} from '../actionTypes';

//! GET SCHOOL
export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT,
    payload: 'LOADING',
  });
  try {
    return await instance.get(`${api}data?_page=1&_limit=20`).then((res) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
      return res.data;
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_ERROR,
    });
  }
};

//! GET SCHOOL
export const editProduct = () => async (dispatch) => {
  dispatch({
    type: EDIT_PRODUCT,
    payload: 'LOADING',
  });
  try {
    return await instance.post(`${api}data`).then((res) => {
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: res.data,
      });
      return res.data;
    });
  } catch (e) {
    dispatch({
      type: EDIT_PRODUCT_ERROR,
    });
  }
};
