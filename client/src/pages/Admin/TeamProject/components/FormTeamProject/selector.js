import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProjectDetailState = (state) => state?.newProject || initialState;

export const selectProjectDetail = createSelector(selectProjectDetailState, (state) => state?.data);