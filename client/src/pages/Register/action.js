import { SET_EMPLOYEE } from "./constants";

export const setEmployee = (employee, cb) => ({
    type: SET_EMPLOYEE,
    employee,
    cb
})