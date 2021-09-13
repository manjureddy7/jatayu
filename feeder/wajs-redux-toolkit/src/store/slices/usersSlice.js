import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import titleCase from '../../helpers';

const initialState = {
    list: [
        'User-1',
        'User-2',
    ],
    posts: [], // This data will get from dummy API
};

// A mock function  making an async request for data
export function fetchPostsFromApi() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}

// This is a typical thunk
export const postsAsync = createAsyncThunk(
    'users/fetchPosts',
    async () => {
      const response = await fetchPostsFromApi();
      const posts = await response.json();
      // The value we return becomes the `fulfilled` action payload
      return posts;
    },
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = action.payload;
            state.list.push(user);
        },
    },
    // The below actions under extraReducers will be listen from createAsyncThunk or other slices
    extraReducers: (builder) => {
        builder
         .addCase(postsAsync.fulfilled, (state, action) => {
            const posts = action.payload;
            state.posts.push(posts);
         });
    },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;

// This works like a selector
export const getUsers = (state) => state.users.list;
export const getProjects = (state) => state.projects.list;

// This is a typical middleware
export const addDummyUser = (user) => (dispatch) => {
    const refinedUser = titleCase(user);
    dispatch(addUser(refinedUser));
};
