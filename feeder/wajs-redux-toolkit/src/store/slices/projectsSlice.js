import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
    list: [
        'React web-app with JS & TS supports',
        'React component-library with JS & TS supports',
        'React-Redux web-app with JS & TS support',
        'Advanced React-Redux web-app with JS & TS support',
        'React Redux-Toolkit  web-app with JS & TS',
        'React web-app with context only state management',
    ],
};

// Define slice here
const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
    },

});

// This works like a selector
export const getProjects = (state) => state.projects.list;

// export reducer
export default projectsSlice.reducer;
