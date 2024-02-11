import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEmployeeDetailState = (state) => state?.newEmployee || initialState;

export const selectEmployeeDetail = createSelector(selectEmployeeDetailState, (state) => state?.data);