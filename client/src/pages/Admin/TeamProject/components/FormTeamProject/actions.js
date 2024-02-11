import { ADD_NEW_PROJECT, GET_DETAIL_PROJECT, SET_DETAIL_PROJECT, UPDATE_PROJECT } from "./constants";

export const addNewProject = (data,cb) => ({
    type: ADD_NEW_PROJECT,
    data,
    cb
});

export const getDetailProject = (id) => ({
    type: GET_DETAIL_PROJECT,
    id
});

export const setDetailProject = (data) => ({
    type: SET_DETAIL_PROJECT,
    data
});

export const setUpdateProject = (id,data,cb) => ({
    type: UPDATE_PROJECT,
    id,
    data,
    cb
})