import { produce } from "immer";
import { SET_PROFILE } from "./constants";

export const initialState = {
  profile: [],
};

export const storedKey = ['profile'];

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PROFILE:
        draft.profile = action.profile;
        break;
      default:
        break;
    }
  });

export default profileReducer;