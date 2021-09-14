import React, { useState } from 'react';
import { ADD_USER } from '../context/users/constants';
import { useUsers } from '../context/users/usersContext';
import titleCase from '../helpers';
import getAsyncPosts from '../api';

const Users = () => {
  const [{ users, posts }, usersDispatch] = useUsers();
  console.log('posts', posts);
  const [user, setUser] = useState('user_3');
  const addDummyUser = () => {
   if (!user) return;
   const mockUser = titleCase(user);
   usersDispatch({ type: ADD_USER, payload: mockUser });
   setUser('');
  };
  return (
    <div className="content">
      <h3>List of all dummy users</h3>
      {users.map((dUser) => (<li key={dUser}>{dUser}</li>))}
      <input type="text" placeholder="add user" value={user} onChange={(e) => setUser(e.target.value)} />
      <button style={{ marginTop: '10px' }} type="button" onClick={addDummyUser}>Add User</button>
      <button type="button" onClick={() => getAsyncPosts(usersDispatch)}>Get Async Posts - check redux devtool</button>
    </div>
  );
};

export default Users;
