import { produce } from "immer";
import { SET_TEAM_PROJECT } from "./constants";

export const initialState = {
  teamProject: [],
};

export const storedKey = ['teamProject'];

const teamProjectReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TEAM_PROJECT:
        draft.teamProject = action.teamProject;
        break;
      default:
        break;
    }
  });

export default teamProjectReducer;