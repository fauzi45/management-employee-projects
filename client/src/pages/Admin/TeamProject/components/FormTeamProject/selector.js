import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTeamProjectDetailState = (state) => state?.newTeamProject || initialState;

export const selectTeamProjectDetail = createSelector(selectTeamProjectDetailState, (state) => state?.data);