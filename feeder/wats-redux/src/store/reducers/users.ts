import * as actionTypes from '../action-types';


const initialUsersState = {
    users: [
        'User-1',
        'User-2',
    ],
    posts: [],
};

type ACTIONTYPE =
  | { type: "GET_USERS" }
  | { type: "ADD_USER"; payload: string }
  | { type: "ASYNC_POSTS"; payload: any}

function usersReducer(state = initialUsersState, action: ACTIONTYPE) {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return state.users;
        case actionTypes.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case actionTypes.ASYNC_POSTS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        default:
            return state;
    }
}

export default usersReducer;
