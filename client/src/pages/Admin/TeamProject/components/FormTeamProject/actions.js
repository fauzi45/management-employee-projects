import {
  ADD_NEW_TEAM_PROJECT,
  GET_DETAIL_TEAM_PROJECT,
  SET_DETAIL_TEAM_PROJECT,
  UPDATE_TEAM_PROJECT,
} from './constants';

export const addNewTeamProject = (data, cb) => ({
  type: ADD_NEW_TEAM_PROJECT,
  data,
  cb,
});

export const getDetailTeamProject = (id) => ({
  type: GET_DETAIL_TEAM_PROJECT,
  id,
});

export const setDetailTeamProject = (data) => ({
  type: SET_DETAIL_TEAM_PROJECT,
  data,
});

export const setUpdateTeamProject = (id, data, cb) => ({
  type: UPDATE_TEAM_PROJECT,
  id,
  data,
  cb,
});
