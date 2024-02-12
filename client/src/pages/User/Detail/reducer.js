import { produce } from 'immer';
import { SET_MY_DETAIL } from './constants';

export const initialState = {
  myProjectDetail: {},
};

export const storedKey = ['myProjectDetail'];

const myDetailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MY_DETAIL:
        draft.myProjectDetail = action.myProjectDetail;
        break;
      default:
        break;
    }
  });

export default myDetailReducer;
