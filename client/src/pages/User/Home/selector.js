import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMyTeamState = (state) => state.myTeam || initialState;

export const selectMyTeam = createSelector(selectMyTeamState, (state) => state.myTeam);