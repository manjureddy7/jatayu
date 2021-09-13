import * as actionTypes from '../action-types';

export function getProjects() {
    return { type: actionTypes.GET_PROJECTS };
}

export function getUsers() {
    return { type: actionTypes.GET_USERS };
}

export function addUser(user) {
    return { type: actionTypes.ADD_USER, payload: user };
}

export function addTempUser(user) {
    return { type: actionTypes.TEMP_USER, payload: user };
}

export function asyncPosts(posts) {
    return { type: actionTypes.ASYNC_POSTS, payload: posts };
}
