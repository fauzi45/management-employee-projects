import { produce } from 'immer';

import { SET_LOGIN, SET_TOKEN } from './constants';

export const initialState = {
  login: false,
  token: null,
};

export const storedKey = ['token', 'login'];

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
    }
  });

export default loginReducer;
