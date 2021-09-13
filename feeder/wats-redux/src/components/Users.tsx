import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTempUser } from '../store/actions';
import { RootState } from '../store/reducers';
import getAsyncPosts from '../store/thunks/getPosts';
/**
 * Using useDispatch & useSelector in this component instead of the default connect function
 */

const Users = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.usersReducer['users']) as string[];
  const [user, setUser] = React.useState<string>('user_3');
  const addDummyUser = () => {
    if (!user) return;
   dispatch(addTempUser(user));
   setUser('');
  };
  return (
    <div className="content">
      <h3>List of all dummy users</h3>
      {users.map((dUser) => (<li key={dUser}>{dUser}</li>))}
      <input type="text" placeholder="add user" value={user} onChange={(e) => setUser(e.target.value)} />
      <button style={{ marginTop: '10px' }} type="button" onClick={addDummyUser}>Add User</button>
      <button type="button" onClick={() => dispatch(getAsyncPosts())}>Get Async Posts - check redux devtool</button>
    </div>
  );
};

export default Users;
