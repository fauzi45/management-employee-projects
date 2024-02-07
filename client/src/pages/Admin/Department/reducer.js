import { produce } from "immer";
import { SET_DEPARTMENT } from "./constants";

export const initialState = {
  department: [],
};

export const storedKey = ['department'];

const departmentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DEPARTMENT:
        draft.department = action.department;
        break;
      default:
        break;
    }
  });

export default departmentReducer;