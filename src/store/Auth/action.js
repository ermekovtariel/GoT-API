import axios, { api } from '../../utils/instance';
import { AUTH, AUTH_ERROR, AUTH_SUCCESS } from '../actionTypes';

export const authAction = (credentials) => async (dispatch) => {
  console.log(credentials);
  dispatch(login());
  const data = {
    email: credentials?.phone,
    password: credentials?.password,
  };

  await axios
    .post(`${api}login`, data)
    .then((res) => {
      dispatch(loginSuccess(res?.data));
      localStorage.setItem('user', JSON.stringify(res.data));
      const user = JSON.parse(localStorage.getItem('user'));
      user && window.location.reload();
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      return {
        type: AUTH_ERROR,
        payload: e,
      };
    });
};
export const loginSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

export const login = () => {
  return {
    type: AUTH,
    payload: 'loading',
  };
};

export const registrationAction = (credentials) => async (dispatch) => {
  console.log(credentials);
  dispatch(login());
  const data = {
    email: credentials?.phone,
    password: credentials?.password,
    passwordText: credentials?.password,
    status: 'user',
  };
  await axios
    .post(`${api}register`, data)
    .then((res) => {
      dispatch(loginSuccess(res?.data));
      localStorage.setItem('user', JSON.stringify(res.data));
      const user = JSON.parse(localStorage.getItem('user'));
      user && window.location.reload();
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      return {
        type: AUTH_ERROR,
        payload: e,
      };
    });
};
