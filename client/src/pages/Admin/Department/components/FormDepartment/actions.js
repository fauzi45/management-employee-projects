import { ADD_NEW_DEPARTMENT } from "./constants";

export const addNewDepartment = (data,cb) => ({
    type: ADD_NEW_DEPARTMENT,
    data,
    cb
})