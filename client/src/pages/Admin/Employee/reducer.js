import { produce } from "immer";
import { SET_EMPLOYEEDATA } from "./constants";

export const initialState = {
  employeeData: [],
};

export const storedKey = ['employeeData'];

const employeeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_EMPLOYEEDATA:
        draft.employeeData = action.employeedata;
        break;
      default:
        break;
    }
  });

export default employeeReducer;