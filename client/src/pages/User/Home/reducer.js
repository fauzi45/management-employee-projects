import { produce } from "immer";
import { SET_MYTEAM } from "./constants";

export const initialState = {
  myTeam: [],
};

export const storedKey = ['myTeam'];

const myTeamReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MYTEAM:
        draft.myTeam = action.myTeam;
        break;
      default:
        break;
    }
  });

export default myTeamReducer;