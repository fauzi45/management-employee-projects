import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectProfileState = (state) => state.profile || initialState;

export const SelectProfile = createSelector(selectProfileState, (state) => state.profile);
