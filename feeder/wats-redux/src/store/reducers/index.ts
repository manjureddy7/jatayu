import { combineReducers } from 'redux';

import projects from './projects';
import users from './users';

const rootReducer = combineReducers({
    projectsReducer: projects,
    usersReducer: users,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
