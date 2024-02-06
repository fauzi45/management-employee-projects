import { SET_LOGIN, SET_TOKEN, DO_LOGIN } from './constants';

export const setLogin = (login) => ({
  type: SET_LOGIN,
  login,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const doLoginAction = (formData) => ({
  type: DO_LOGIN,
  formData
});