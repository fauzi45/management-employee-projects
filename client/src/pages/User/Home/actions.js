import { FETCH_MYTEAM, SET_MYTEAM } from './constants';

export const getFetchMyTeam = () => ({
  type: FETCH_MYTEAM,
});

export const setMyTeam = (myTeam) => ({
  type: SET_MYTEAM,
  myTeam,
});

