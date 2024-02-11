import { FETCH_PROFILE, SET_PROFILE } from './constants';

export const getFetchProfile = () => ({
  type: FETCH_PROFILE,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
