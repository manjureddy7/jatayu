import * as React from 'react';

import usersReducer from './usersReducer';
import { USERS_INITIAL_STATE } from './constants';

// Create context
const UsersContext = React.createContext();

// Export context as hook
function useUsers() {
  const context = React.useContext(UsersContext);
  if (!context) {
    throw new Error('useCount must be used within a UsersProvider');
  }
  return context;
}

function UsersProvider(props) {
  const [projects, projectsDispatch] = React.useReducer(usersReducer, USERS_INITIAL_STATE);
  const value = React.useMemo(() => [projects, projectsDispatch], [projects]);
  // eslint-disable-next-line
  return <UsersContext.Provider value={value} {...props} />;
}

export { UsersProvider, useUsers };
