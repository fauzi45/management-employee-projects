import { GET_MY_DETAIL, SET_MY_DETAIL } from "./constants";

export const getMyDetail = (id,cb) => ({
    type: GET_MY_DETAIL,
    id,
    cb
});

export const setMyDetail = (myProjectDetail) => ({
    type: SET_MY_DETAIL,
    myProjectDetail
})