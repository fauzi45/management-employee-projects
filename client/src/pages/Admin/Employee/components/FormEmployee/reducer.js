import { produce } from 'immer';
import { SET_DETAIL_EMPLOYEE } from './constants';

export const initialState = {
  data: {},
};

export const storedKey = ['data'];

const createNewEmployeeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DETAIL_EMPLOYEE:
        draft.data = action.data;
        break;
      default:
        break;
    }
  });

export default createNewEmployeeReducer;
