import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../store/storeHooks';
import { postsAsync, addDummyUser, getUsers } from '../store/slices/usersSlice';

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const [user, setUser] = React.useState('user_3');
  const addDummyUserToStore = () => {
    if (!user) return;
    dispatch(addDummyUser(user));
    setUser('');
  };
  return (
    <div className="content">
      <h3>List of all dummy users</h3>
      {users.map((dUser) => (<li key={dUser}>{dUser}</li>))}
      <input type="text" placeholder="add user" value={user} onChange={(e) => setUser(e.target.value)} />
      <button style={{ marginTop: '10px' }} type="button" onClick={addDummyUserToStore}>Add User</button>
      <button
        type="button"
        onClick={() => dispatch(postsAsync())}
      >
        Get Async Posts - check redux devtool
      </button>
    </div>
  );
};

export default Users;