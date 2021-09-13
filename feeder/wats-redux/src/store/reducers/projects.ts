import * as actionTypes from '../action-types';

const initialProjectState = {
    projects: [
        'React web-app with JS & TS supports',
        'React component-library with JS & TS supports',
        'React-Redux web-app with JS & TS support',
        'Advanced React-Redux web-app with JS & TS support',
        'React Redux-Toolkit  web-app with JS & TS',
        'React web-app with context only state management'
    ],
    posts: [],
};

type ACTIONTYPE =
  | { type: "GET_PROJECTS" }
  | { type: "ASYNC_POSTS"; payload: any };

function projectsReducer(state = initialProjectState, action: ACTIONTYPE) {
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
