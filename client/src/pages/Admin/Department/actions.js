import { FETCH_DEPARTMENT, SET_DEPARTMENT, DELETE_DEPARTMENT } from './constants';

export const getFetchDepartment = () => ({
  type: FETCH_DEPARTMENT,
});

export const setDepartment = (department) => ({
  type: SET_DEPARTMENT,
  department,
});

export const deleteDepartment = (id, cb) => ({
  type: DELETE_DEPARTMENT,
  id,
  cb,
});
