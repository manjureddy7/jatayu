import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import titleCase from '../../helpers';
import { RootState, AppDispatch, AppThunk } from '..';

export interface PostsState {
    userId: number;
    id: number,
    title: string;
    body: string;
}
export interface UserState {
    list: string[],
    posts: Array<PostsState>,
}
const initialState: UserState = {
    list: [
        'User-1',
        'User-2',
    ],
    posts: [],
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
        addUser: (state, action: PayloadAction<string>) => {
            const user = action.payload;
            state.list.push(user);
        },
    },
    // The below actions under extraReducers will be listen from createAsyncThunk or other slices
    extraReducers: (builder) => {
        builder
         .addCase(postsAsync.fulfilled, (state, action: PayloadAction<PostsState[]>) => {
            const posts = action.payload;
            state.posts = posts;
         });
    },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;

// This works like a selector
export const getUsers = (state: RootState) => state.users.list;
export const getProjects = (state: RootState) => state.projects.list;

// This is a typical middleware
export const addDummyUser = (user: string): AppThunk => (dispatch: AppDispatch) => {
    const refinedUser = titleCase(user);
    dispatch(addUser(refinedUser));
};
