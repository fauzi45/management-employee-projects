import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTeamProjectState = (state) => state.teamProject || initialState;

export const selectTeamProject = createSelector(selectTeamProjectState, (state) => state.teamProject);