import * as actionTypes from '../action-types';

const initialState = {
    users: [
        'User-1',
        'User-2',
    ],
    posts: [],
};

function usersReducer(state = initialState, action) {
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
