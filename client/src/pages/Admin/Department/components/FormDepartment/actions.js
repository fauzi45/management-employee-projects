import { ADD_NEW_DEPARTMENT, GET_DETAIL_DEPARTMENT, SET_DETAIL_DEPARTMENT, UPDATE_DEPARTMENT } from "./constants";

export const addNewDepartment = (data,cb) => ({
    type: ADD_NEW_DEPARTMENT,
    data,
    cb
});

export const getDetailDepartment = (id) => ({
    type: GET_DETAIL_DEPARTMENT,
    id
});

export const setDetailDepartment = (data) => ({
    type: SET_DETAIL_DEPARTMENT,
    data
});

export const setUpdateDepartment = (id,data,cb) => ({
    type: UPDATE_DEPARTMENT,
    id,
    data,
    cb
})