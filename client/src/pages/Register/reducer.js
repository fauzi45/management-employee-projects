import { produce } from 'immer';
import { SET_EMPLOYEE } from './constants';

export const initialState = {
  employee: {},
};

export const storedKey = ['employee'];

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_EMPLOYEE:
        draft.employee = action.employee;
        break;
      default:
        break;
    }
  });

export default registerReducer;
