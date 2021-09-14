import {
    USERS_INITIAL_STATE, GET_USERS, ADD_USER, ASYNC_POSTS,
} from './constants';

function usersReducer(state = USERS_INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USERS:
            return state.users;
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case ASYNC_POSTS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        default:
            return state;
    }
}

export default usersReducer;
