import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMyDetailState = (state) => state.myDetail || initialState;

export const selectMyDetail = createSelector(selectMyDetailState, (state) => state.myProjectDetail)