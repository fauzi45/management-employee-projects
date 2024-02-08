import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDepartmentDetailState = (state) => state?.newDepartment || initialState;

export const selectDepartmentDetail = createSelector(selectDepartmentDetailState, (state) => state?.data);