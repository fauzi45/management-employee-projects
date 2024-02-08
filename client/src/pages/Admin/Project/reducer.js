import { produce } from "immer";
import { SET_PROJECT } from "./constants";

export const initialState = {
  project: [],
};

export const storedKey = ['project'];

const projectReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PROJECT:
        draft.project = action.project;
        break;
      default:
        break;
    }
  });

export default projectReducer;