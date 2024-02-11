import { FETCH_TEAM_PROJECT, SET_TEAM_PROJECT, DELETE_TEAM_PROJECT } from './constants';

export const getFetchTeamProject = () => ({
  type: FETCH_TEAM_PROJECT,
});

export const setTeamProject = (teamProject) => ({
  type: SET_TEAM_PROJECT,
  teamProject,
});

export const deleteTeamProject = (id, cb) => ({
  type: DELETE_TEAM_PROJECT,
  id,
  cb,
});
