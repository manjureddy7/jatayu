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
