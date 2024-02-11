import { produce } from 'immer';
import { ADD_NEW_PROJECT, SET_DETAIL_PROJECT } from './constants';

export const initialState = {
  data: {},
};

export const storedKey = ['data'];

const createNewProject = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_NEW_PROJECT:
        draft.data = action.data;
        break;
      case SET_DETAIL_PROJECT:
        draft.data = action.data;
        break;
      default:
        break;
    }
  });

export default createNewProject;
