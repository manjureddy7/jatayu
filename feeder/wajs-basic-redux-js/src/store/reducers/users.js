import * as actionTypes from '../action-types';

const initialState = {
    users: [
        'User-1',
        'User-2',
    ],
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return state.users;
        case actionTypes.ADD_USER:
            console.log('payload in user', action.payload);
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        default:
            return state;
    }
}

export default usersReducer;
