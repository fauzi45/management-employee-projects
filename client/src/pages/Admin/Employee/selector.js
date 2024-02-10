import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEmployeeState = (state) => state.employeeData || initialState;

export const selectEmployee = createSelector(selectEmployeeState, (state) => state.employeeData);