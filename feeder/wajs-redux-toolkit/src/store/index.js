import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    users: usersReducer,
  },
});

export default store;
