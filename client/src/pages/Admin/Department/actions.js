import { FETCH_DEPARTMENT, SET_DEPARTMENT } from "./constants";

export const getFetchDepartment = () => ({
    type: FETCH_DEPARTMENT
  });
  
  export const setDepartment = (department) => ({
    type: SET_DEPARTMENT,
    department
  })