import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectClientState = (state) => state.login || initialState;

export const selectLogin = createSelector(selectClientState, (state) => state.login);
export const selectToken = createSelector(selectClientState, (state) => state.token);
