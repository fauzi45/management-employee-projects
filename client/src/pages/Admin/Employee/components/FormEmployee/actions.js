import {ADD_NEW_EMPLOYEE, GET_DETAIL_EMPLOYEE, SET_DETAIL_EMPLOYEE, UPDATE_EMPLOYEE } from "./constants";

export const addNewEmployee = (data,cb) => ({
    type: ADD_NEW_EMPLOYEE,
    data,
    cb
});

export const getDetailEmployee = (id) => ({
    type: GET_DETAIL_EMPLOYEE,
    id
});

export const setDetailEmployee = (data) => ({
    type: SET_DETAIL_EMPLOYEE,
    data
});

export const setUpdateEmployee = (id,data,cb) => ({
    type: UPDATE_EMPLOYEE,
    id,
    data,
    cb
})