import { FETCH_PROJECT, SET_PROJECT, DELETE_PROJECT } from './constants';

export const getFetchProject = () => ({
  type: FETCH_PROJECT,
});

export const setProject = (project) => ({
  type: SET_PROJECT,
  project,
});

export const deleteProject = (id, cb) => ({
  type: DELETE_PROJECT,
  id,
  cb,
});
