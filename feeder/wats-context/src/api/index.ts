import { ASYNC_POSTS } from '../context/users/constants';

export const getAsyncPosts = async (dispatch) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await data.json();
    dispatch({ type: ASYNC_POSTS, payload: response });
};

export default getAsyncPosts;
