import { combineReducers } from 'redux';

import projects from './projects';
import users from './users';

export default combineReducers({
    projects,
    users,
});
