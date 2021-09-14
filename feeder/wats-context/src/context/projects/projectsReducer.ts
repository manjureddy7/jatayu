import { GET_PROJECTS, PROJECTS_INITIAL_STATE } from './constants';

function projectsReducer(state = PROJECTS_INITIAL_STATE, action: any) {
    switch (action.type) {
        case GET_PROJECTS:
            return state.projects;
        default:
            return state;
    }
}
export default projectsReducer;
