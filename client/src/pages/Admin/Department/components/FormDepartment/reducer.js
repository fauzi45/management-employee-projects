import { produce } from 'immer';
import { ADD_NEW_DEPARTMENT } from './constants';

export const initialState = {
  data: {},
};

export const storedKey = ['data'];

const createNewDepartment = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_NEW_DEPARTMENT:
        draft.data = action.data;
        break;
      default:
        break;
    }
  });

export default createNewDepartment;