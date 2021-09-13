import * as actionTypes from '../action-types';

const initialState = {
    projects: [
        'React web-app with JS support!',
        'React web-app with TS support!',
        'React component-library with JS support!',
        'React component-library with TS support!',
        'Basic React-Redux web-app with JS support!',
        'Basic React-Redux web-app with TS support!',
        'Advanced React-Redux web-app with JS support',
        'Advanced React-Redux web-app with TS support',
        'Redux Toolkit React web-app with JS!',
        'Redux Toolkit React web-app with TS!',
    ],
    posts: [],
};

function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PROJECTS:
            return state.projects;
            case actionTypes.ASYNC_POSTS:
                return {
                    ...state,
                    posts: [...state.posts, action.payload],
                };
        default:
            return state;
    }
}
export default projectsReducer;
