import { FETCH_EMPLOYEE, SET_EMPLOYEEDATA, DELETE_EMPLOYEE } from './constants';

export const getFetchEmployee = () => ({
  type: FETCH_EMPLOYEE,
});

export const setEmployeeData = (employeedata) => ({
  type: SET_EMPLOYEEDATA,
  employeedata,
});

export const deleteEmployee = (id, cb) => ({
  type: DELETE_EMPLOYEE,
  id,
  cb,
});
