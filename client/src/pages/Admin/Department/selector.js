import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDepartmentState = (state) => state.department || initialState;

export const selectDepartment = createSelector(selectDepartmentState, (state) => state.department);