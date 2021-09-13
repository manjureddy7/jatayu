import { asyncPosts } from '../actions';

export default function getAsyncPosts() {
    return function (dispatch) {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
          dispatch(asyncPosts(posts));
        });
    };
}
