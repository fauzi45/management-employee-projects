import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjectState = (state) => state.project || initialState;

export const selectProject = createSelector(selectProjectState, (state) => state.project);