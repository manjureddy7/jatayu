import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/actions';

/**
 * Using useDispatch & useSelector in this component instead of the default connect function
 */

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [user, setUser] = useState('User_3');
  const addDummyUser = () => {
    if (!user) return;
   dispatch(addUser(user));
   setUser('');
  };
  return (
    <div className="content">
      <h3>List of all dummy users</h3>
      {users.map((dUser) => (<li key={dUser}>{dUser}</li>))}
      <input type="text" placeholder="add user" value={user} onChange={(e) => setUser(e.target.value)} />
      <button style={{ marginTop: '10px' }} type="button" onClick={addDummyUser}>Add User</button>
    </div>
  );
};

export default Users;
